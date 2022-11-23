import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AgendaContatosService } from '../services/agenda-contatos.service';
import Swal from 'sweetalert2';

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
    })
  }

  pesquisarContatos() {
    this.getListaContatos(this.formPesquisa.value.termo)
  }

  removeContato(contato:any){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-outline-danger',
        cancelButton: 'btn btn-outline-secondary mx-4'
      },
      buttonsStyling: false
    })
   swalWithBootstrapButtons.fire({
      title: 'Tem certeza que deseja excluir?',
      text: contato.pessoa.nome,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Deletar',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.agendaContatosService.deletarContato(contato.id)
        .subscribe(() => {
          swalWithBootstrapButtons.fire(
            'Contato',
            'Deletado com sucesso!',
            'success'
          );
          this.getListaContatos('');
        }, error => {
          swalWithBootstrapButtons.fire(
            'Erro ao deletar',
            '',
            'error',
          );
        })
      }
    })
  }

}
