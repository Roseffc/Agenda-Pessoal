import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AgendaContatosService } from '../services/agenda-contatos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  listaContatos:any=[];
  FormPesquisa!: FormGroup;
  formBuider: any;
  formPesquisa: any;


  constructor(
    private agendaContatosService: AgendaContatosService,
    private formBuilder: FormBuilder

  ) { }

  ngOnInit() {
    this.getListaContatos("");
    this.setFormGroup()
  }

  setFormGroup() {
    this.formPesquisa = this.formBuilder.group({
      termo: [null, Validators.required]
    })
  }


  getListaContatos(query:string) {
    this.agendaContatosService.getListaContatos(query)
    .subscribe((result: any) => {
      this.listaContatos=result;
      console.log(result)
    })
  }

  pesquisarContatos() {
    console.log(this.formPesquisa.value)
    this.getListaContatos(this.formPesquisa.value.termo)
  }

}
