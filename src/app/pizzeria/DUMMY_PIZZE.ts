import { type Pizza } from './pizza/pizza.model';

export const arrayPizze: Pizza[] = [
  {
    id: 0,
    nomePizza: 'Margherita',
    ingredienti: ['Pomodoro', 'Mozzarella', 'Basilico'],
    prezzo: 8,
    disponibilita: true,
  },
  {
    id: 1,
    nomePizza: 'Diavola',
    ingredienti: ['Pomodoro', 'Mozzarella', 'Salame piccante'],
    prezzo: 10,
    disponibilita: true,
  },
  {
    id: 2,
    nomePizza: 'Quattro Formaggi',
    ingredienti: ['Mozzarella', 'Gorgonzola', 'Fontina', 'Parmigiano'],
    prezzo: 12,
    disponibilita: false,
  },
  {
    id: 3,
    nomePizza: 'Vegetariana',
    ingredienti: ['Pomodoro', 'Mozzarella', 'Zucchine', 'Peperoni'],
    prezzo: 9,
    disponibilita: true,
  },
  {
    id: 4,
    nomePizza: 'Capricciosa',
    ingredienti: ['Pomodoro', 'Mozzarella', 'Prosciutto cotto', 'Funghi'],
    prezzo: 11,
    disponibilita: false,
  },
];
