type Point = {
    x:number,
    y:number
}
function printCoords(coords:Point){
    console.log(coords.x, coords.y);
}

interface IPoint{
    x:number,
    y:number
}
//interface can be extended
interface I3dPoint extends IPoint{
    z:number;
}
//type can be extended using the following approach:
type D3Point = Point & {
    z:number;
}
//==================
//we cant do the same action with types
interface Test {
    a:number;
}
interface Test{
    b:number;
}
//=====================

//type casts
const y = (point: IPoint) => {
    const d: I3dPoint = point as I3dPoint;
}

const myCanvas = document.getElementById('canvas') as HTMLCanvasElement;