
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { Pessoa, Endereco } from './app.component';

@Component({
  selector: 'app-address',
  template: `
    <ul ngModelGroup="address-{{index}}" >
      <li>
        <label>CEP:</label>
        <input type="text" name="cep" required [(ngModel)]="endereco.cep">
      </li>
      <li>
        <label>Logradouro:</label>
        <input type="text" name="logradouro" required [(ngModel)]="endereco.logradouro">
      </li>
      <li>
        <label>Cidade:</label>
        <input type="text" name="cidade" required [(ngModel)]="endereco.cidade">
      </li>
      <br>
      <button type="button" (click)="removerEndereco()">Remover Endereço</button>
      </ul>
  `,
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class AddressComponent  {

  @Input()
  endereco: Endereco;

  @Input()
  index: number;

  @Output()
  remover: EventEmitter<Endereco> = new EventEmitter();

  removerEndereco() {
    this.remover.emit(this.endereco);
  }
}
