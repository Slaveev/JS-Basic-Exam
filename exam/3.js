function banskoVac( input ) {
    let daysCount = Number(input[0])
    let roomType = input[1]
    let grade = input[2]

    let price = 0
    let nightsCount = daysCount - 1

    switch( roomType ) {
        case "room for one person":
            price = nightsCount * 18 
            break;

        case "apartment":
            price = nightsCount * 25

            if( nightsCount < 10 ) { 
                price *= 0.7
            } else if ( nightsCount <= 15 ) {
                price *= 0.65
            } else {
                price *= 0.5
            }
            break;

        case "president apartment":
            price = nightsCount * 35

            if( nightsCount < 10 ) {
                price *= 0.9
            } else if ( nightsCount <= 15 ) {
                price *= 0.85
            } else {
                price *= 0.8
            }
            break;
    }

    if( grade === "positive" ) {
        price *= 1.25
    } else {
        price *= 0.9
    }

    console.log(price.toFixed(2))
}
banskoVac(["14",
"apartment",
"positive"])
