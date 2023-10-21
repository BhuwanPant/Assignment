function reverseWordsInSentence(sentence) {
    let words = sentence.split(' ');

    // Reverse each word and store them in an array
    let reversedWords = words.map(word => {
        // Handle punctuation
        const isWordWithPunctuation = /[^a-zA-Z0-9]/.test(word);
        const punctuation = isWordWithPunctuation ? 
        word.match(/[^a-zA-Z0-9]/g).join('') : '';

        word = word.replace(/[^a-zA-Z0-9]/g, '');

        const reversed = word.split('').reverse().join('');

        return reversed + punctuation;
    });
    return reversedWords.join(' ');
}

// Example used:
const inputSentence = "This is a sunny day";
const reversedSentence = reverseWordsInSentence(inputSentence);
console.log(reversedSentence); // Output: "shiT si a ynnus yad"
