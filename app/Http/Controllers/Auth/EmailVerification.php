<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Lang;
use Illuminate\Support\Facades\URL;
use App\Notifications\EmailVerificationNotification;
use Carbon\Carbon;

class EmailVerification extends Controller
{
    /**
     * Checks user identity and verifies email accordingly
     */
    public function verifyEmail (EmailVerificationRequest $request) {
        $request->fulfill();
        return redirect('dashboard')->with('message', 'Your email successfully verified.');
    }

    /**
     * Send email verification link to requested user email address
     */
    public static function sendLink ($url, $user) {
        $data = [
            "header" => "Hi ".$user->fname.",<br/>Please follow below link to verify your account.",
            "button" => "Verify Email Address",
            "link" => $url,
        ];

        Notification::send($user, new EmailVerificationNotification($data));
    }

    /**
     * Generate a unique URL to verify email address
     */
    public static function url($path, $user)
    {
        return URL::temporarySignedRoute(
            $path,
            Carbon::now()->addMinutes(Config::get('auth.verification.expire', 30)),
            [
                'id' => $user->getKey(),
                'hash' => sha1($user->getEmailForVerification())
            ]
        );
    }
}
