import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ProductosModule } from './productos/productos.module';
import { VentasModule } from './ventas/ventas.module';
import { AlmacenesModule } from './almacenes/almacenes.module';
// import * as dotenv from 'dotenv';
// dotenv.config();

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: './schema.gql',
      debug: true,
      playground: true,
      cors: {
        origin: 'http://localhost:4200',
        credentials: true,
      },
    }),
    TypeOrmModule.forRoot({
      keepConnectionAlive: true,
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres13579',
      database: 'crud',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    ProductosModule,
    VentasModule,
    AlmacenesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
