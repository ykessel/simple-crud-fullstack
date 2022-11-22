import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlmacenesAddComponent } from './componentes/almacen/almacenes-add/almacenes-add.component';
import { AlmacenesEditComponent } from './componentes/almacen/almacenes-edit/almacenes-edit.component';
import { AlmacenesListComponent } from './componentes/almacen/almacenes-list/almacenes-list.component';
import { NavComponent } from './componentes/nav/nav.component';
import { ProductosAddComponent } from './componentes/producto/productos-add/productos-add.component';
import { ProductosEditComponent } from './componentes/producto/productos-edit/productos-edit.component';
import { ProductosListComponent } from './componentes/producto/productos-list/productos-list.component';
import { VentasAddComponent } from './componentes/venta/ventas-add/ventas-add.component';
import { VentasEditComponent } from './componentes/venta/ventas-edit/ventas-edit.component';
import { VentasListComponent } from './componentes/venta/ventas-list/ventas-list.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      { path: 'ventas-list', component: VentasListComponent },
      { path: 'ventas-list/ventas-add', component: VentasAddComponent },
      { path: 'ventas-list/ventas-edit', component: VentasEditComponent },
      { path: 'productos-list', component: ProductosListComponent, children: []},
      { path: 'productos-list/productos-add', component: ProductosAddComponent },
      { path: 'productos-list/productos-edit', component: ProductosEditComponent },
      { path: 'almacenes-list', component: AlmacenesListComponent },
      { path: 'almacenes-list/almacenes-add', component: AlmacenesAddComponent },
      { path: 'almacenes-list/almacenes-edit', component: AlmacenesEditComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
