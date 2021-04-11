import { Component, OnInit } from '@angular/core';
import {RegistroService} from '../service/registro.service'

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {

  registros=[] 

  constructor(private registroService: RegistroService) { }

  ngOnInit(): void {

    this.showAllUsers()
  }

  /* Mostrar todos los usuarios registrados */

  showAllUsers(){
    this.registroService.getUsers().subscribe(
      res=>{ this.registros= res
      }, err=> console.log(err)
    )
  }

  /* Eliminar usuario */

  delete(registroDelete){
    this.registroService.deleteRegistro(registroDelete).subscribe(
      res=>{ 
        const index= this.registros.indexOf(registroDelete)
        if (index>-1) {
          this.registros.splice(index, 1)
        }
      },
       err=> console.log(err)
    )
  }

}
