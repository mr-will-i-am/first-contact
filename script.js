document.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector(".card");
  const eyebrow = document.getElementById("eyebrow-text");
  const message = document.getElementById("main-message");

  if (card) {
    card.animate(
      [
        { opacity: 0, transform: "translateY(12px)" },
        { opacity: 1, transform: "translateY(0)" }
      ],
      {
        duration: 500,
        easing: "ease-out",
        fill: "forwards"
      }
    );
  }

  const eyebrowLines = [
    "look what you found...",
    "well well well...",
    "this feels promising...",
    "curiosity looks good on you.",
    "bold move. i respect it.",
    "you seem fun already."
  ];

  const messages = [
    "You seem like someone who makes things a little better just by showing up.",
    "I don’t know you yet, but I already like your energy.",
    "Whatever you’ve got going on… I hope today tilts in your favor.",
    "You strike me as someone worth knowing.",
    "You’ve got good instincts. I like that.",
    "There’s something solid about your vibe. Keep that.",
    "You feel like one of the good ones.",
    "I have a feeling you make life more interesting.",
    "You’ve got a quietly impressive thing going on."
  ];

  function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  if (eyebrow) {
    eyebrow.textContent = getRandom(eyebrowLines);
  }

  if (message) {
    message.textContent = getRandom(messages);
  }
});