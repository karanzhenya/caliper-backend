import { Injectable } from '@nestjs/common';
import { CarDto } from './dto/car.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Car, CarDocument } from './schemas/car.schema';

@Injectable()
export class CarService {
  constructor(@InjectModel(Car.name) private carModel: Model<CarDocument>) {}

  async getCars(): Promise<CarDto[]> {
    return this.carModel.find();
  }

  async getCar(id: string): Promise<CarDto> {
    return this.carModel.findById(id);
  }

  async getCarByName(name: string): Promise<CarDto[]> {
    const regex = new RegExp(name, 'i');
    return this.carModel.find({ name: { $regex: regex } });
  }
}
