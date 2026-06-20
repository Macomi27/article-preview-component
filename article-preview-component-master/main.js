document.querySelector(".share-icon").addEventListener("click", () => {
  document.querySelectorAll(".share-info").forEach((item) => {
    item.classList.toggle("shared");
  });
});
