import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: '1',
      name: 'shipwerck roast',
      brand: 'buddy brew',
      flavors: ['chocolate', 'vanilla'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    const coffee = this.coffees.find((item) => id === item.id);
    if (!coffee) {
      throw new HttpException(`coffee #${id} not found`, HttpStatus.NOT_FOUND);
      //   throw new NotFoundException(`coffe #${id} not found`);
    }
    return coffee;
  }

  create(creatCoffeDto: any) {
    this.coffees.push(creatCoffeDto);
    return creatCoffeDto;
  }

  update(id: string, updateCoffeDto: any) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
      //update existing entity
    }
  }
  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex((item) => id == item.id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
