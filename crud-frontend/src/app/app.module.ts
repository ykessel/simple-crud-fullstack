import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

// GraphQl
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';

// Componentes
import { AppComponent } from './app.component';
import { NavComponent } from './componentes/nav/nav.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { ProductosListComponent } from './componentes/producto/productos-list/productos-list.component';
import { VentasListComponent } from './componentes/venta/ventas-list/ventas-list.component';
import { VentasEditComponent } from './componentes/venta/ventas-edit/ventas-edit.component';
import { VentasAddComponent } from './componentes/venta/ventas-add/ventas-add.component';
import { AlmacenesListComponent } from './componentes/almacen/almacenes-list/almacenes-list.component';
import { ProductosEditComponent } from './componentes/producto/productos-edit/productos-edit.component';
import { ProductosAddComponent } from './componentes/producto/productos-add/productos-add.component';
import { AlmacenesAddComponent } from './componentes/almacen/almacenes-add/almacenes-add.component';
import { AlmacenesEditComponent } from './componentes/almacen/almacenes-edit/almacenes-edit.component';

// Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';

const defaultOptions: any = {
      watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'ignore',
      },
      query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
      },
    }

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductosListComponent,
    AlmacenesListComponent,
    VentasListComponent,
    VentasEditComponent,
    VentasAddComponent,
    NavComponent,
    ProductosEditComponent,
    ProductosAddComponent,
    AlmacenesAddComponent,
    AlmacenesEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ApolloModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [{
    provide: APOLLO_OPTIONS,
    useFactory(httpLink: HttpLink) {
      return {
        cache: new InMemoryCache(),
        defaultOptions: defaultOptions,
        link: httpLink.create({
          uri: 'http://localhost:3000/graphql'
        })
      }
    },
    deps: [HttpLink]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
