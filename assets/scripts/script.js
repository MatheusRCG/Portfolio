document.addEventListener("DOMContentLoaded", function () {
    const skillButtons = document.querySelectorAll(".skill-btn");
    const skillLists = document.querySelectorAll(".skill-list");
    const skillsContainer = document.querySelector(".skills-left");
    let allSkillsList = null;
  
    function hideAllLists() {
      document.querySelectorAll(".skill-list").forEach(list => {
        list.style.display = "none";
      });
    }

    function showAllSkills() {
      if (!allSkillsList) {

        allSkillsList = document.createElement("ul");
        allSkillsList.classList.add("skill-list");
        allSkillsList.style.display = "flex";
  
        skillLists.forEach(list => {
          list.querySelectorAll(".skill-item").forEach(item => {
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
        const selectedList = document.querySelector(`.skill-list[data-category="${category}"]`);
        if (selectedList) {
          selectedList.style.display = "flex";
        }
      }
    }
    
    skillButtons.forEach(button => {
      button.addEventListener("click", function () {
        const category = this.getAttribute("data-category");
        filterSkills(category);
      });
    });

    showAllSkills();
  });
  