const words = ["apple", "banana", "orange", "apple", "banana", "apple"];

const wordFrequencies = {};

words.forEach(word => {
  wordFrequencies[word] = (wordFrequencies[word] || 0) + 1;
});
