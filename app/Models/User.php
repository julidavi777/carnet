<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Contracts\Auth\CanResetPassword;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Support\Str;

class User extends Authenticatable implements MustVerifyEmail, CanResetPassword
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'legal_id',
        'phone_number',
        'id_torneo_seleccionado'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function getEmailAttribute()
    {
        return Str::lower($this->email);
    }

    public function setEmailAttribute($email)
    {
        $this->attributes['email'] = Str::lower($email);
    }

    public function getTorneoSeleccionadoAttribute()
    {
        return (!empty($this->id_torneo_seleccionado) ? $this->id_torneo_seleccionado : 0);
    }

    public function setTorneoIdAttribute(int $id_torneo)
    {
        $this->id_torneo_seleccionado = $id_torneo;
    }
}
