import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { VentasService } from "src/app/servicios/ventas.service";

@Component({
  selector: "app-ventas-add",
  templateUrl: "./ventas-add.component.html",
  styleUrls: ["./ventas-add.component.scss"],
})
export class VentasAddComponent implements OnInit {
  ventaForm: FormGroup;

  constructor(
    private ventasServicios: VentasService,
    http: HttpClient,
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.ventaForm = this.fb.group({
      vendedor: ["", Validators.required],
      comprador: ["", Validators.required],
    });
  }

  ngOnInit(): void {}

  add() {
    this.ventasServicios
      .addVenta(this.ventaForm.value.vendedor, this.ventaForm.value.comprador)
      .subscribe((x: any) => {
        this.router.navigate(["ventas-list"]);
      });
  }
}
