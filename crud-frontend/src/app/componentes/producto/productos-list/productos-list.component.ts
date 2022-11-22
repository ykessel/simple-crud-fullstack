import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Producto } from 'src/app/models/producto';
import { ProductosService } from 'src/app/servicios/productos.service';
import { UtilsService } from 'src/app/servicios/utils.service';
import {
  Cache,
  InMemoryCache,
  Reference,
  StoreObject,
} from '@apollo/client/core';
import { gql } from 'apollo-angular';

@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
  styleUrls: ['./productos-list.component.scss'],
})
export class ProductosListComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Producto>;
  dataSource = new MatTableDataSource<Producto>();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['productoId', 'nombre', 'precio', 'opciones'];

  constructor(
    private productosServicios: ProductosService,
    private utilsService: UtilsService
  ) {}

  ngOnInit() {
    this.productosServicios.getProductos().subscribe((res: any) => {
      this.dataSource.data = res;
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  update() {
    // this.productosServicios.addProducto('prod5', 26);
  }

  remove(id: string) {
    this.productosServicios.removeProducto(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter(
        (x: Producto) => x.productoId !== id
      );
    });
  }
}
