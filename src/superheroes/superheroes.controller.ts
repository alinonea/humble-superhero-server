import { Controller, Get, Post, Body, HttpStatus, Res } from '@nestjs/common';
import { SuperheroesService } from './superheroes.service';
import { CreateSuperheroDto, SuperheroDto } from './dto/superhero.dto';
import { Response } from 'express';

@Controller('superheroes')
export class SuperheroesController {
  constructor(private readonly superheroesService: SuperheroesService) {}

  @Post()
  create(@Body() createSuperheroDto: CreateSuperheroDto, @Res() res: Response) {
    try {
      this.superheroesService.create(createSuperheroDto);
      res.status(HttpStatus.CREATED).send();
    } catch (exception) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        error: exception
      })
    }
  }

  @Get()
  findAll(@Res() res: Response) {
    try {
      const superheroes: SuperheroDto[] = this.superheroesService.findAllSortedByHumility()

      res.status(HttpStatus.OK).json({
        superheroes
      })
    } catch(exception) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        error: exception
      })
    }
  }
}
