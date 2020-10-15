window.onload=function() {
  var action = document.getElementById("shuffle");
  var cards = document.getElementById("sortShuffle");
  
  function shuffleCards() {
    var card = cards.children;
    card = Array.prototype.slice.call(card);
    card = shuffle(card);
    for (let i = 0; i< card.length; ++i){
      cards.appendChild(card[i]);
    }
  }
  
  function shuffle(items) {
    var shuffleList = items.slice(0),random, temp, i = shuffleList.length;
    while(--i)
    {
        random = Math.floor(i * Math.random());
        temp = shuffleList[random];
        shuffleList[random] = shuffleList[i];
        shuffleList[i] = temp;
    }
    return shuffleList;
  }
  
  function sortCards() {
    var card = cards.children;
    [].slice.call(card).sort(function(a, b) {
      return a.textContent.localeCompare(b.textContent);
    }).forEach(function(val, index) {
      cards.appendChild(val);
    });
  }
  document.getElementById("shuffle").onclick = shuffleCards;
  document.getElementById("sort").onclick = sortCards;
}