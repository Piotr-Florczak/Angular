import { Pizzeria } from "./test";
export interface testi 
{
    name: string;
    pizzsInOrder: string[];
    status: number;
    get menager(): string | undefined;
    set menager(menager: string | undefined); 
    
}

export enum Status
{
    Ordered, //0
    Baked,   //1
    Sold     //2 
}

export enum Size
{
    small = 'xs',
    medium = 'medium',
    large = 'large'
}