
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Observable } from 'rxjs';

import { Pessoa } from './../models/pessoa.model';
import { PessoasService } from './pessoas.service';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  pessoas: Observable<Pessoa[]>;

  constructor( private pessoaService: PessoasService) {}

  ngOnInit() {
    this.pessoas = this.pessoaService.listar();
  }

  formSubmit(f: NgForm) {
    const nome = f.form.controls.nome.value;
    const sobrenome = f.form.controls.sobrenome.value;
    if (f.form.controls && nome && sobrenome) {
      console.log('valor do controle nome: ' + nome);
      this.pessoaService.inserir( {nome: nome, sobrenome: sobrenome} );
    } else {
      alert('Informe uma pessoa valida');
    }
  }

}
