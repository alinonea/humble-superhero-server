import { Expose } from "class-transformer";
import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { IsScore } from "../../validators/superheroes.validator";
import { HeroSuperpower } from "../enums/superhero.enum";

export class CreateSuperheroDto {
    @IsNotEmpty()
    @IsString()
    readonly name: string;
    
    @IsNotEmpty()
    @IsString()
    @IsEnum(HeroSuperpower)
    readonly superpower: HeroSuperpower;
    
    @IsNotEmpty()
    @IsNumber()
    @IsScore()
    readonly humility_score: number;
}

export class SuperheroDto {
    @Expose()
    readonly name: string;
    
    @Expose()
    readonly superpower: string;
    
    @Expose()
    readonly humility_score: number;
}