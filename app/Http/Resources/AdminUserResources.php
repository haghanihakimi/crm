<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Crypt;

class AdminUserResources extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'fname' => $this->fname,
            'sname' => $this->sname,
            'email' => $this->email,
            'email_verified_at' => $this->email_verified_at,
            'password' => $this->default_password,
            'twofa' => empty($this->two_factor_confirmed_at) ? false : true,
            'gender' => $this->gender,
            'twofa_codes' => !empty($this->two_factor_confirmed_at) ? json_decode(Crypt::decrypt($this->two_factor_recovery_codes, true)) : [],
            'roles' => $this->roles,
            'permissions' => $this->permissions,
        ];
    }
}
