// •	Процент на мазнините - цяло число в интервала [0…100]
// •	Процент на протеините - цяло число в интервала [0…100]
// •	Процент на въглехидратите - цяло число в интервала [0…100]
// •	Общ брой калории - цяло число в интервала [1000…15000]
// •	Процент на съдържанието на вода - цяло число в интервала [0…100]

function catDiet(input) {
    let fatPercent = Number(input[0])
    let proteinPercent = Number(input[1])
    let carbPercent = Number(input[2])
    let allCalories = Number(input[3])
    let waterPercent = Number(input[4])

    let fatTotal = Math.round((((fatPercent / 100) * allCalories) / 9) * 100) / 100
    let proteinTotal = Math.round((((proteinPercent / 100) * allCalories) / 4) * 100) / 100
    let carbsTotal = Math.round((((carbPercent / 100) * allCalories) / 4) * 100) / 100

    let totalFoodWeight = (fatTotal + proteinTotal + carbsTotal).toFixed(2)
    let oneCal = Math.round((allCalories / totalFoodWeight) * 100) / 100
    let waterNew = 100 - waterPercent
    let CalWithoutWater = (oneCal * waterNew / 100) 
    console.log(CalWithoutWater.toFixed(4))
    console.log(totalFoodWeight)
    console.log(oneCal)
    console.log(waterNew)
    console.log(CalWithoutWater)
    
}
catDiet(['40', '40', '20', '3000', '40'])
