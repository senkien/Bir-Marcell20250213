import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  products: Product[] = [];
  constructor(private producteService: ProductService) {}

  ngOnInit() {
    this.producteService.getProducts().subscribe(response =>{
      this.products = response.products;
    });
  }


}
