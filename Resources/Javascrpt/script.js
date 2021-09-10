/* On Click of button element should run this code*/

jokeList = ["I only know 25 letters of the alphabet. I don't know y.", "How does the moon cut his hair? Eclipse it.", "What do a tick and the Eiffel Tower have in common? They're both Paris sites.", "Singing in the shower is fun until you get soap in your mouth. Then it's a soap opera.", "Why do fathers take an extra pair of socks when they go golfing? In case they get a hole in one!", "My wife said I should do lunges to stay in shape. That would be a big step forward.", "I'm afraid for the calendar. Its days are numbered.", "How do you follow Will Smith in the snow? You follow the fresh prints.", "I thought the dryer was shrinking my clothes. Turns out it was the refrigerator all along.", "What did the ocean say to the beach? Nothing, it just waved.", "I don't trust those trees. They seem kind of shady.", "Why don't eggs tell jokes? They'd crack each other up.", "I don't trust stairs. They're always up to something.", "This graveyard looks overcrowded. People must be dying to get in.", "When two vegans get in an argument, is it still called a beef?", "What country's capital is growing the fastest? Ireland. Every day it's Dublin.", "I had a neck brace fitted years ago and I've never looked back since.", "I used to be a personal trainer. Then I gave my too weak notice.", "What do you call a fake noodle? An impasta.", "What do clouds wear? Thunderwear.", " wouldn't buy anything with velcro. It's a total rip-off.", "What would the Terminator be called in his retirement? The Exterminator.", "My boss told me to have a good day, so i went home.", "Hey, did you hear about the kidnapping at that school? Its okay we woke up!"];
let number = 0;

const randomJoke = () => {
  const random = Math.floor(Math.random() * 23);
  document.getElementById("jokeSection").innerHTML = jokeList[random];
  document.getElementById("jokeCount").innerHTML = `Joke: ${random + 1} / 24`;
  return number = random;
};

const prevJoke = () => {
  if (number > 0) {
    number--;
    return setJoke();
  }
};

const nextJoke = () => {
  if (number <= jokeList.length - 2) {
    number++;
    return setJoke();
  }
};

const setJoke = () => {
  document.getElementById("jokeSection").innerHTML = jokeList[number];
  return document.getElementById("jokeCount").innerHTML = `Joke: ${number + 1} / 24`
}