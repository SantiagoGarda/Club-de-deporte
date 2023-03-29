import {Deporte, Jugador} from "./Jugador"

const fs = require("fs")
const readLineSync = require("readline-sync") 
 
export default class GestorClub {
    constructor(){
       
    }

    
    data(){ return JSON.parse(fs.readFileSync('./socios.json'))}

     getAddParnert(){
        let name = readLineSync.question("Escriba nombre del socio:--> ");
        let lastName = readLineSync.question("Escriba su apellido:--> ");
        let birthday = readLineSync.question("Escriba fecha de nacimiento en formato YYYY/MM/DD:--> ")
        let document = Number( readLineSync.question("Escriba documento del socio:--> "));
        let phone = Number (readLineSync.question("Escriba telefono del socio:--> "));
        
        let arraySports = ["football", "basket", "zumba", "volley", "swimming", "gym"]
        let sport = readLineSync.keyInSelect (arraySports, "Seleccione deporte del socio: ");

        let newMember = new Jugador(name, lastName, birthday, document, phone, sport);

        let member = [...this.data(), newMember];
        fs.writeFileSync("./socios.json", JSON.stringify(member, null, 2));
     }

     getSeachForName(name: string){
        let memberName = this.data().find((socio: { name: string }) => socio.name === name);
        console.log(`El nombre ${name} esta inscripto en el club`);
        return memberName;
        
     }
     getSeachForLastName(lastName: string){
      let lastNameMember = this.data().find((socio: { lastName: string }) => socio.lastName === lastName);
      console.log(`El apellido ${lastName} esta inscripto en el club`);
      return lastNameMember;
      
   }

   getSeachForDocument(document: number){
      let memberDocument = this.data().find((socio: { document: number }) => socio.document === document);
      console.log(`El documento ${document} esta inscripto en el club`);
      return memberDocument;
      
   }
   getSeachForNumber(phone: number){
      let memberPhone = this.data().find((socio: { phone: number }) => socio.phone === phone);
      console.log(`El telefono ${phone} esta inscripto en el club`);
      return memberPhone;
      
   }

}

