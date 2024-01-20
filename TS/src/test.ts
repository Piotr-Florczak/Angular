import { Status, testi } from "./testi";

export class Pizzeria implements testi 
{
    name : string;
    _menager : string | undefined;
    pizzsInOrder: string[] = [];
    status: Status;

    constructor(name:string ,menager?:string) // ze znakiem zapytania (?)paramter jako opcjonalny
    {
        this.name = name;
        this._menager = menager;
        this.status = Status.Ordered; // Ustawienie domyślnego statusu

    }
    set menager (menager:string | undefined) // w przydaku stettera warto podać typy jakie przyjmuje 
    {
        this._menager = menager;
    }
    get menager ():string | undefined// w przypadku metody ze returnem po dwukrpku nic nie dopisujemy bo ts wie bo jakaś inferencja typów
    {
        return this._menager; 
    }
    changeStatus(status: Status) {
        this.status = status; // Zmiana statusu
    }
}

const pizzaDePaulo = new Pizzeria("PizzaDePaulo"); // tworzne obiektu standardowa obiektówa 
pizzaDePaulo.menager = "Piotr" // jest to seter
pizzaDePaulo.changeStatus(Status.Baked);
console.log(pizzaDePaulo.menager); // jest to getter 