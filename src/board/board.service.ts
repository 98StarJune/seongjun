import { Get, Inject, Injectable, Post } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../Entities/user.entity';
import { CustomEntity } from '../Entities/custom.entity';
import { DefaultResponseDto } from '../DTOs/Response/default.response.dto';
import { CcRequestDto } from '../DTOs/Request/cc.request.dto';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    @InjectRepository(CustomEntity)
    private customRepository: Repository<CustomEntity>,
  ) {}

  async Join(body: UserEntity): Promise<DefaultResponseDto> {
    const resp: DefaultResponseDto = new DefaultResponseDto();
    const result = await this.userRepository.save(body);
    if (!result) {
      resp.statusCode = 500;
    } else resp.statusCode = 200;
    return resp;
  }
  async CC(body: CcRequestDto) {
    const entity: CustomEntity = new CustomEntity();
    entity.user.id = body.user;
    entity.name = body.name;
    entity.price = body.price;
    this.customRepository.save(entity);
  }
  async find(body: number) {
  const result: Promise<CustomEntity[]>   = this.customRepository.find({
      relations: {
        user: true,
      },
      select: {
        name: false,
      },
      where: {
        user: {
          id: body,
        },
      },
    });
  }
}
