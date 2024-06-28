import { Component, OnInit } from '@angular/core';
import { ProdottiService } from '../../services/prodotti.service';
import { Prodotto } from '../../models/prodotto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prodotto-detail',
  templateUrl: './prodotto-detail.component.html',
  styleUrl: './prodotto-detail.component.css'
})
export class ProdottoDetailComponent implements OnInit{
  prodotto? : Prodotto;

  constructor(private ps : ProdottiService, private route : ActivatedRoute){  }

  addToCart(){
    this.ps.aggiungiACarrello(this.prodotto!);
  }
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    
    this.ps.getProdottiById(id).subscribe(p => {
      this.prodotto = p;
    });
  }
}
