"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pizzeria = void 0;
const testi_1 = require("./testi");
class Pizzeria {
    constructor(name, menager) {
        this.pizzsInOrder = [];
        this.name = name;
        this._menager = menager;
        this.status = testi_1.Status.Ordered; // Ustawienie domyślnego statusu
    }
    set menager(menager) {
        this._menager = menager;
    }
    get menager() {
        return this._menager;
    }
    changeStatus(status) {
        this.status = status; // Zmiana statusu
    }
}
exports.Pizzeria = Pizzeria;
const pizzaDePaulo = new Pizzeria("PizzaDePaulo"); // tworzne obiektu standardowa obiektówa 
pizzaDePaulo.menager = "Piotr"; // jest to seter
pizzaDePaulo.changeStatus(testi_1.Status.Baked);
console.log(pizzaDePaulo.menager); // jest to getter 
