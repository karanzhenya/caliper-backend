import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Car, CarSchema } from './schemas/car.schema';
import { CarSpec, CarSpecSchema } from '../car_spec/schemas/car_spec.schema';
import { CarService } from './car.service';
import { CarController } from './car.controller';
import { CarSpecService } from '../car_spec/car_spec.service';

@Module({
  providers: [CarService, CarSpecService],
  controllers: [CarController],
  imports: [
    MongooseModule.forFeature([{ name: Car.name, schema: CarSchema }]),
    MongooseModule.forFeature([{ name: CarSpec.name, schema: CarSpecSchema }]),
  ],
})
export class CarModule {}
