function logTime<T>(num: T): T {
    console.log(new Date());
    return num;
}

logTime<string>('some string');

//we can use this approach instead of the following:
function logTimeNumbs(num: number): number {
    console.log(new Date());
    return num;
}
function logTimeStrings<T>(num: string): string {
    console.log(new Date());
    return num;
}
//=============================================
interface MyInterface{
    transform: <T>(a:T) => T;
}
class MyClass<T>{
    value: T
}
const someClass = new MyClass<number>();
console.log(typeof someClass.value); //number

//we can extend function parameters by interfaces
interface TimeStamp{
    stamp: number;
}
function logTimeStamp<T extends TimeStamp>(num: T): T{
    console.log(num.stamp);
    return num;
}