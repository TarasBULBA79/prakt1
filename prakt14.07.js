// 1. Оголосіть змінні str, num, flag і txt зі значеннями «Привіт», 123, true, «true».
// С помощью typeof Переконайся, что значення змінніх належати типам: string, number і boolean.


// let str = 'tgghfghfghg';
// console.log(typeof str)
//
// let num = 123;
// console.log(typeof num)
//
// let flag = true
// console.log(typeof flag)
//
// let txt = 'hghghhg';
// console.log(typeof txt)



// 2. Оголосіть змінні a1, a2, a3, a4, a5. За домігся 3х математичних оператцій получил числа:
//     34,
//         12,
//         66,
//         90,
//         87
// Намагайтеся використовуват Різні оператори.
//     Example: 88 = (16/2) * 11

// let a = 10+10+10+4;
// console.log(a)
//
// let a2 = (10-5)+2+5;
// console.log(a2)
//
// let a3 = ((20-10)+5)*4+6;
// console.log(a3)
//
// let a4 = ((20-10)+5)*6;
// console.log(a4)
//
// let a5 = ((20-10)+5)*6-3;
// console.log(a5)



//
// 3. Створіть змінні a6, a7, a8, a9, a10. Запішіть в них результати виразів:
//     5% 3,
//     3% 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг'

let a6 = 6 % 3
console.log(a6)
let a7 = 5 + '3'
console.log( typeof a7)
let a8 = '10' - 3
console.log(a8)
let a9 =  75 + '3кг'
console.log(a9)


//
// 4. напишіть код, Який віраховує площу прямокутник висота 23см. (Змінна height) та шириною 10см (змінна width).
// Значееня площади зберігаті в змінній s.


// function rectangle (height, width){
//     let res = height*width;
//     return res
// }
// let x = rectangle(23, 10)
// console.log(x)

//
// 5. Напиши код, який знаходить обсяг циліндра висотою 10м (змінна heightC) і діаметром підстави 4м (dC),
//     результат помістіть в змінну v.

// function cyl (height, square){
//     let res = height*square;
//     return res
//     }
//     let v = cyl (10, 4)
// console.log(v)



//
// 6. У прямокутного трикутника дві сторони n (зі значенням 3) і m (зі значенням 4).
// Знайдіть гіпотенузу k по теоремі Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор піднесення до степеня **).
//

function triangle (side_n, side_m){
    let res = (side_n**2+side_m**2)**0.5
    return res
}
let c = Math.pow(10, 2)
let c1 = Math.pow(10, 2)
let c2 = c+c1
let a = Math.sqrt(c2)
console.log(c)

//
//
// 8. Вивести в вікно браузера за допомогою методу alert () такі дані: Ваше ПІБ, вік, хобі (кожної на нового рядка з допомогою \ n).


let name = 'Taras'
let surnname = 'Taras'
alert('My name: ' + name + 'my surname' + surnname)


// 9. Створити 4 змінні з використанням ключового слова let з іменами str1, str2, str3, concatenation.
//     Змінної str1 привласнити фразу 'Хто', str2 - 'ти', str3 - 'такий?'
// Локальної змінної concatenation привласнити результат конкатенації 3-х рядків: str1, str2, str3.
//     Вивести в документ вміст змінної concatenation задопомогою document.write
//
// 10. Подумайте Які значення виведе у вікно браузера наступний фрагмент коду? і чому?
//     let str = "20";
// let a = 5;
// document.write (str + a + "<br/>"); //NUMBER
// document.write (str - a + "<br/>");
// document.write (str * "2" + "<br/>");//
// document.write (str / 2 + "<br/>");
//
//
//
// 13. За допомогою вікна введення, що викликається методом prompt, зробити додавання двох чисел, а висновок результату за допомогою методу alert
// 14. За допомогою вікна введення, що викликається методом prompt, користувач послідовно виводить ім'я, прізвище та вік, а вам не обходимо вивести рядок такого виду
// Доброго вечора Іван Іванов, мої поздоровлення що вам 32, а висновок результату за допомогою методу alert
//
let num1 = +prompt('vvedit cuslo')
let num2 = +prompt('vvedit cuslo')

document.write(num1 + num2)
//
//
// =====================
// ====== ДОП ============
// =====================
//
//
//
//
// 1. Три різніх числа вводяться через prompt ().
//     За допомоги if else вівесті іх в порядку зростання. (Відсортуваті по зростанню)
//
// 2.
// Все параматри отримуємо з клавіатури !!!!
//     Імітуємо поведінку пішохода на перекстке.
//     Якщо світлофор зелений - вивести "йди".
//     Якщо світлофор жовтий - вивести "почекай".
//     Якщо світлофор червоний - вивести "стій".
//     Якщо світлофор в аварійному режимі вивести "роби що хочеш"!
//
//     3
// Всі параметри отримуємо з клавіатури !!!! (prompt, confirm)
// Створити змінну isRoadClear яка характеризує наявність на дорозі машин.
//     Покращуємо попереднє завдання.
//     Якщо світлофор зелений і машин немає - вивести "йди".
//     Якщо світлофор зелений і машини є - вивести почекай поки порушники проїдуть ".
// Якщо світлофор жовтий і машини є - вивести "чекай".
//     Якщо світлофор жовтий і машин немає - вивести "все рано чекай".
//     Якщо світлофор червоний і машин ні-вивести "стій все рано".
//     Якщо світлофор червоний - і машини є вивести "стій і чекай".
//     Якщо світлофор в аварійному режимі вивести "роби що хочеш"!