import { Controller, Get, Param, Query } from '@nestjs/common';
import { CarService } from './car.service';
import { CarSpec } from '../car_spec/schemas/car_spec.schema';
import { CarSpecService } from '../car_spec/car_spec.service';
import { CarDto } from './dto/car.dto';
import { CarFindByNameDto } from './dto/car_finded_by_name.dto';
import { CarSpecsFindedByTypeDto } from '../car_spec/dto/car_specs_finded_by_type.dto';

@Controller('car')
export class CarController {
  constructor(
    private readonly carService: CarService,
    private readonly carSpecService: CarSpecService,
  ) {}

  @Get()
  getCars(@Query() carFindByName: CarFindByNameDto): Promise<CarDto[]> {
    if (Object.keys(carFindByName).length) {
      return this.carService.getCarByName(carFindByName.name.toUpperCase());
    } else {
      return this.carService.getCars();
    }
  }

  @Get(':id')
  getCar(@Param('id') id: string): Promise<CarDto> {
    return this.carService.getCar(id);
  }

  @Get(':id/specs')
  getModels(@Param('id') id: string): Promise<CarSpec[]> {
    return this.carSpecService.getCarSpecs(id);
  }

  @Get('/specs/search')
  getCurrentCarSpecs(
    @Query() carSpecsFindedByType: CarSpecsFindedByTypeDto,
  ): Promise<CarSpec[]> {
    return this.carSpecService.getCurrentCarSpecs(
      carSpecsFindedByType.type.toUpperCase(),
    );
  }
}
