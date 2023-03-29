import MiembroClub from "./AbstracMiembroClub";

export enum Deporte {
    football, basket, zumba, volley, swimming, gym
}

export class Jugador extends MiembroClub {
    sport: Deporte;

    constructor(name: string, lastName: string, birthday: string, document: number, phone: number,sport:Deporte){
         super(name, lastName, birthday, document, phone)

         this.sport = sport
    }
}

