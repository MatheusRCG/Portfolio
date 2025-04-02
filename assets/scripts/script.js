document.addEventListener("DOMContentLoaded", function () {
  const skillButtons = document.querySelectorAll(".skill-btn");
  const skillLists = document.querySelectorAll(".skill-list");

  skillButtons.forEach(button => {
      button.addEventListener("click", function () {
          const btnCategory = this.getAttribute("data-category");

          skillLists.forEach(list => {
              if (btnCategory === "all" || list.getAttribute("data-category") === btnCategory) {
                  list.style.display = "block";
              } else {
                  list.style.display = "none";
              }
          });
      });
  });
});
