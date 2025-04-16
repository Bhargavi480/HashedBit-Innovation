function correctfn(string, wrong, correct) {
    return string.replace(wrong, correct);
}

let sentence = "Learning is the key to sucsess.";
let wrong = "sucsess";
let correct = "success";

console.log(correctfn(sentence, wrong, correct));
