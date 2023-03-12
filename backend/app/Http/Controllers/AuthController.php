<?php

namespace App\Http\Controllers;

use App\Mail\VerifyAccountNotificationMail;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Mail;

class AuthController extends Controller
{

    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register', 'test']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    {
        $credentials = request(['email', 'password']);

        $token = auth()->attempt($credentials);

        if (! $token) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->respondWithToken($token);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }

     /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth('api')->factory()->getTTL() * 60
        ]);
    }

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'is_error' => true,
                'message' => $validator->errors()], 422);
        }

       


        return DB::transaction(function() use ($request) {
            try{
                $user = User::create([
                    'name' => $request->name,
                    'email' => $request->email,
                    'password' => Hash::make($request->password),
                ]);
    
                $token = Auth::login($user);
    
                
                try {
                    $myEmail = 'nygarcia46@misena.edu.co';
                    Mail::to($myEmail)->send(new VerifyAccountNotificationMail());
    
                    return response()->json([
                        'is_error' => false,
                        'message' => 'User created successfully',
                        'user' => $user,
                        'Auth' => [
                            'token' => $token,
                            'type' => 'bearer',
                        ]
                    ]);
                } catch (\Throwable $ex) {
                    DB::rollback();
                    return response()->json(['status' => false, 'message' => 'something went wrong send email'.$ex], 400);
                }
                
            }catch (\Exception $ex) {
                DB::rollback();
                // throw $ex;
                return response()->json(['status' => false, 'message' => 'something went wrong registro dog o usuario'.$ex], 400);
            }
           
            
        });
    }

    public function test(){
        return "hello";
    }
}
// hacer api y ruta de login pendiente
