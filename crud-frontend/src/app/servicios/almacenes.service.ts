import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { ApolloQueryResult } from '@apollo/client';
import { map } from 'rxjs/operators';

const GET_ALMACENES = gql`
  query {
    almacenes {
      almacenId
      encargado
      direccion
    }
  }
`;

const ADD_ALMACEN = gql`
  mutation create($encargado: String!, $direccion: String!) {
    createAlmacene(createAlmaceneInput: { encargado: $encargado, direccion: $direccion }) {
      encargado
      direccion
    }
  }
`;

const UPDATE_ALMACEN = gql`
  mutation update($almacenId: String!, $encargado: String!, $direccion: String!) {
    updateAlmacene(
      updateAlmaceneInput: {
        almacenId: $almacenId
        encargado: $encargado
        direccion: $direccion
      }
    ) {
      almacenId
      encargado
      direccion
    }
  }
`;

const REMOVE_ALMACEN = gql`
  mutation remove($almacenId: String!) {
    removeAlmacene(almacenId: $almacenId) {
      almacenId
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class AlmacenesService {
  constructor(private apollo: Apollo) {}

  getAlmacenes() {
    return this.apollo
      .watchQuery({ query: GET_ALMACENES })
      .valueChanges.pipe(
        map((result: ApolloQueryResult<any>) => result.data.almacenes)
      );
  }

  addAlmacen(encargado: string, direccion: string) {
    return this.apollo
      .mutate({
        mutation: ADD_ALMACEN,
        variables: { encargado, direccion },
      });
  }

  updateAlmacen(almacenId: string, encargado: string, direccion: string) {
    return this.apollo
      .mutate({
        mutation: UPDATE_ALMACEN,
        variables: { almacenId, encargado, direccion },
      });
  }

  removeAlmacen(almacenId: string) {
    return this.apollo
      .mutate({
        mutation: REMOVE_ALMACEN,
        variables: { almacenId },
      });
  }
}
