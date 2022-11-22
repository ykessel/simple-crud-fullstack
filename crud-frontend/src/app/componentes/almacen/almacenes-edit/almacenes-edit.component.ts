import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Almacen } from 'src/app/models/almacen';
import { AlmacenesService } from 'src/app/servicios/almacenes.service';

@Component({
  selector: 'app-almacenes-edit',
  templateUrl: './almacenes-edit.component.html',
  styleUrls: ['./almacenes-edit.component.scss']
})
export class AlmacenesEditComponent {
  almacenForm: FormGroup;
  almacen!: Almacen;

  constructor(
    private almacensServicios: AlmacenesService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((param: any) => (this.almacen = param.params));
    this.almacenForm = this.fb.group({
      encargado: [this.almacen.encargado, Validators.required],
      direccion: [this.almacen.direccion, Validators.required],
    });
  }

  update() {
    this.almacensServicios
      .updateAlmacen(
        this.almacen.almacenId,
        this.almacenForm.value.encargado,
        this.almacenForm.value.direccion
      )
      .subscribe(() => {
        this.router.navigate(['almacenes-list']);
      });
  }

}
