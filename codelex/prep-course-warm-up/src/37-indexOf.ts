export {};

/**
 * Write a function that removes an element form array.
 * The function must:
 *  - NOT change the original array
 *  - return a new array with the first item matching `valueToRemove` removed
 */

// You are allowed to edit only this function
function remove(arr: any[], valueToRemove: string | number): number[] | string[] {
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        let elem = arr[i];
        if (elem !== valueToRemove) {
            arr2.push(elem);
        }
    }
    return arr2;
    //
    // let removeIndex = arr.indexOf(valueToRemove);
    // arr.splice(removeIndex, 1);
    // return arr;
}

const numbers = [1, 2, 3];
const names = ["John", "Alice", "Ellen"];

const newNumbers = remove(numbers, 2);
const newNames = remove(names, "Ellen");

console.log(newNumbers);
console.log(newNames);

/* 
  Expected output:
  
      [1, 3]
      [John, Alice]
*/
