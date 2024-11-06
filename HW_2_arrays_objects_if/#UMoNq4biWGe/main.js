let day = prompt('Введіть число від 1 до 31')
if (day >= 1 && day <= 10) {
    console.log('перша декада місяця')
} else
if (day >= 11 && day <= 20) {
    console.log('друга декада місяця')
} else
if (day >= 21 && day <= 31) {
    console.log('третя декада місяця')
} else
{
    console.log('число має бути від 1 до 31')
}