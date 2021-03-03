<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class Cors
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        return $next($request)
        //Url allowed
        ->header("Access-Control-Allow-Origin", "http://localhost:4200")
        //Methods allowed
        ->header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
        //Headers of the request
        ->header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, X-Token-Auth, Authorization");
    }
}
