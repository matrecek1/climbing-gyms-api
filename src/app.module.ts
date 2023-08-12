import { Module } from '@nestjs/common';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GymsModule } from './gyms/gyms.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WallsModule } from './walls/walls.module';
import { BouldersModule } from './boulders/boulders.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:',
      autoLoadEntities: true,
      synchronize: true,
    }),
    GymsModule,
    WallsModule,
    BouldersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
