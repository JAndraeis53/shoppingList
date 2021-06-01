const shoppingList = [
    milk = {
        id: 1,
        item: "milk",
        price: 4,
        organic: false
    },
    eggs = {
        id: 2,
        item: "eggs",
        price: 2,
        organic: true
    },
    pizzaRolls = {
        id: 3,
        item: "pizza rolls",
        price: 5,
        organic: false
    },
    steak = {
        id: 4,
        item: "steak",
        price: 15,
        organic: true
    },
    pineapple = {
        id: 5,
        item: "pineapple",
        price: 3,
        organic: true
    },
    sandwichBuns ={
        id:6,
        item: "sandwich buns",
        price: 1,
        organic: false
    },
    condiments = {
        id: 7,
        item: "mayo",
        price: 22,
        organic: false
    }

]

// console.log(shoppingList)

const addToShoppingList = (shoppingObject) => {
    const lastIndex = shoppingList.length - 1
    const currentLastShopping = shoppingList[lastIndex]
    const maxId = currentLastShopping.id
    const idForNewShopping = maxId + 1

    shoppingObject.id = idForNewShopping

    // if (!Date.now) {
    //     Date.now = function now() {
    //         return new Date().getTime();
    //     };
    // }
    
    // shoppingObject.dateCreated = Date
    shoppingList.push(shoppingObject)
}

bacon = {
    item: "bacon",
    price: 4,
    organic: true
}

waffles = { 
    item: "waffles",
    price: 5,
    organic: false
}

coffee ={
    item: "coffee",
    price: 13,
    organic: true
}

icecream = {
    item: "icecream",
    price: 11,
    organic: true
}

brocoli = {
    item: "brocoli",
    price: 9,
    organic: true
}

addToShoppingList(bacon)
addToShoppingList(waffles)
addToShoppingList(coffee)
addToShoppingList(icecream)
addToShoppingList(brocoli)

// console.log(shoppingList)


const reconsiderPrice = 8

for (const shopping of shoppingList){
    if (shopping.price > reconsiderPrice){
    // shopping.price = shopping.price * 1.05
    console.log(`The ${shopping.item} cost $${shopping.price}! Do you need to reconsider?`)
    }
}