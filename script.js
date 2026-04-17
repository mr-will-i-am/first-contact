document.addEventListener("DOMContentLoaded", () => {
    const card = document.querySelector(".card");
    if (!card) return;
  
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
  });
