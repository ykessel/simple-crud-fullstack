import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { ApolloQueryResult } from '@apollo/client';
import { map } from 'rxjs/operators';
import { Producto } from '../models/producto';

export const GET_PRODUCTOS = gql`
  query {
    productos {
      productoId
      nombre
      precio
    }
  }
`;

const ADD_PRODUCTO = gql`
  mutation create($nombre: String!, $precio: Int!) {
    createProducto(createProductoInput: { nombre: $nombre, precio: $precio }) {
      productoId
      nombre
      precio
    }
  }
`;

const UPDATE_PRODUCTO = gql`
  mutation update($productoId: String!, $nombre: String!, $precio: Int!) {
    updateProducto(
      updateProductoInput: {
        productoId: $productoId
        nombre: $nombre
        precio: $precio
      }
    ) {
      productoId
      nombre
      precio
    }
  }
`;

const REMOVE_PRODUCTO = gql`
  mutation remove($productoId: String!) {
    removeProducto(productoId: $productoId) {
      productoId
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  constructor(private apollo: Apollo) {}

  getProductos() {
    return this.apollo
      .watchQuery({ query: GET_PRODUCTOS })
      .valueChanges.pipe(
        map((result: ApolloQueryResult<any>) => result.data.productos)
      );
  }

  addProducto(nombre: string, precio: number) {
    return this.apollo
      .mutate({
        mutation: ADD_PRODUCTO,
        variables: { nombre, precio },
      });
  }

  updateProducto(productoId: string, nombre: string, precio: number) {
    console.log(productoId, nombre , precio)
    return this.apollo
      .mutate({
        mutation: UPDATE_PRODUCTO,
        variables: { productoId, nombre, precio },
      });
  }

  removeProducto(productoId: string) {
    return this.apollo
      .mutate({
        mutation: REMOVE_PRODUCTO,
        variables: { productoId },
      });
  }
}
