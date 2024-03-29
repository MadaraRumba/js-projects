// Implement a method "createSentence" which accepts one argument (array of words) and
//    puts words together and returns a sentence (also adds spaces between words).
//    Example of the method call:
//
//    String [] words = {"my", "name", "is", "John"};
//    String sentence = createSentence(words);
//    System.out.println(sentence);
//    //It should print: my name is John
//
//    hint: loop trough array of strings the same as you would with numbers. You can put string
//          together (concatenate) with + operator, for example:
//          String sentence = "text1 " + "text2";
//          Similar as we calculated sum for all elements in array of numbers in previous tasks,
//          you can create variable of type String and keep adding words to it. And after loop just
//          return it.

/*
let words = ['My', 'name', 'is', 'John']
let sentence = '';

function createSentence(array) {
    for (let i = 0; i < array.length; i++) {
        sentence += array[i] + ' ';
    }
    return sentence;
}

createSentence(words);
console.log(sentence);
*/