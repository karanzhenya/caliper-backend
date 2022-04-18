import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types, SchemaTypes } from 'mongoose';

export type CarSpecDocument = CarSpec & Document;

@Schema()
export class CarSpec {
  @Prop({ type: SchemaTypes.String })
  type: string;

  @Prop()
  info: string;

  @Prop({ type: SchemaTypes.ObjectId })
  _supports_id: Types.ObjectId;
}
export const CarSpecSchema = SchemaFactory.createForClass(CarSpec);
