import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Wall } from 'src/walls/entities/wall.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Boulder {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Field(() => String)
  name: string;

  @Column()
  @Field(() => String)
  description: string;

  @ManyToOne(() => Wall, (wall) => wall.boulders)
  @Field(() => Wall, { description: 'A wall that the boulder resided on.' })
  wall: Wall;
}
