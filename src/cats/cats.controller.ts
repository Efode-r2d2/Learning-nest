import { Controller, Get, Param, Post, Redirect, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Redirect('http://localhost:3000/cats')
  @Post()
  create(@Req() request: Request): string {
    return 'This action adds a new cat.';
  }

  @Get(':id')
  findOne(@Param() params): string {
    return `This will return a cat with an id of ${params.id}`;
  }

  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats.';
  }
}
