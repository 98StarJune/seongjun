import { DefaultEntity } from './default.entity';
import { UserEntity } from './user.entity';
import { Column, OneToOne } from 'typeorm';

export class CustomEntity extends DefaultEntity {
  @Column()
  @OneToOne(() => UserEntity, (u: UserEntity) => u.id)
  user: UserEntity;
  @Column()
  name: string;
  @Column()
  price: number;
}
