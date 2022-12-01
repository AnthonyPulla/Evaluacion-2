import { Injectable } from '@angular/core';
import { Product } from '../domain/product';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  lstProducts =new Array()
  private productsCollection: AngularFirestoreCollection<Product>;
  products:any

  constructor(private afs: AngularFirestore) {
    this.productsCollection = afs.collection<Product>('productos');
  }

  getProducts(){
    return this.lstProducts;
  }

  getProductsFire(){
    return this.productsCollection.valueChanges();
  }
}
