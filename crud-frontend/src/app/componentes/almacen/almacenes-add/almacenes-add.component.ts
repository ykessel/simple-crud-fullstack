import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlmacenesService } from 'src/app/servicios/almacenes.service';

@Component({
  selector: 'app-almacenes-add',
  templateUrl: './almacenes-add.component.html',
  styleUrls: ['./almacenes-add.component.scss']
})
export class AlmacenesAddComponent implements OnInit {
  almacenForm: FormGroup;

  constructor(private almacenesServicios: AlmacenesService,
    http: HttpClient,
    private fb: FormBuilder,
    private router: Router) {
    this.almacenForm = this.fb.group({
      encargado: ['', Validators.required],
      direccion: ['', Validators.required],
    });
   }

  ngOnInit(): void {
  }

   add() {
    this.almacenesServicios.addAlmacen(this.almacenForm.value.encargado, this.almacenForm.value.direccion)
      .subscribe((x: any) => {
        this.router.navigate(["almacenes-list"]);
      });
  }

}
