import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { CoffeService } from './coffe.service';
import { CreateCoffeDto } from './dto/create-coffe.dto/create-coffe.dto';
import { UpdateCoffeDto } from './dto/update-coffe.dto/update-coffe.dto';

// controller用于处理请求

// 控制器内的方法必须用@Get装饰器
// :id表示动态路由, @Param表示传给路由的所有参数, @Param('id')表示只需获取路由里的id参数
// post请求中, 通过@Body()获取所有参数并返回, @Body('name')只返回获取到的name值
// @HttpCode可以自定义响应状态码


@Controller('coffe')
export class CoffeController {
  constructor(private readonly coffeService: CoffeService) {}

  @Get()
  findAll(@Query() paginationQuery) {
    // const {limit, offset} = paginationQuery
    return this.coffeService.findAll()
    // return `This action return all coffe. limit: ${limit}, offset: ${offset}`
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffeService.findOne(id)
    // return `this action returns #${id} coffe`
  }

  @Post()
  // @HttpCode(HttpStatus.GONE)
  create(@Body() createCoffeDto: CreateCoffeDto) {
    this.coffeService.create(createCoffeDto)
    // return body
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeDto: UpdateCoffeDto) {
    this.coffeService.update(id, updateCoffeDto)
    // return `this action update #${id} coffe`
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.coffeService.remove(id)
    // return `this action remove #${id} coffe`
  }
}
