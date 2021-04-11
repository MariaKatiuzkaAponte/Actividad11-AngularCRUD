import { Component, OnInit } from '@angular/core';
import {RegistroService} from '../service/registro.service';
import {RegistroModel} from '../models/registro-model'

@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.css']
})
export class FormRegistroComponent implements OnInit {

  public modeloRegistro: RegistroModel;

  constructor(private serviceRegistro:RegistroService) { 
    this.modeloRegistro= new RegistroModel( '', '', 0, '', '', 0)
  }

  ngOnInit(): void {
  }

  crear(){
    this.serviceRegistro.createRegistro(this.modeloRegistro).subscribe(
      res=>{
        console.log('¡Usuario Registrado correctamente!');
      },
      err=> console.log(err)
    )
  }

}
