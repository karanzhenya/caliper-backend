import { Module } from '@nestjs/common';
import { CarModule } from './car/car.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CarSpecModule } from './car_spec/car_spec.module';

@Module({
  imports: [
    CarModule,
    CarSpecModule,
    MongooseModule.forRoot(
      'mongodb+srv://karanzhenya:supportData@cluster0.yukut.mongodb.net/supportData?retryWrites=true&w=majority',
    ),
  ],
})
export class AppModule {}
