import { Exclude, Expose } from "class-transformer";
import { UUID } from "crypto";
import { HeroSuperpower } from "../enums/superhero.enum";

export class Superhero {
    @Exclude()
    id: UUID;

    @Expose()
    name: string;
    
    @Expose()
    superpower: HeroSuperpower;
    
    @Expose()
    humility_score: number;
}
