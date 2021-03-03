<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CoordinateController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::group(['middleware' => ['cors']], function () {
    //Routes allowed to access

    //Route to get All coordinates of Chicago
    Route::get('/coordinates/all', function(){
        $coordinate = new CoordinateController();
        return json_decode($coordinate->getAll());
    });
});
