import { Module } from '@nestjs/common';
import { CoffeController } from './coffe.controller';
import { CoffeService } from './coffe.service';

@Module({
  imports: [CoffeModule],
  controllers: [CoffeController],
  providers: [CoffeService],
})
export class CoffeModule {}
