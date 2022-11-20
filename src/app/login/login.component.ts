import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AgendaContatosService } from '../services/agenda-contatos.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;

  constructor(
    private agendaContatosService:AgendaContatosService,
    private formBuider: FormBuilder
  ) { }

  ngOnInit(): void {
    this.setFormGroup();

  }

  setFormGroup() {
    this.formLogin = this.formBuider.group({
      password: [null, Validators.required],
      username: [null, Validators.required]
    })
  }

  logar() {
   console.log(this.formLogin.value)
  this.agendaContatosService.login(this.formLogin.value)
  }

}
