import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from 'modules/user.module';
import { CartModule } from 'modules/cart.module';
@Module({
  imports: [UsersModule,CartModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
