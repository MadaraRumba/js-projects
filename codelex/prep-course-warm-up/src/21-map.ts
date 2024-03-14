export {};

function tidyUpString(str:string):string {
  return str.trim().toLowerCase().replace("/", "");
}


// You are allowed to edit this function
function capitalise(str: string):string {
    const firstLetterUpper = str[0].toUpperCase();
    const newWord = firstLetterUpper + str.substring(1);
    return newWord;
}

const mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];
let mentorsTidy = mentors.map((mentor) => tidyUpString(mentor)).map((mentor) => capitalise(mentor)); // You are allowed to edit this line

console.log(mentorsTidy); // Expected output: ["Daniel", "Irina", "Gordon", "Ashleigh"]





