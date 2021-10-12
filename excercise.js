const user = {
    currentBalance: 5000,
    transactionsMonthToDate: [{}],
};

user.transactionsMonthToDate = [{
        amount: 3000,
        type: "deposit",
        category: "Salary - Full Time",
    },
    { category: "Dining", amount: 50, type: "withdrawal" },
    { category: "Dining", amount: 100, type: "withdrawal" },
    { category: "Rent", amount: 2000, type: "withdrawal" },
    { category: "Groceries", amount: 250, type: "withdrawal" },
    {
        amount: 250,
        type: "withdrawal",
        category: "Transportation",
    },
    {
        amount: 250,
        type: "withdrawal",
        category: "Health",
    },
    {
        amount: 50,
        type: "withdrawal",
        category: "Travel - Fuel",
    },
    { category: "Living", amount: 650, type: "withdrawal" },
    { category: "Groceries", amount: 500, type: "withdrawal" },
    { category: "Living", amount: 250, type: "withdrawal" },
    { category: "Living", amount: 250, type: "withdrawal" },
    {
        amount: 5000,
        type: "deposit",
        category: "Salary - Part Time",
    },
    { category: "Groceries", amount: 450, type: "withdrawal" },
    {
        amount: 58,
        type: "withdrawal",
        category: "Transportation",
    },
    {
        amount: 50,
        type: "withdrawal",
        category: "Health",
    },
    {
        amount: 100,
        type: "withdrawal",
        category: "Transportation",
    },
    {
        amount: 150,
        type: "withdrawal",
        category: "Transportation",
    },
    { category: "Groceries", amount: 100, type: "withdrawal" },
    {
        amount: 100,
        type: "withdrawal",
        category: "Entertainment",
    },
    {
        amount: 500,
        type: "withdrawal",
        category: "Entertainment",
    },
    { category: "Groceries", amount: 300, type: "withdrawal" },
    {
        amount: 500,
        type: "withdrawal",
        category: "Travel - Airline",
    },
    {
        amount: 1500,
        type: "withdrawal",
        category: "Travel - Hotel",
    },
    {
        amount: 50,
        type: "withdrawal",
        category: "Travel - Fuel",
    },
    { category: "Groceries", amount: 200, type: "withdrawal" },
    {
        amount: 500,
        type: "deposit",
        category: "Portfolio Dividends",
    },
    {
        amount: 100,
        type: "withdrawal",
        category: "Entertainment",
    },
    {
        amount: 100,
        type: "withdrawal",
        category: "Travel - Fuel",
    },
    { category: "Groceries", amount: 200, type: "withdrawal" },
    {
        amount: 100,
        type: "withdrawal",
        category: "Entertainment",
    },
    {
        amount: 100,
        type: "withdrawal",
        category: "Health",
    },
];

// Use a for loop to print to the screen the transaction history for the month in this format:
const transactionHistoryPrint = () => {
    console.log('Balance:', `${user.currentBalance}`);
    console.log('Transaction History:');
    let amountOfMoney = user.currentBalance;
    user.transactionsMonthToDate.forEach(trans => {
        if (trans.type === 'deposit') {
            amountOfMoney += trans.amount;
            console.log(`- You deposited \$${trans.amount}. The new balance is \$${amountOfMoney}.`);
        } else {
            amountOfMoney -= trans.amount;
            console.log(`- You withdrew \$${trans.amount}. The new balance is \$${amountOfMoney}.`);
        }
    });
};
// transactionHistoryPrint();

// Define a function that returns the total number of deposits.
const numberOfDeposits = () => {
    const num = user.transactionsMonthToDate.reduce((acc, trans) => acc + (trans.type === 'deposit'), 0);
    console.log('Number of Deposits:', num);
};
// numberOfDeposits();

//   Define a function that returns the total number of withdrawals.
const numberOfWithdrawals = () => {
    const num = user.transactionsMonthToDate.reduce((acc, trans) => acc + (trans.type === 'withdrawal'), 0);
    console.log('Number of Withdrawals:', num);
};
// numberOfWithdrawals();

//   Define a function that returns the sum of deposits.
const sumOfDeposits = () => {
    const sum = user.transactionsMonthToDate.reduce((acc, trans) => acc + trans.amount * (trans.type === 'deposit'), 0);
    console.log('Sum of Deposits:', sum);
};
// sumOfDeposits();

//   Define a function that returns the sum of withdrawals.
const sumOfWithdrawals = () => {
    const sum = user.transactionsMonthToDate.reduce((acc, trans) => acc + trans.amount * (trans.type === 'withdrawal'), 0);
    console.log('Sum of Withdrawals:', sum);
};
// sumOfWithdrawals();

//   Define a function that returns the difference between deposits and withdrawals.
const difference = () => {
    const sumWithdrawals = user.transactionsMonthToDate.reduce((acc, trans) => acc + trans.amount * (trans.type === 'withdrawal'), 0);
    const sumDeposits = user.transactionsMonthToDate.reduce((acc, trans) => acc + trans.amount * (trans.type === 'deposit'), 0);
    console.log(`The difference between deposits and withdrawals: ${sumDeposits-sumWithdrawals}`);
};
// difference()

//   Define a function that returns a new balance for the next month.
const newBalance = () => {
    const sumWithdrawals = user.transactionsMonthToDate.reduce((acc, trans) => acc + trans.amount * (trans.type === 'withdrawal'), 0);
    const sumDeposits = user.transactionsMonthToDate.reduce((acc, trans) => acc + trans.amount * (trans.type === 'deposit'), 0);
    console.log(`The difference between deposits and withdrawals: ${user.currentBalance + sumDeposits - sumWithdrawals}`);
};
// newBalance()

//   Define a function that returns the sum of the groceries.
const groceriesSum = () => {
    const sum = user.transactionsMonthToDate.reduce((acc, trans) => acc + trans.amount * (trans.category === 'Groceries'), 0)
    console.log('Sum of Groceries', sum)
};
// groceriesSum();

//   Define a function that returns the sum of the entertainment.
const entertainmentSum = () => {
    const sum = user.transactionsMonthToDate.reduce((acc, trans) => acc + trans.amount * (trans.category === 'Entertainment'), 0)
    console.log('Sum of Entertainment', sum)
};
// entertainmentSum();

//   Define a function that returns the sum of the travel.
const sumTravel = () => {
    const sum = user.transactionsMonthToDate.reduce((acc, trans) => {
        let find = trans.category.split(' ')[0];
        return acc + trans.amount * (find === 'Travel');
        // if (find === 'Travel') {
        //   console.log(acc);
        // }
    }, 0);
    console.log('Sum of Travel:', sum);
};
// sumTravel();

// Define a function that given a conversion rate of 23000vnd to 1usd returns if the account spent more usd than vnd was deposited into the account for the month.
const usdToVND = 23000;

const differenceVND = () => {
    const sumWithdrawals = user.transactionsMonthToDate.reduce((acc, trans) => acc + trans.amount * (trans.type === 'withdrawal'), 0);
    const sumDeposits = user.transactionsMonthToDate.reduce((acc, trans) => acc + trans.amount * (trans.type === 'deposit'), 0);
    console.log(`The difference between deposits and withdrawals: ${(sumWithdrawals-sumDeposits)*usdToVND}`);
};
// differenceVND();
// Define a function that returns an array of new objects where currency is VND and the amount is it's converted amount.
const currencyObject = () => {
    return {
        currentBalance: user.currentBalance * usdToVND,
        transactionsMonthToDate: user.transactionsMonthToDate.map(a => {
            return {
                category: a.category,
                amount: a.amount * usdToVND,
                type: a.type
            }
        })
    }
};
// console.log(currencyObject());
// Use a for loop to print out the transaction history for the month in this format:

const transactionHistoryPrintVND = () => {
    console.log(`Balance: ₫${user.currentBalance*usdToVND}`);
    console.log('Transaction History:');
    let amountOfMoney = user.currentBalance;
    user.transactionsMonthToDate.forEach(trans => {
        if (trans.type === 'deposit') {
            amountOfMoney += trans.amount;
            console.log(`- You deposited \₫${trans.amount*usdToVND}. The new balance is \₫${amountOfMoney*usdToVND}.`);
        } else {
            amountOfMoney -= trans.amount;
            console.log(`- You withdrew \₫${trans.amount*usdToVND}. The new balance is \₫${amountOfMoney*usdToVND}.`);
        }
    });
};
// transactionHistoryPrintVND();

const order = {
    orderItems: [
        { id: "M40", item: "T-shirt", price: 29.9, quantity: 5, gender: 'm', category: 'Summer' },
        { id: "M32", item: "Hoodie", price: 99.9, quantity: 2, gender: 'm', category: 'Winter' },
        { id: "M11", item: "Sandals", price: 19.9, quantity: 1, gender: 'm', category: 'Summer' },
        { id: "M12", item: "Shorts", price: 29.9, quantity: 1, gender: 'm', category: 'Summer' },
        { id: "M13", item: "Exercise Shorts", price: 29.9, quantity: 5, gender: 'm', category: 'Exercise' },
        { id: "M41", item: "Shoes", price: 19.9, quantity: 1, gender: 'm', category: 'Summer' },
        { id: "M49", item: "Socks", price: 5.9, quantity: 10, gender: 'm', category: 'Undergarment' },
        { id: "M01", item: "Belt", price: 15.9, quantity: 1, gender: 'm', category: 'Accessory' },
        { id: "M42", item: "Underwear", price: 19.9, quantity: 10, gender: 'm', category: 'Undergarment' },
        { id: "F71", item: "T-shirt", price: 39.9, quantity: 5, gender: 'f', category: 'Summer' },
        { id: "F81", item: "Dress", price: 49.9, quantity: 5, gender: 'f', category: 'Summer' },
        { id: "F91", item: "Skirt", price: 39.9, quantity: 5, gender: 'f', category: 'Summer' },
        { id: "F01", item: "Shoes", price: 19.9, quantity: 10, gender: 'f', category: 'Summer' },
        { id: "F32", item: "Hoodie", price: 99.9, quantity: 2, gender: 'f', category: 'Winter' },
        { id: "F34", item: "Sandals", price: 19.9, quantity: 2, gender: 'f', category: 'Summer' },
        { id: "F36", item: "Shorts", price: 39.9, quantity: 3, gender: 'f', category: 'Summer' },
        { id: "F12", item: "Exercise Shorts", price: 29.9, quantity: 5, gender: 'f', category: 'Exercise' },
        { id: "F19", item: "Sleeping", price: 39.9, quantity: 3, gender: 'f', category: 'Undergarment' },
        { id: "F42", item: "Socks", price: 5.9, quantity: 10, gender: 'f', category: 'Undergarment' },
        { id: "F43", item: "Underwear", price: 39.9, quantity: 10, gender: 'f', category: 'Undergarment' },
        { id: "F44", item: "Bra", price: 29.9, quantity: 10, gender: 'f', category: 'Undergarment' },
        { id: "F01", item: "Belt", price: 15.9, quantity: 1, gender: 'f', category: 'Accessory' },
    ]
};
// 1
const sumItem = () => {
    const sum = order.orderItems.reduce((acc, ord) => acc + ord.quantity, 0)
    console.log("Sum of all Items: ", sum);
};
// sumItem();
// 2
const sumNumberOfUniqueItems = () => {
    const allItems = [];
    order.orderItems.forEach(aaa => allItems.push(aaa.item));
    const allItemSet = new Set(allItems);
    console.log('total number of items:', allItemSet.size);
};
// sumNumberOfUniqueItems();
// 3
const sumNumberMale = () => {
    const sum = order.orderItems.reduce((acc, ord) => acc + ord.quantity * (ord.gender === 'm'), 0)
    console.log("Sum of all male items: ", sum);
};
// sumNumberMale();
// 4
const sumNumberFemale = () => {
    const sum = order.orderItems.reduce((acc, ord) => acc + ord.quantity * (ord.gender === 'f'), 0)
    console.log("Sum of all female items: ", sum);
};
// sumNumberFemale();
// 5
const sumNumberSummer = () => {
    const sum = order.orderItems.reduce((acc, ord) => acc + ord.quantity * (ord.category === 'Summer'), 0)
    console.log("Sum of all Summer Items: ", sum);
};
// sumNumberSummer();
// 6
const sumNumberUndergarment = () => {
    const sum = order.orderItems.reduce((acc, ord) => acc + ord.quantity * (ord.category === 'Undergarment'), 0)
    console.log("Sum of all Undergarment Items: ", sum);
};
// sumNumberUndergarment();
// 7
const sumFemaleUndergarment = () => {
    const sum = order.orderItems.reduce((acc, ord) => acc + ord.quantity * (ord.category === 'Undergarment' && ord.gender === 'f'), 0)
    console.log("Sum of all Female Undergarment Items: ", sum);
};
// sumFemaleUndergarment();

// 8
const summerUniqueUT = () => {
    const o = order.orderItems.filter(value => {
        return value.category === 'Summer'
    })
    console.log(o);
}
summerUniqueUT()
    //9
const sumSummer = () => {
    const sum = order.orderItems.reduce((acc, ord) => acc + (ord.quantity * ord.price) * (ord.category === 'Summer'), 0)
    console.log("Sum of all Summer price: ", sum);
};
// sumSummer();
// 10

// 11
const sumMale = () => {
    const sum = order.orderItems.reduce((acc, ord) => acc + (ord.quantity * ord.price) * (ord.gender === 'm'), 0)
    console.log("Sum of all male price: ", sum);
};
// sumMale();
// 12

// 13
const sumFemale = () => {
    const sum = order.orderItems.reduce((acc, ord) => acc + (ord.quantity * ord.price) * (ord.gender === 'f'), 0)
    console.log("Sum of all female price: ", sum);
};
// sumFemale();




// 14
Object.prototype.originalDate = function(callback) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    return today = mm + '/' + dd + '/' + yyyy;
}
order.orderItems.originalDate = originalDate();
// 15
order.orderItems.delivered = false;
//16
const subTotal = () => {
    const sum = order.orderItems.reduce((acc, ord) => acc + (ord.quantity * ord.price), 0)
    return sum;
}
order.orderItems.subtotal = subTotal();
// 17
order.orderItems.salestax = subTotal() * 0.07;
// 18
order.orderItems.grandtotal = (subTotal() - subTotal() * 0.07);
// console.log(order);