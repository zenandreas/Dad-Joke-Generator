/* On Click of button element should run this code*/

// Random Joke Generator (0 - 6) // 7 jokes

const jokePicker = () => {
  const jokes = ["I only know 25 letters of the alphabet. I don't know y.", "How does the moon cut his hair? Eclipse it.", "What do a tick and the Eiffel Tower have in common? They're both Paris sites.", "Singing in the shower is fun until you get soap in your mouth. Then it's a soap opera.", "Why do fathers take an extra pair of socks when they go golfing? In case they get a hole in one!", "My wife said I should do lunges to stay in shape. That would be a big step forward.", "I'm afraid for the calendar. Its days are numbered."];
  document.getElementById("submit").innerHTML = jokes[Math.floor(Math.random() * 7)];
}


