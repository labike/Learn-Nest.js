import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeController } from './coffe/coffe.controller';
import { CoffeService } from './coffe/coffe.service';
import { CoffeModule } from './coffe/coffe.module';

@Module({
  imports: [CoffeModule],
  controllers: [AppController, CoffeController],
  providers: [AppService, CoffeService],
})
export class AppModule {}
