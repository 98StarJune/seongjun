import { DefaultEntity } from './default.entity';
import { Column } from 'typeorm';

export class UserEntity extends DefaultEntity {
  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  name: string;
}
