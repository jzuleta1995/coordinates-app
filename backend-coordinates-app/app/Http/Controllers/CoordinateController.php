<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
//Lib Client Rest
use GuzzleHttp\Client;

class CoordinateController extends Controller
{

  //function to get all Coordinates of city of chicago
  public function getAll(){
    try{
      //Client EndPoint
      $client = new Client();
      //Response data city of Chicago
      $response = $client->get('https://data.cityofchicago.org/resource/ydr8-5enu.json');
      //Return response content
      return $response->getBody()->getContents();
    }catch(Exception $e){
      return $e->getMessage();
    }
  }

}
