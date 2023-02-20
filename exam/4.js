function workout (input) {
    let index = 0
    let nDays = Number(input[index])
    index++

    let dailyKm = Number(input[index])
    index++

    let totalKm = dailyKm
    while (index < input.length) {
        let percentDaily = Number(input[index])
        dailyKm = dailyKm * (1 + percentDaily / 100)
        totalKm += dailyKm
        index++
    }

    if (totalKm < 1000) {
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(1000 - totalKm)} more kilometers`)
    } else {
        console.log(`You've done a great job running ${Math.ceil(totalKm - 1000)} more kilometers!`)
    }
}
workout(["5",
"30",
"10",
"15",
"20",
"5",
"12"])
