const tabs = document.querySelectorAll(".tab-btn");
const cards = document.querySelectorAll(".card");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // Handle Active Tab
    tabs.forEach(t => t.classList.remove("active-tab"));
    tab.classList.add("active-tab");

    const category = tab.id.replace("tab-", "");

    // Show Cards Based on Category
    cards.forEach(card => {
      if (category === "all" || card.classList.contains(category)) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});