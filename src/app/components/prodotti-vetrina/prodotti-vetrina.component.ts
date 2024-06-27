import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProdottiService } from '../../services/prodotti.service';
import { Prodotto } from '../../models/prodotto';

@Component({
  selector: 'app-prodotti-vetrina',
  templateUrl: './prodotti-vetrina.component.html',
  styleUrl: './prodotti-vetrina.component.css'
})
export class ProdottiVetrinaComponent implements OnInit, OnDestroy{
  prodotti:Prodotto [] = [];
  //Dependency Injection DI
  constructor(private ps: ProdottiService){
    
  }

  //quando viene distrutto o finisce il suo ciclo di vita
  ngOnDestroy(): void {
    console.log('Addio...');
  }

  //Quando viene inizializato un nuovo componente
  ngOnInit(): void {
    this.ps.getProdotti().subscribe(dati => {
      this.prodotti = dati;
    });
  }
}
