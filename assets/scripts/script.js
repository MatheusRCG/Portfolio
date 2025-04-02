document.addEventListener("DOMContentLoaded", function () {
  const skillButtons = document.querySelectorAll(".skill-btn");
  const skillLists = document.querySelectorAll(".skill-list");
  const skillsContainer = document.querySelector(".skills-left");
  let allSkillsList = null;

  function hideAllLists() {
    document.querySelectorAll(".skill-list").forEach((list) => {
      list.style.display = "none";
    });
  }

  function showAllSkills() {
    if (!allSkillsList) {
      allSkillsList = document.createElement("ul");
      allSkillsList.classList.add("skill-list");
      allSkillsList.style.display = "flex";

      skillLists.forEach((list) => {
        list.querySelectorAll(".skill-item").forEach((item) => {
          allSkillsList.appendChild(item.cloneNode(true));
        });
      });

      skillsContainer.appendChild(allSkillsList);
    }

    hideAllLists();
    allSkillsList.style.display = "flex";
  }

  function filterSkills(category) {
    hideAllLists();

    if (category === "all") {
      showAllSkills();
    } else {
      const selectedList = document.querySelector(
        `.skill-list[data-category="${category}"]`
      );
      if (selectedList) {
        selectedList.style.display = "flex";
      }
    }
  }

  skillButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const category = this.getAttribute("data-category");
      filterSkills(category);
    });
  });

  showAllSkills();



  const skillItems = document.querySelectorAll(".skill-item"); // Itens clicáveis
  const skillTexts = document.querySelectorAll(".skills-content-list li");
  const defaultText = document.querySelector('[data-category="dafault-skill"]');

  // Oculta todos os textos, exceto o inicial
  skillTexts.forEach((text) => (text.style.display = "none"));
  defaultText.style.display = "block";

  skillItems.forEach((item) => {
    item.addEventListener("click", function () {
      const category = this.getAttribute("data-category"); // Pega a categoria do item clicado
      const selectedText = document.querySelector(
        `.skills-content-list li[data-category="${category}"]`
      );

      // Oculta todos os textos antes de exibir o novo
      skillTexts.forEach((text) => (text.style.display = "none"));

      // Exibe o texto correspondente à habilidade clicada
      if (selectedText) {
        selectedText.style.display = "block";
      }
    });
  });
});
