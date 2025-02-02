import { Injectable } from '@nestjs/common';
import { CreateSuperheroDto, SuperheroDto } from './dto/superhero.dto';
import { Superhero } from './entities/superhero.entity';
import { randomUUID } from 'crypto';
import { plainToInstance } from 'class-transformer';
import { HeroSuperpower } from './enums/superhero.enum';

@Injectable()
export class SuperheroesService {
  superheroes: Superhero[] = [];

  create(createSuperheroDto: CreateSuperheroDto): boolean {
    try {
      const superhero = plainToInstance(Superhero, createSuperheroDto, { excludeExtraneousValues: true });
      superhero.id = randomUUID();

      this.superheroes.push(superhero);
      return true;
    } catch(exception) {
      throw(`Error on saving superhero: ${exception}`);
    }
  }

  findAllSortedByHumility(): SuperheroDto[] {
    try {
      return this.superheroes.sort((a: Superhero, b: Superhero) => {
        return b.humility_score - a.humility_score;
      }).map((superhero: Superhero) => plainToInstance(SuperheroDto, superhero, { excludeExtraneousValues: true }))
    } catch(exception) {
      throw(`Error on fetch all sorted by humility score: ${exception}`)
    }
  }
}
