enum Direction{
    Up,
    Down,
    Right,
    Left
}
enum Direction1{
    Up = 'UP',
    Down = 'DOWN',
    Right = 'RIGHT',
    Left = 'LEFT'
}
enum Decision{
    Yes = 1,
    No = 'No'
}

//we can use functions inside enums as value
enum Decision1{
    Yes = 1,
    No = calcEnum()
}
function calcEnum(){
    return 2;
}
//we can use enum as obj in functions
function runEnum(obj:{Up: string}){

}
runEnum(Direction1);

//we can use keyword never
enum Dice{
    One = 1,
    Two = 2
}
function ruDice(dice: Dice){
    switch (dice){
        case Dice.One:
            return 'Один'
        case Dice.Two:
            return 'Два'
        default:
            const a: never = dice; //it will return error if we changed Dice enum, but did not change ruDice
    }
}