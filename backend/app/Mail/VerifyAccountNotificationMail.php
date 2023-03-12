<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class VerifyAccountNotificationMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('Verificar cuenta Cubikar')
                    ->from('cubikarsystems@gmail.com', '[Notificación Cubikar]')
                    ->view('mail.auth.verify-account-notification');
                    /* ->with([
                        'orderName' => $this->order->name,
                        'orderPrice' => $this->order->price,
                    ]); */
    }
}
