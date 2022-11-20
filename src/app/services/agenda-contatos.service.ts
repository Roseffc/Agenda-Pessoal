import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

type BodyType={
  username: string;
  passoword: string
};

@Injectable({
  providedIn: 'root'
})
export class AgendaContatosService {

private KEYTOKEN = 'metaway';

constructor(
  private httpClient: HttpClient,
  private router: Router
) { }

getToken() {
  return window.localStorage.getItem(this.KEYTOKEN);
}

setToken(token:string) {
  window.localStorage.setItem(this.KEYTOKEN, token);
}

login(body:BodyType){
  this.httpClient.post(environment.urlLogin+"/api/auth/login", body).subscribe((result:any) => {
    this.setToken(result.accessToken);
    this.router.navigateByUrl('/home')
  });
}

getListaContatos() {
  // /api/contato/pesquisar
}

}