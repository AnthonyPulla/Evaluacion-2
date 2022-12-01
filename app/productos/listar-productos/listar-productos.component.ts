import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Product } from 'src/app/domain/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})

export class ListarProductosComponent {

  title = "LISTADO DE PRODUCTOS"

  products: any

  constructor(private router:Router,private productService:ProductsService){}


  loadProducts(){
    // this.lstProducts=this.productService.getProducts()
    this.products=this.productService.getProductsFire()
    console.log(this.lstProducts)
  }

}
