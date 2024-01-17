import {PartialType} from '@nestjs/mapped-types'
import { CreateCoffeDto } from '../create-coffe.dto/create-coffe.dto';

// Partial types不仅继承了createCoffeDto上的属性， 而且都标记是可选的, 并且继承了验证规则
export class UpdateCoffeDto extends PartialType(CreateCoffeDto) {}
