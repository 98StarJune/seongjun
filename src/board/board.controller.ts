import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { BoardService } from './board.service';
import { UserEntity } from '../Entities/user.entity';
import { Response } from 'express';
import { DefaultEntity } from '../Entities/default.entity';
import { DefaultResponseDto } from '../DTOs/Response/default.response.dto';
import { CcRequestDto } from "../DTOs/Request/cc.request.dto";

@Controller('board')
export class BoardController {
  constructor(private boardService: BoardService) {}

  @Post()
  async Join(
    @Body() body: UserEntity,
    @Res() res: Response,
  ): Promise<Response> {
    const result = await this.boardService.Join(body);
    return res.status(result.statusCode).json(result.data);
  }
  @Post()
  async CC(
    @Body() body: CcRequestDto,
    @Res() res: Response,
  ){

  }
}
