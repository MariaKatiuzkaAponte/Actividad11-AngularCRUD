import { Component, OnInit } from '@angular/core';
import {RegistroService} from '../service/registro.service'
import { Router , ActivatedRoute} from '@angular/router'
import { RegistroModel } from '../models/registro-model'

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  public registro: RegistroModel;
  public idRegistro;

  constructor(
    private registroService: RegistroService,
    private routeParams: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {

    this.idRegistro = this.routeParams.snapshot.paramMap.get('id');
    this.getDataRegistro()
  }

  getDataRegistro(){
    this.registroService.getOne(this.idRegistro).subscribe(
      res=>{
        this.registro= res
      }, 
      err=> console.log(err)
    )
  }

  /* Modificar */
  update(){
    this.registroService.editUser(this.registro).subscribe(
      res=>{
        if (res.message=='El usuario se ha actualizado') {
          alert('Usuario modificado correctamente!!')
          this._router.navigate(['/mostrar'])
        }
      },
      err=> console.log(err)
    )
  }


}
