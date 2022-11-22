import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Almacen } from 'src/app/models/almacen';
import { AlmacenesService } from 'src/app/servicios/almacenes.service';

@Component({
  selector: 'app-almacenes-list',
  templateUrl: './almacenes-list.component.html',
  styleUrls: ['./almacenes-list.component.scss']
})
export class AlmacenesListComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Almacen>;
  // dataSource: AlmacenesListDataSource;
  dataSource = new MatTableDataSource<Almacen>();
  
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['almacenId','encargado','direccion', 'opciones'];

  constructor(private almacenesSericios: AlmacenesService) {
    // this.dataSource = new AlmacenesListDataSource();
  }

  ngOnInit() {
    this.almacenesSericios.getAlmacenes().subscribe((res: any) => {
      this.dataSource.data = res;
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  remove(id: string) {
    this.almacenesSericios.removeAlmacen(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter(
        (x: Almacen) => x.almacenId != id
      );
    }); 
  }
}
