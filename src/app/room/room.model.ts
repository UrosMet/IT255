// models/room.model.ts

export class Room {
    id: number;
    name: string;
    type: string;
    price: number;
    // Dodajte dodatne atribute po potrebi

    constructor(id: number, name: string, type: string, price: number) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.price = price;
        // Inicijalizujte dodatne atribute po potrebi
    }
}
