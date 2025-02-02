import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { SuperheroesModule } from './superheroes.module';
import { HeroSuperpower } from './enums/superhero.enum';

describe('Superheroes', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [SuperheroesModule],
    }).compile();

    app = moduleRef.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  it(`/POST superheroes success`, () => {
    return request(app.getHttpServer())
      .post('/superheroes')
      .send({
        name: "Alin",
        superpower: HeroSuperpower.FLIGHT,
        humility_score: 9.5
        })
      .expect(201)
  });

  it(`/POST superheroes bad request`, async() => {
    const response = await request(app.getHttpServer())
      .post('/superheroes')
      .send({
        name: "Alin",
        superpower: HeroSuperpower.FLIGHT,
        humility_score: 11
      });

    expect(response.status).toEqual(400);
    expect(response.body.message).toBeDefined();
    expect(response.body.message[0]).toEqual('Humility score must be between 1 and 10');
    expect(response.body.error).toEqual('Bad Request');
  });

  it(`/GET superheroes sorted by humility score`, async() => {
    await request(app.getHttpServer()).post('/superheroes')
      .send({
        name: "Onea",
        superpower: HeroSuperpower.INVISIBILITY,
        humility_score: 8.5
      });
    
    const response = await request(app.getHttpServer())
      .get('/superheroes');
    
    expect(response.status).toEqual(200);
    expect(response.body.superheroes[0].name).toEqual('Alin')
    expect(response.body.superheroes[0].superpower).toEqual(HeroSuperpower.FLIGHT);
    expect(response.body.superheroes[1].name).toEqual('Onea');
    expect(response.body.superheroes[1].superpower).toEqual(HeroSuperpower.INVISIBILITY);
  });

  afterAll(async () => {
    await app.close();
  });
});