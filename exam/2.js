// •	Първи ред – брой дни, в които Дядо Коледа отсъства – цяло число в интервала [1…5000]
// •	Втори ред – оставена храна в килограми – цяло число в интервала [0…100000]
// •	Трети ред – храна на ден за първия елен в килограми – реално число в интервала [0.00…100.00]
// •	Четвърти ред – храна на ден за втория елен в килограми– реално число в интервала [0.00…100.00]
// •	Пети ред – храна на ден за третия елен в килограми – реално число в интервала [0.00…100.00]


function santaSmth(input) {
    let daysGone = Number(input[0])
    let foodWhileGone = Number(input[1])
    let firstFood = Number(input[2])
    let secondFood = Number(input[3])
    let thirdFood = Number(input[4])

    let firstFoodTotal = daysGone * firstFood
    let secondFootTotal = daysGone * secondFood
    let thirdFoodTotal = daysGone * thirdFood

    let totalFood = firstFoodTotal + secondFootTotal + thirdFoodTotal

    if (foodWhileGone > totalFood) {
        console.log(`${Math.floor(foodWhileGone - totalFood)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(totalFood - foodWhileGone)} more kilos of food are needed.`);
    }
}
santaSmth(["5",
"10",
"2.1",
"0.8",
"11"])


