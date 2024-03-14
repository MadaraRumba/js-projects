export {};

function onlyTheAces(arr:string[]):string[] {

    let acesArray: string[] = [];

    for(let i = 0; i< arr.length; i++){
        if (arr[i] === 'Ace') {
            acesArray.push(arr[i])
        }
    }
    return acesArray;
}

console.log(onlyTheAces(["Ace", "King", "Queen", "Jack", "Ace"])); // Expected result: ['Ace', 'Ace']
