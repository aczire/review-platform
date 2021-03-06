<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserBan extends Model {

    protected $fillable = [
        'user_id',
        'domain',
        'expires',
    ];

    protected $dates = [
        'expires',
        'created_at',
        'updated_at',
    ];

}


?>