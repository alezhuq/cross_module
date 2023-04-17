export interface Shape{
    getArea() : number

} 

//abstract

export abstract class TwoDShape{

    abstract getInnerRadius() : number | string
    abstract getOuterRadius() : number
    abstract getPerimeter() : number 
    abstract getA() : number
    abstract getB() : number
}

export abstract class ThreeDShape{
    abstract getVolume() : number

    abstract getA() : number
    abstract getB() : number
    abstract getH() : number
}

// 2D

export class Rectangle extends TwoDShape implements Shape{

    private a: number
    private b: number

    constructor(a : number, b : number){
        super()
        this.a = a
        this.b = b
    }
    getA(){
        return this.a
    }
    getB(){
        return this.b
    }

    getPerimeter(): number {
        return (this.a+this.b)*2 
    }
    getArea(): number {
        return this.a*this.b
    }
    getInnerRadius(): string{
        return "can't calculate inner radius for a rectangle"
    }
    getOuterRadius(): number {
        return Math.sqrt(this.a*this.a + this.b*this.b) / 2
    }
}

export class Diamond extends TwoDShape implements Shape{

    private a: number
    private b: number

    constructor(d1 : number, d2 : number){
        super()
        this.a = d1
        this.b = d2
    }

    getA(){
        return this.a
    }
    getB(){
        return this.b
    }
    getPerimeter(): number {
        return 2*Math.sqrt(this.a*this.a+this.b*this.b)
    }
    getArea(): number {
        return this.a*this.b / 2
    }
    getInnerRadius(): number{
        return this.a / 2
    }
    getOuterRadius(): number {
        return this.b / 2
    }
}

// 3D

export class Prysm extends ThreeDShape implements Shape{

    private a: number
    private b: number
    private h: number

    constructor(a : number, b : number, h: number){
        super()
        this.a = a
        this.b = b
        this.h = h
    }

    getA(){
        return this.a
    }
    getB(){
        return this.b
    }
    getH(){
        return this.h
    }

    getArea(): number {
        return 2*(this.a*this.b + this.a*this.h + this.b*this.h)
    }

    getVolume(): number {
        return this.a*this.b*this.h
    }
}


export class Thorus extends ThreeDShape implements Shape{

    private a: number
    private b: number
    private h: number

    constructor(r1 : number, r2 : number){
        super()
        this.a = r1
        this.b = r2
        this.h = Math.PI
    }

    getA(){
        return this.a
    }
    getB(){
        return this.b
    }
    getH(){
        return this.h
    }

    getArea(): number {
        return 4*this.h*this.h*this.a*this.b
    }

    getVolume(): number {
        return 2*this.a*this.a*this.b*this.h*this.h
    }
}

export class Pyramid extends ThreeDShape implements Shape{

    private a: number
    private b: number
    private h: number

    constructor(a : number, b : number, h : number){
        super()
        this.a = a
        this.b = b
        this.h = h
    }

    getA(){
        return this.a
    }
    getB(){
        return this.b
    }
    getH(){
        return this.h
    }

    getArea(): number {
        return 5*this.a*this.b/2 + 5* this.b*Math.sqrt(this.a*this.a +this.h*this.h)/2
    }

    getVolume(): number {
        return 5*this.a*this.b*this.h/6
    }
}