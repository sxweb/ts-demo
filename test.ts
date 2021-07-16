let a: number = 4;
let b: string = 'some string';
let c = true;
const d: string[] = ['first', 'second'];
let e: any = 3;//do not recommend use this approach
function test(a:string): string{
    return '' + a;
}
function printIt(id: number | string){
    if(typeof id === 'number'){
        console.log(id.toString());
    }else if(typeof id === 'string'){
        id.toUpperCase();
    }
}
const z: undefined = undefined;
const n: null = null;