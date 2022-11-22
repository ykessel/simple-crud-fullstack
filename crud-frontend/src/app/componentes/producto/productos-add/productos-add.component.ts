import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/servicios/productos.service';
import { UtilsService } from 'src/app/servicios/utils.service';

@Component({
  selector: 'app-productos-add',
  templateUrl: './productos-add.component.html',
  styleUrls: ['./productos-add.component.scss'],
})
export class ProductosAddComponent implements OnInit {
  productoForm: FormGroup;

  constructor(
    private productosServicios: ProductosService,
    http: HttpClient,
    private fb: FormBuilder,
    private router: Router,
    private utilsService: UtilsService
  ) {
    this.productoForm = this.fb.group({
      nombre: ['', Validators.required],
      precio: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  add() {
    this.productosServicios
      .addProducto(this.productoForm.value.nombre, parseInt(this.productoForm.value.precio))
      .subscribe((x: any) => {
        this.utilsService.changeData(x.data.createProducto);
        this.router.navigate(['productos-list'])
      });
  }
}
