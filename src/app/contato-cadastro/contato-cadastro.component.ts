import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato-cadastro',
  templateUrl: './contato-cadastro.component.html',
  styleUrls: ['./contato-cadastro.component.scss']
})
export class ContatoCadastroComponent implements OnInit {
  cadastroContato!: FormGroup;

  constructor(
    private formBuilder: FormBuilder

  ) { }

  ngOnInit() {
    this.setFormGroup()
  }

  setFormGroup() {
    this.cadastroContato = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, Validators.required],
      telefone: [null, Validators.required],
      cpf: [null, Validators.required],
      fotoName: [null],
      fotoUrl: [null],
      rua: [null],
      numero: [null],
      bairro: [null],
      cidade: [null],
      estado: [null],
      pais: [null],
      cep: [null]
    })
  }

  cadastrarContatos() {
    console.log(this.cadastroContato.value)
  }

}
