import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { ApolloQueryResult } from '@apollo/client';
import { map } from 'rxjs/operators';

const GET_VENTAS = gql`
  query {
    ventas {
      ventaId
      vendedor
      comprador
    }
  }
`;

const ADD_VENTA = gql`
  mutation create($vendedor: String!, $comprador: String!) {
    createVenta(createVentaInput: { vendedor: $vendedor, comprador: $comprador }) {
      vendedor
      comprador
    }
  }
`;

const UPDATE_VENTA = gql`
  mutation update($ventaId: String!, $vendedor: String!, $comprador: String!) {
    updateVenta(
      updateVentaInput: {
        ventaId: $ventaId
        vendedor: $vendedor
        comprador: $comprador
      }
    ) {
      ventaId
      vendedor
      comprador
    }
  }
`;

const REMOVE_VENTA = gql`
  mutation remove($ventaId: String!) {
    removeVenta(ventaId: $ventaId) {
      ventaId
    }
  }
`;


@Injectable({
  providedIn: 'root',
})
export class VentasService {

  constructor(private apollo: Apollo) {}

  getVentas() {
    return this.apollo
      .watchQuery({ query: GET_VENTAS })
      .valueChanges.pipe(
        map((result: ApolloQueryResult<any>) => result.data.ventas)
      );
  }

  addVenta(vendedor: string, comprador: string) {
    console.log(vendedor, comprador);
    return this.apollo
      .mutate({
        mutation: ADD_VENTA,
        variables: { vendedor, comprador },
      });
  }

  updateVenta(ventaId: string, vendedor: string, comprador: string) {
    return this.apollo
      .mutate({
        mutation: UPDATE_VENTA,
        variables: { ventaId, vendedor, comprador },
      });
  }

  removeVenta(ventaId: string) {
    return this.apollo
      .mutate({
        mutation: REMOVE_VENTA,
        variables: { ventaId },
      });
  }
}
