function vowelCount(sentence) {
  if (!sentence) {
    return null;
  }

  const smallCase = sentence.toLowerCase();
  const vowelMap = new Map();

  for (let char of smallCase) {
    if (isVowel(char)) {
      if (vowelMap.has(char)) {
        vowelMap.set(char, vowelMap.get(char) + 1);
      } else {
        vowelMap.set(char, 1);
      }
    }
  }
  return vowelMap;
}

function isVowel(char) {
  return "aeiou".includes(char);
}

const vowel = vowelCount("SAURABH");

if (vowel) {
  for (let i of vowel) {
    console.log(i);
  }
} else {
  console.log(undefined);
}
