import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UsuarioService]
})
export class LoginComponent implements OnInit {
  public usuario:Usuario;

  constructor(
    private _serviceUsuario:UsuarioService,
    private _router:Router
  ) {
    this.usuario = new Usuario(1,'','','','','');
   }

  ngOnInit() {
  }

  iniciarSesion(){
    this._serviceUsuario.getLogin(this.usuario.email,this.usuario.password).subscribe(
      response=>{
        if(response['ok']){
          this._router.navigate(['/home']);
        }else{
          alert(response['message']);
        }
      },
      error=>{
        console.log(<any>error);
      }
    )
  }

}
