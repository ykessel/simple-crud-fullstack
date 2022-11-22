import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AlmacenesService } from './almacenes.service';
import { Almacene } from './entities/almacene.entity';
import { CreateAlmaceneInput } from './dto/create-almacene.input';
import { UpdateAlmaceneInput } from './dto/update-almacene.input';

@Resolver(() => Almacene)
export class AlmacenesResolver {
  constructor(private readonly almacenesService: AlmacenesService) {}

  @Mutation(() => Almacene)
  createAlmacene(@Args('createAlmaceneInput') createAlmaceneInput: CreateAlmaceneInput) {
    return this.almacenesService.create(createAlmaceneInput);
  }

  @Query(() => [Almacene], { name: 'almacenes' })
  findAll() {
    return this.almacenesService.findAll();
  }

  @Query(() => Almacene, { name: 'almacene' })
  findOne(@Args('almacenId', { type: () => String }) almacenId: string) {
    return this.almacenesService.findOne(almacenId);
  }

  @Mutation(() => Almacene)
  updateAlmacene(@Args('updateAlmaceneInput') updateAlmaceneInput: UpdateAlmaceneInput) {
    return this.almacenesService.update(updateAlmaceneInput.almacenId, updateAlmaceneInput);
  }

  @Mutation(() => Almacene)
  removeAlmacene(@Args('almacenId', { type: () => String }) almacenId: string) {
    return this.almacenesService.remove(almacenId);
  }
}
