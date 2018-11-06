class Song {
  constructor() {
    this.food = ["fly", "spider", "bird", "cat", "dog", "goat", "cow", "horse"];
    this.lyrics = ["", `It wriggled and jiggled and tickled inside her.`, `How absurd to swallow a bird!`, "Imagine that, to swallow a cat!", "What a hog, to swallow a dog!", "Just opened her throat and swallowed a goat!", "I don't know how she swallowed a cow!", "She's dead, of course!"];
  }
  verse(start = 1) {
    let result = "";
    result += `I know an old lady who swallowed a ${this.food[start - 1]}.\n`;
    result += this.lyrics[start - 1] + (start > 1 ? '\n' : '');
    if(start === 8 ) return result;
    for (let i = start; i > 1; i--) {
      result += `She swallowed the ${this.food[i - 1]} to catch the ${i - 2 === 1 ? this.food[i - 2] + ` that wriggled and jiggled and tickled inside her` : this.food[i - 2]}.\n`;
    }
    result += `I don't know why she swallowed the fly. Perhaps she'll die.\n`;
    return result;
  }
  verses(start = 1 ,end = 1){
    let result = "";
    for (let i = start; i <= end; i++) {
      result += this.verse(i) + '\n';
    }
    return result;
  }
}
export default Song;
