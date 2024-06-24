import { Component, Input } from '@angular/core';
import { Prodotto } from '../../models/prodotto';

@Component({
  selector: 'app-prodotti-preview',
  templateUrl: './prodotti-preview.component.html',
  styleUrl: './prodotti-preview.component.css'
})
export class ProdottiPreviewComponent {
  @Input()
  prodotto?: Prodotto;
}
