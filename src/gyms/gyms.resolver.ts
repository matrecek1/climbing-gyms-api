import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GymsService } from './gyms.service';
import { Gym } from './entities/gym.entity';
import { CreateGymInput } from './dto/create-gym.input';
import { UpdateGymInput } from './dto/update-gym.input';

@Resolver(() => Gym)
export class GymsResolver {
  constructor(private readonly gymsService: GymsService) {}

  @Mutation(() => Gym)
  createGym(@Args('createGymInput') createGymInput: CreateGymInput) {
    return this.gymsService.create(createGymInput);
  }

  @Query(() => [Gym], { name: 'gyms' })
  findAll() {
    return this.gymsService.findAll();
  }

  @Query(() => Gym, { name: 'gym' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.gymsService.findOne(id);
  }

  // @Mutation(() => Gym)
  // updateGym(@Args('updateGymInput') updateGymInput: UpdateGymInput) {
  //   return this.gymsService.update(id, updateGymInput);
  // }

  @Mutation(() => Gym)
  removeGym(@Args('id', { type: () => Int }) id: number) {
    return this.gymsService.remove(id);
  }
}
