import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' 

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  private apiUrl="http://localhost:3000/"

  constructor(private http: HttpClient) { }

  /* Crear un usuario */

  createRegistro(registro){
    return this.http.post<any>(this.apiUrl + "registro/create", registro)        
  }

  /* Mostrar todos los usuarios */

  getUsers(){
    return this.http.get<any>(this.apiUrl + 'registro/get')
  }

  /* Mostrar usuario en especifico */
  getOne(id){
    return this.http.get<any>(this.apiUrl + 'registro/get/' + id)   
  }

  /* Modificar */

  editUser(registroParams){
    return this.http.put<any>(this.apiUrl + 'registro/update/' + registroParams._id, registroParams)  
  }

  /* Eliminar */

  deleteRegistro(registro){
    const _id= registro._id
    return this.http.delete<any>(this.apiUrl + 'registro/delete/' + _id)  
  }
  


}

