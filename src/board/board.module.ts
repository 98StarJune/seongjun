import { Module } from '@nestjs/common';
import { BoardController } from './board.controller';
import { BoardService } from './board.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../Entities/user.entity';
import { CustomEntity } from '../Entities/custom.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, CustomEntity])],
  controllers: [BoardController],
  providers: [BoardService],
  exports: [TypeOrmModule],
})
export class BoardModule {}
