import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { GLOBAL } from './global';

@Injectable()
export class UsuarioService {
  public url:string

  constructor(
    private _http:HttpClient
  ) {

    this.url = GLOBAL.url;
  }

  getLogin(user,pass){
    let params = JSON.stringify({email:user,password:pass});
    let headers = new HttpHeaders();

    headers = headers.set('Content-Type', 'application/json');
    return this._http.post(this.url+'login', params,{headers: headers});
  }
}
