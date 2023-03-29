import Persona from "./interfacePersona"


export default abstract class MiembroClub implements Persona {
    name: string;
    lastName: string;
    birthday: string;
    document: number;
    phone: number;
    memberSince: string;

    constructor(name: string, lastName: string, birthday: string, document: number, phone: number){
        this.name = name;
        this.lastName = lastName;
        this.birthday = new Date(birthday).toLocaleDateString();
        this.document = document;
        this.phone = phone;
        this.memberSince = new Date().toLocaleDateString();
    }
}
