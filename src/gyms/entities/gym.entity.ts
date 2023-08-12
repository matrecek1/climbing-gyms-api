import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Wall } from 'src/walls/entities/wall.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Gym {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field(() => String, { description: 'Example field (placeholder)' })
  name: string;

  @OneToMany(() => Wall, (wall) => wall.gym)
  @Field(() => [Wall], { nullable: true })
  walls: Wall[];
}
