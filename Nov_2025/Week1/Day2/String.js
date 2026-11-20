
function lengthOfLastWord(s) {
    let words = s.trim().split(" ");
    let lastWord = words[words.length - 1];

    return lastWord.length;
}

console.log(lengthOfLastWord("Hello World")); 
// Output: 5

console.log(lengthOfLastWord("   fly me   to   the moon   "));
// Output: 4
