import { Component } from '@angular/core';
// boletas.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoletasService {
  private boletas = [
    { id: 1, cliente: 'Juan Pérez', descripcion: 'Compra de equipo de oficina', estado: 'Pendiente', total: 500000, fecha: '2024-06-25' },
    { id: 2, cliente: 'María López', descripcion: 'Pago de servicios varios', estado: 'Pagada', total: 300000, fecha: '2024-06-24' },
    { id: 3, cliente: 'Carlos González', descripcion: 'Compra de suministros', estado: 'Pagada', total: 700000, fecha: '2024-06-23' }
  ];

  constructor() { }

  getBoletas() {
    return this.boletas;
  }

  getBoleta(id: number) {
    return this.boletas.find(boleta => boleta.id === id);
  }

  // Puedes agregar métodos para estadísticas de compras por periodos si es necesario
}


export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
})
export class AppListsComponent {
  constructor() {}

  typesOfShoes: string[] = ['Loafers', 'Sneakers'];

  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    },
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    },
  ];
}
