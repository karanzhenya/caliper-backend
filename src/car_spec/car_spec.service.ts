import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CarSpec, CarSpecDocument } from './schemas/car_spec.schema';

@Injectable()
export class CarSpecService {
  constructor(
    @InjectModel(CarSpec.name) private carSpecModel: Model<CarSpecDocument>,
  ) {}
  async getCarSpecs(id: string): Promise<CarSpec[]> {
    return this.carSpecModel.find({
      _supports_id: id,
    });
  }

  async getCurrentCarSpecs(type: string): Promise<CarSpec[]> {
    const regex = new RegExp(type, 'i');
    return this.carSpecModel.find({ type: { $regex: regex } });
  }
}
