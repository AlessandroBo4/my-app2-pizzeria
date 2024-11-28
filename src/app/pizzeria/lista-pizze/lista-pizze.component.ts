import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Pizza } from '../pizza/pizza.model';
import { arrayPizze } from '../DUMMY_PIZZE';

@Component({
  selector: 'app-lista-pizze',
  standalone: true,
  imports: [],
  templateUrl: './lista-pizze.component.html',
  styleUrl: './lista-pizze.component.css',
})
export class ListaPizzeComponent {
  @Input() pizze: Pizza[] = arrayPizze;

  @Output() outputPizza = new EventEmitter<Pizza>();

  onSelectedPizza(selectedPizza: Pizza) {
    this.outputPizza.emit(selectedPizza);
  }
}
