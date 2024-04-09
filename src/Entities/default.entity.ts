import { PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export class DefaultEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;
}
