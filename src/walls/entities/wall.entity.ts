import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Boulder } from 'src/boulders/entities/boulder.entity';
import { Gym } from 'src/gyms/entities/gym.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Wall {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field(() => String)
  name: string;

  @Column()
  @Field(() => String)
  description: string;

  @Column()
  @Field(() => Int)
  angle: number;

  @OneToMany(() => Boulder, (boulder) => boulder.wall)
  @Field(() => [Boulder])
  boulders: Boulder[];

  @ManyToOne(() => Gym, (gym) => gym.walls)
  @Field(() => Gym)
  gym: Gym;
}
