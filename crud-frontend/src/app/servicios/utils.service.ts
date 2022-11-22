import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  prod!: Producto;

  private data = new BehaviorSubject(this.prod);
  data$ = this.data.asObservable();

  changeData(data: Producto) {
    this.data.next(data)
  }
}
