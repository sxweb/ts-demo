const a: number = 4;
const b: string = 'some string';
const c = 'some string second variant';
let d: string[] = ['first value', 'second value'];
const e: any = 3; //not recommended to use
function test(a: number): number{
    return a * a;
}
const test2 = (a:number): number =>{
    return a++;
}
d = d.map((x:string) => x.toLowerCase());