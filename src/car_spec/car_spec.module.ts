import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarSpecService } from './car_spec.service';
import { CarSpec, CarSpecSchema } from './schemas/car_spec.schema';

@Module({
  providers: [CarSpecService],
  imports: [
    MongooseModule.forFeature([{ name: CarSpec.name, schema: CarSpecSchema }]),
  ],
})
export class CarSpecModule {}
