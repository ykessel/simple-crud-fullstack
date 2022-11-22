import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Venta } from 'src/app/models/venta';
import { VentasService } from 'src/app/servicios/ventas.service';

@Component({
  selector: 'app-ventas-edit',
  templateUrl: './ventas-edit.component.html',
  styleUrls: ['./ventas-edit.component.scss'],
})
export class VentasEditComponent implements OnInit {
  ventaForm: FormGroup;
  venta!: Venta;

  constructor(
    private ventasServicios: VentasService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((param: any) => (this.venta = param.params));
    this.ventaForm = this.fb.group({
      vendedor: [this.venta.vendedor, Validators.required],
      comprador: [this.venta.comprador, Validators.required],
    });
  }

  ngOnInit(): void {}

  update() {
    this.ventasServicios
      .updateVenta(
        this.venta.ventaId,
        this.ventaForm.value.vendedor,
        this.ventaForm.value.comprador
      )
      .subscribe((x: any) => {
        this.router.navigate(['ventas-list']);
      });
  }
}
