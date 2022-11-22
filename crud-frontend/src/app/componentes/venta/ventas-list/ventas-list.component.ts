import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Venta } from 'src/app/models/venta';
import { VentasService } from 'src/app/servicios/ventas.service';


@Component({
  selector: 'app-ventas-list',
  templateUrl: './ventas-list.component.html',
  styleUrls: ['./ventas-list.component.scss'],
})
export class VentasListComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Venta>;
  dataSource = new MatTableDataSource<Venta>();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['ventaId', 'vendedor', 'comprador', 'opciones'];

  constructor(private ventasSericios: VentasService) {}

  ngOnInit() {
    this.ventasSericios.getVentas().subscribe((res: any) => {
      this.dataSource.data = res;
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }


  update() {
    // this.productosSericios.addProducto('prod5', 26);
  }
  remove(id: string) {
    this.ventasSericios.removeVenta(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter(
        (x: Venta) => x.ventaId != id
      );
    }); 
  }

  
}
