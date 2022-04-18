import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type CarDocument = Car & Document;

@Schema()
export class Car {
  @Prop()
  name: string;
}

export const CarSchema = SchemaFactory.createForClass(Car);
