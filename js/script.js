const navDropdownOptions = document.querySelector(".option").children;
const navOptionDetails = document.querySelector(".option__details").children;

document.querySelectorAll(".option__name").forEach((optionName) => {
  const optionIndex = Array.from(navDropdownOptions).indexOf(optionName);

  optionName.addEventListener("mouseover", function () {
    Array.from(navDropdownOptions).forEach((option) => {
      if (option.classList.contains("container--shadow")) {
        option.classList.remove("container--shadow");
      }
    });

    navDropdownOptions[optionIndex].classList.add("container--shadow");
    navOptionDetails[optionIndex].classList.add("option--show");

    Array.from(navOptionDetails).forEach((optionDetail) => {
      if (Array.from(navOptionDetails).indexOf(optionDetail) !== optionIndex) {
        optionDetail.classList.remove("option--show");
      }
    });
  });
});
