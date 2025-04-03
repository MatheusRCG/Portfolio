document.addEventListener("DOMContentLoaded", function () {
  // -- HEADER --
  function smoothScroll(event) {
    event.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 40,
        behavior: "smooth",
      });
    }
  }

  document
    .querySelectorAll("nav ul li a, .contact-us-btn")
    .forEach((anchor) => {
      anchor.addEventListener("click", smoothScroll);
    });

  // -- SKILL FILTER --
  const skillButtons = document.querySelectorAll(".skill-btn");
  const skillLists = document.querySelectorAll(".skill-list");
  const skillsContainer = document.querySelector(".skills-left");
  let allSkillsList = null;

  function removeSelectedClass(elements) {
    elements.forEach((el) => el.classList.remove("selected"));
  }

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

      const animations = ["fade-up", "fade-right", "fade-left", "fade-in"];

      skillLists.forEach((list) => {
        list.querySelectorAll(".skill-item").forEach((item) => {
          let clonedItem = item.cloneNode(true);
          let randomAnimation =
            animations[Math.floor(Math.random() * animations.length)];
          clonedItem.classList.add(randomAnimation);

          allSkillsList.appendChild(clonedItem);
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
      removeSelectedClass(skillButtons);
      this.classList.add("selected");
    });
  });

  showAllSkills();

  // -- SKILL TEXTS --
  const skillItems = document.querySelectorAll(".skill-item");
  const skillTexts = document.querySelectorAll(".skills-content-list li");
  const defaultText = document.querySelector('[data-category="dafault-skill"]');

  skillTexts.forEach((text) => (text.style.display = "none"));
  defaultText.style.display = "block";

  skillItems.forEach((item) => {
    item.addEventListener("click", function () {
      const category = this.getAttribute("data-category");
      const selectedText = document.querySelector(
        `.skills-content-list li[data-category="${category}"]`
      );

      skillTexts.forEach((text) => (text.style.display = "none"));

      if (selectedText) {
        selectedText.style.display = "block";
      }

      removeSelectedClass(skillItems);
      this.classList.add("selected");
    });
  });

  // -- EFFECTS --
  function activateAnimations(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      } else {
        entry.target.classList.remove("animate");
      }
    });
  }

  const observer = new IntersectionObserver(activateAnimations, {
    root: null,
    threshold: 0.3,
  });

  document
    .querySelectorAll(".fade-in, .fade-up, .fade-left, .fade-right")
    .forEach((el) => {
      observer.observe(el);
    });
});
