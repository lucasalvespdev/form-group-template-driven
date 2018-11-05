import { Component, ViewChild } from '@angular/core';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name: 'teste';
  @ViewChild('myForm')
  myform: NgForm;

  pessoa: Pessoa = {
    nome: 'Lucas',
    idade: 26,
    endereco: [
      {cep: '19700000', logradouro: 'Rua Santos Dumont, 409', cidade: 'Paraguaçu Paulista'},
      {cep: '19806100', logradouro: 'Rua General Carneiro, 399', cidade: 'Assis'}
    ]
  };

adicionarEndereco() {
  this.pessoa.endereco.push(new Endereco());
}
formDisable(): boolean {
  return this.myform.pristine || !this.myform.valid;
}

getFormControls() {
  console.log('Form.: ', this.myform.controls);
}

removerEndereco(index: number, endereco: Endereco) {
  console.log('index: ', index);

  // this.pessoa.endereco.splice(index, 1);
  this.pessoa.endereco = this.pessoa.endereco.filter((address) => address !== endereco);
}

}

export class Pessoa {
  nome: string;
  idade: number;
  endereco: Array<Endereco>;
}

export class Endereco {
  cep: string;
  logradouro: string;
  cidade: string;
}
