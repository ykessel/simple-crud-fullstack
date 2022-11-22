import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-productos-edit',
  templateUrl: './productos-edit.component.html',
  styleUrls: ['./productos-edit.component.scss']
})
export class ProductosEditComponent implements OnInit {

 productoForm: FormGroup;
 producto!: Producto;

  constructor(
    private productosServicios: ProductosService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((param: any) => (this.producto = param.params));
    this.productoForm = this.fb.group({
      nombre: [this.producto.nombre, Validators.required],
      precio: [this.producto.precio, Validators.required],
    });
  }

  ngOnInit(): void {}

  update() {
    this.productosServicios
      .updateProducto(
        this.producto.productoId,
        this.productoForm.value.nombre,
        parseInt(this.productoForm.value.precio)
      )
      .subscribe(() => {
        this.router.navigate(['productos-list']);
      });
  }

}
