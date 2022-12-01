import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProductosComponent } from './productos/listar-productos/listar-productos.component';

const routes: Routes = [
  {path: '',component:ListarProductosComponent},
  {path:"product/lista",component:ListarProductosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
