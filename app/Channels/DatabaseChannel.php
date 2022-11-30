<?php

namespace App\Channels;

use Illuminate\Notifications\Channels\DatabaseChannel as IlluminateDatabaseChannel;
use Illuminate\Notifications\Notification;

class DatabaseChannel extends IlluminateDatabaseChannel
{
    /**
     * Send the given notification.
     *
     * @param mixed                                  $notifiable
     * @param \Illuminate\Notifications\Notification $notification
     *
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function buildPayload($notifiable, Notification $notification)
    {
        return [
            'id' => $notification->id,
            'type' => $notification->getType(),
            'data' => $this->getData($notifiable, $notification),
            'read_at' => $notification->getReadStatus(),
        ];
    }
}