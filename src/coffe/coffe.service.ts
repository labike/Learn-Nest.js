import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Coffe } from './entities/coffe.entity';
import { CreateCoffeDto } from './dto/create-coffe.dto/create-coffe.dto';
import { UpdateCoffeDto } from './dto/update-coffe.dto/update-coffe.dto';

// service用于处理业务逻辑


@Injectable()
export class CoffeService {
  private coffes: Coffe[] = [
    {
      id: '1',
      name: '猫屎咖啡',
      brand: 'koa',
      flavors: ['a', 'b', 'c']
    },
    {
      id: '2',
      name: '雀巢咖啡',
      brand: 'ohayo',
      flavors: ['m', 'n', 'o']
    }
  ]

  findAll() {
    return this.coffes
  }

  findOne(id: string) {
    const item = this.coffes.find(item => item.id === id)
    if (!item) {
      throw new HttpException(`Coffe #${id} not found`, HttpStatus.NOT_FOUND)
    }
    return item
  }

  create(createCoffeDto: CreateCoffeDto) {
    this.coffes.push(createCoffeDto);
    console.log(createCoffeDto instanceof CreateCoffeDto);
    
    return createCoffeDto
  }

  update(id: string, updateCoffeDto: UpdateCoffeDto) {
    const isExists = this.findOne(id)
    if (isExists) {
      // ...
    }
  }

  remove(id: string) {
    const coffeIndex = this.coffes.findIndex(item => item.id === id)
    if (coffeIndex > 0) {
      this.coffes.splice(coffeIndex, 1)
    }
  }
}
