import { Component, Input } from '@angular/core';
import { type Pizza } from './pizza.model';

@Component({
  selector: 'app-pizza',
  standalone: true,
  imports: [],
  templateUrl: './pizza.component.html',
  styleUrl: './pizza.component.css',
})
export class PizzaComponent {
  @Input() pizza?: Pizza;
}
