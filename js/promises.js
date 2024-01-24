


const stock = {
    meat: ['beef', 'chiken', 'vegan'],
    ingrediens: ['bun', 'vegetables'],
    sauce: ['ketchup', 'burger sauce'],
    package: ['paper', 'bag']
}

/* const order = (meatType, call_production) => {

    setTimeout(() => {
        console.log(`${stock.meat[meatType]} was selected`);
        call_production();
    }, 2000);

}

const production = () => {
    setTimeout(() => {
        console.log(`production started`);
    }, 0);

    setTimeout(() => {
        console.log(`meat griled`);
        setTimeout(() => {
            console.log(`${stock.ingrediens[0]} and ${stock.ingrediens[1]} added`);
            setTimeout(() => {
                console.log(`${stock.sauce[0]} and ${stock.sauce[1]} added`);
                setTimeout(() => {
                    console.log(`${stock.package[0]} and ${stock.package[1]} added`);
                }, 1000);
            }, 1000);
        }, 1000);

    }, 1000);
}

order(0, production); */


let isOpen = true;

/* const order = (time, work) => {

    return new Promise((resolve, reject) => {
        if (isOpen) {
            setTimeout(() => {
                resolve(work());
            }, time);

        } else {
            reject(console.log('closed'));
        }
    });
}

order(2000, () => {
    console.log(`${stock.meat[0]} was selected`);
})
    .then(() => {
        return order(0, () => {
            console.log(`production started`);
        });
    })
    .then(() => {
        return order(1000, () => {
            console.log(`meat griled`);
        });
    })
    .then(() => {
        return order(1000, () => {
            console.log(`${stock.ingrediens[0]} and ${stock.ingrediens[1]} added`);
        });
    })
    .then(() => {
        return order(1000, () => {
            console.log(`${stock.sauce[0]} and ${stock.sauce[1]} added`);
        });
    })
    .then(() => {
        return order(1000, () => {
            console.log(`${stock.package[0]} and ${stock.package[1]} added`);
        });
    }).catch(() => {
        console.log('closed');
    })
    .finally(() => {

    }) */


/* async function order() {

}
const order = async () => {

}
 */
const time = (ms) => {
    return new Promise((resolve, reject) => {
        if (isOpen) {
            setTimeout(resolve, ms);

        } else {
            reject(console.log('closed'));
        }
    });
}

const kitshen = async () => {
    try {
        await time(2000);
        console.log(`${stock.meat[0]} was selected`);
        await time(1000);
        console.log(`production started`);
        await time(1000);
        console.log(`meat griled`);


    } catch (err) {
        console.log('error ', err.message);
    } finally {
        console.log('closed');
    }
}

/* fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => console.log(json)) */


const numbers = [1, 2, 3, 4, 5];

const sq = numbers.map(num => num ** 2);

console.log(sq);

const odds = numbers.filter(num => num % 2);

console.log(odds);

