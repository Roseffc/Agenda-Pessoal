import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {
  formCadastroUsuario!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.setFormGroup()
  }

  setFormGroup() {
    this.formCadastroUsuario = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, Validators.required],
      telefone: [null, Validators.required],
      cpf: [null, Validators.required],
      dataNascimento: [null],

    })
  }

  cadastrarUsuario() {
    console.log(this.formCadastroUsuario.value)
  }

}
