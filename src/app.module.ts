import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './clients/clients.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { Client } from './clients/entities/client.entity';
@Module({
  imports: [
            ClientsModule,
            UsersModule, 
            TypeOrmModule.forRoot({
              type: 'postgres',
              host: 'localhost',
              port: 5432,
              username: 'postgres',
              password: '1234',
              database: 'culdb',
              entities: [
                User,
                Client
              ],
              synchronize: true,
            }),

    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
