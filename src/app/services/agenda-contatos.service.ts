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

getToken(): string{
  return String(window.localStorage.getItem(this.KEYTOKEN));
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

setHeaderToken() {
  const header =  { headers: {
    "Authorization": 'Bearer '+ this.getToken(),
    "Content-Type": "application/json"
  }};
  return header;
}

getListaContatos(termo="") {
  const body={termo};
  return this.httpClient.post(environment.urlLogin+"/api/contato/pesquisar", body, this.setHeaderToken());
}

deletarContato(idContato:number) {
  return this.httpClient.delete(environment.urlLogin+"/api/contato/remover/"+idContato, this.setHeaderToken())
}

}
