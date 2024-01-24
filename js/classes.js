class Rectange{
    
    constructor(w,h,c){
        this._width=w;
        this._height=h;
        this._color=c | 'red';
    }

    getArea(){
        return this._width*this._height;
    }
}

class Squere extends Rectange{
    constructor(){
        super();
    }

}

class PrivateProp{

#width;
#height;

    constructor(w,h,c){
        this.#width=w;
        this.#height=h;
    }

    get width(){
        return this.#width;
    }

    set width(val){
        this.#width=val;

    }
}


const box=new Rectange(30,20,'red');

const xx=new PrivateProp(30,20,'red');

xx.width=50;

console.log(xx.width);
[a,b]=name.split(' ')