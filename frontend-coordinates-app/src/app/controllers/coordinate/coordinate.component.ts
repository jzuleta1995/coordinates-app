import { Component, OnInit } from '@angular/core';
import { CoordinateService } from '../../services/coordinate.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-coordinate',
  templateUrl: './coordinate.component.html',
  styleUrls: ['./coordinate.component.css']
})
export class CoordinateComponent implements OnInit {
  public title: string;
  public page: number;
  public coordinates: any;
  public term: any;

  constructor(private _coordinateService: CoordinateService) {
     this.title = 'Coordenadas Ciudad de Chicago';
     this.coordinates = [];
     this.page = 1;
   }

  ngOnInit(): void {
    this._coordinateService.getCoordinates()
    .subscribe(
      response => {
        if(!response){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No hay información para mostrar!'
          });
        }else{
          console.log(response);
          this.coordinates = response;
        }
      },
      error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Ha Ocurrido un error!'
        });
        console.log(<any>error);
      }
    )
  }

  public showData(){

  }

}
