<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserViewResource extends JsonResource
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
            'first_name' => $this->fname,
            'surname' => $this->sname,
            'email' => $this->email,
            'email_verified_at' => $this->email_verified_at,
            'twofa' => empty($this->two_factor_confirmed_at) ? false : true,
            'gender' => $this->gender,
            'bdate' => $this->bdate,
            'twofa_codes' => !empty($this->two_factor_confirmed_at) ? json_decode(Crypt::decrypt($this->two_factor_recovery_codes, true)) : [],
        ];
    }
}
