export {};

/**
 * Currency Formatting
 *
 * The business is now breaking into the Brazilian market
 * Write a new function for converting to the Brazilian real
 * They have also decided that they should add a 1% fee to all foreign transactions
 *
 * Additional Challenge:
 * Find a way to add 1% to all currency conversions
 * (think about the DRY (don't repeat yourself) principle)
 * You are allowed to create your own functions
 * and use them in place of convertToUSD() and convertToBRL()
 */

const CONVERSION_FEE = 0.01;
const CONVERSION_RATE_EUR_USD = 1.09;
const CONVERSION_RATE_EUR_BRL = 5.6;

function formatCurrency(price: number): string {
    return price.toFixed(2);
}

function addFee(price:number):number{
    return price + price * CONVERSION_FEE;
}

function convertCurrency(price:number, rate: number):number {
    return price * rate;
}

const product = "You don't know JS";
const price = 12.5;
const priceInUSD = formatCurrency(addFee(convertCurrency(price, CONVERSION_RATE_EUR_USD)));
const priceInBRL = formatCurrency(addFee(convertCurrency(price, CONVERSION_RATE_EUR_BRL)));

console.log("Product: " + product);
console.log("Price: $" + priceInUSD);
console.log("Price: R$" + priceInBRL);

/* Expected output:

    > Product: You don't know JS
    > Price: $?
    > Price: R$?

*/

