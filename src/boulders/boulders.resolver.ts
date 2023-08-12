import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BouldersService } from './boulders.service';
import { Boulder } from './entities/boulder.entity';
import { CreateBoulderInput } from './dto/create-boulder.input';
import { UpdateBoulderInput } from './dto/update-boulder.input';

@Resolver(() => Boulder)
export class BouldersResolver {
  constructor(private readonly bouldersService: BouldersService) {}

  @Mutation(() => Boulder)
  createBoulder(
    @Args('createBoulderInput') createBoulderInput: CreateBoulderInput,
  ) {
    return this.bouldersService.create(createBoulderInput);
  }

  @Query(() => [Boulder], { name: 'boulders' })
  findAll() {
    return this.bouldersService.findAll();
  }

  @Query(() => Boulder, { name: 'boulder' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.bouldersService.findOne(id);
  }

  // @Mutation(() => Boulder)
  // updateBoulder(
  //   @Args('updateBoulderInput') updateBoulderInput: UpdateBoulderInput,
  // ) {
  //   return this.bouldersService.update(
  //     updateBoulderInput.id,
  //     updateBoulderInput,
  //   );
  // }

  @Mutation(() => Boulder)
  removeBoulder(@Args('id', { type: () => Int }) id: number) {
    return this.bouldersService.remove(id);
  }
}
