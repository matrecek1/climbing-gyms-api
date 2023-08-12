import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { WallsService } from './walls.service';
import { Wall } from './entities/wall.entity';
import { CreateWallInput } from './dto/create-wall.input';
import { UpdateWallInput } from './dto/update-wall.input';

@Resolver(() => Wall)
export class WallsResolver {
  constructor(private readonly wallsService: WallsService) {}

  @Mutation(() => Wall)
  createWall(@Args('createWallInput') createWallInput: CreateWallInput) {
    return this.wallsService.create(createWallInput);
  }

  @Query(() => [Wall], { name: 'walls' })
  findAll() {
    return this.wallsService.findAll();
  }

  @Query(() => Wall, { name: 'wall' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.wallsService.findOne(id);
  }

  // @Mutation(() => Wall)
  // updateWall(@Args('updateWallInput') updateWallInput: UpdateWallInput) {
  //   return this.wallsService.update(updateWallInput.id, updateWallInput);
  // }

  @Mutation(() => Wall)
  removeWall(@Args('id', { type: () => Int }) id: number) {
    return this.wallsService.remove(id);
  }
}
