class NewPoint{
    private x: number;
    y:number;

    constructor(x:number, y:number) {
        this.x = x;
        this.y = y;
    }

    incX(x: number){
        this.x +=x;
    }
}
const point = new NewPoint(0, 0);

class D3NewPoint extends NewPoint{
    z:number;
    constructor(x: number, y:number, z: number){
        super(x, y);
        this.z = z;
    }
}

abstract class Test3{
    someMethod(){

    }
}
class Test4 extends Test3{

}
interface SimpleInterface{
    test: () => void;
}

class HasInterface implements SimpleInterface{
    test(){
        console.log('do something');
    }
}