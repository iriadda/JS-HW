let time = prompt('Введіть число від 0 до 59')
if (time >= 0 && time <= 15) {
    console.log('перша чверть години')
} else
if (time >= 16 && time <= 30) {
    console.log('друга чверть години')
}else
if (time >= 31 && time <= 45) {
    console.log('третя чверть години')
}else
if (time >= 46 && time <= 59) {
    console.log('четверта чверть години')
}else {
    console.log('введено не вірне число')
}