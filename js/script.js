/**
 * This makes a request to get the
 *  actual logo component from the
 *  project's 'components' directory.
 */

function loadLogo() {
  fetch("./components/logo.html", { method: "GET" }).then((response) =>
    response.text().then(updateLogoElements)
  );
}

/** This updates classes called 'logo' with
 *  the actual logo component.
 */

function updateLogoElements(logoData) {
  const logoElements = document.querySelectorAll(".logo");
  const logoList = Array.from(logoElements).forEach(
    (logo) => (logo.innerHTML = logoData)
  );
}

loadLogo();

/**
 * Navigation Dropdown
 */
const navDropdownOptions = document.querySelector(".option").children;
const navOptionDetails = document.querySelector(".option__details").children;

function onNavDropdownOptionHover() {
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
        if (
          Array.from(navOptionDetails).indexOf(optionDetail) !== optionIndex
        ) {
          optionDetail.classList.remove("option--show");
        }
      });
    });
  });
}

onNavDropdownOptionHover();

/**
 * FAQ Dropdown
 */
const faqDropdowns = document.querySelectorAll(".faq__dropdown");
const faqAnswers = document.querySelectorAll(".faq__answer");
const faqButtons = document.querySelectorAll(".faq__button");

function onDropdownClicked() {
  Array.from(faqDropdowns).forEach((faqDropdown) =>
    faqDropdown.addEventListener("click", showFaqAnswer)
  );
}

function showFaqAnswer(event) {
  const faqAnswerList = Array.from(faqAnswers);
  const faqDropdownList = Array.from(faqDropdowns);
  const faqButtonList = Array.from(faqButtons);

  const faqDropdownIndex = faqDropdownList.indexOf(this);

  faqAnswerList[faqDropdownIndex].classList.toggle("faq--hide");
  faqButtonList[faqDropdownIndex].classList.toggle("faq--rotate");
}

onDropdownClicked();
