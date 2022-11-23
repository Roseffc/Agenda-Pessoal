import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import { AgendaContatosService } from '../services/agenda-contatos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  listaUsuarios:any=[];
  formUsuario!: FormGroup;


  constructor(
    private agendaContatosService: AgendaContatosService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.getListaUsuarios("");
    this.setFormGroup()
  }

  setFormGroup() {
    this.formUsuario = this.formBuilder.group({
      termo: [null, Validators.required]
    })
  }


  getListaUsuarios(query:string) {
    this.agendaContatosService.getListaUsuarios(query)
    .subscribe((result: any) => {
      console.log(result)
      this.listaUsuarios=result;
    })
  }

  pesquisarUsuarios() {
    this.getListaUsuarios(this.formUsuario.value.termo)
  }

  removeUsuario(contato:any){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-outline-danger',
        cancelButton: 'btn btn-outline-secondary mx-4'
      },
      buttonsStyling: false
    })
   swalWithBootstrapButtons.fire({
      title: 'Tem certeza que deseja excluir?',
      text: '',
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
            'Usuario',
            'Deletado com sucesso!',
            'success'
          );
          this.getListaUsuarios('');
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


