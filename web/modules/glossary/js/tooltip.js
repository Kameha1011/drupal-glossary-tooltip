const fetchTerms = async () => {
  try {
    let terms;
    await fetch("http://drupal-tooltip-nestle.ddev.site/get-glossary")
      .then((response) => response.json())
      .then((data) => {
        terms = data;
      });
    return terms;
  } catch (error) {
    console.log(error);
  }
};
const filterMatchedTerms = (compareArray, containerWords) => {
  let result = [];
  for (let i = 0; i < compareArray.length; i++) {
    const element = compareArray[i];
    const filteredTitle = containerWords.filter((word) => {
      return (
        word.toLowerCase().replace(".", "") === element.title.toLowerCase()
      );
    })[0];
    if (filteredTitle) result.push({ ...element, title: filteredTitle });
  }
  return result;
};
const placeTooltip = (termsArray, contentHtml) => {
  let result = contentHtml;
  for (let i = 0; i < termsArray.length; i++) {
    const term = termsArray[i];
    const regex = new RegExp(`\\b${term.title}\\b`);
    result = result.replace(
      regex,
      `<span class="tooltip" data-tooltip="${term.title}">
    <a href="/glossary-term/${term.id}" class="tooltip__link">${term.title}</a>
    </span>`
    );
  }
  return result;
};
const placeTooltipDescription = (termsArray) => {
  for (let i = 0; i < termsArray.length; i++) {
    const term = termsArray[i];
    const tooltip = document.querySelector(
      `.tooltip[data-tooltip="${term.title}"]`
    );
    const fragment = document.createDocumentFragment();
    const tooltipElement = document.createElement("div");
    tooltipElement.classList.add("tooltip__container");
    tooltipElement.innerHTML = `
      <div class="tooltip__body">
      ${
        term.description.length > 100
          ? term.description.substring(0, 100) + "... <span class='tooltip__read-more'>Click to read more!</span>"
          : term.description
      }
      </div>
    `;
    fragment.appendChild(tooltipElement);
    tooltip.appendChild(fragment);
  }
};
jQuery(document).ready(async function ($) {
  const content = document.querySelector(".text-content");
  const words = content.innerText.split(" ");
  let terms = await fetchTerms();
  const matchedTerms = filterMatchedTerms(terms, words);
  document.querySelector(".text-content").innerHTML = placeTooltip(
    matchedTerms,
    content.innerHTML
  );
  placeTooltipDescription(matchedTerms);
});
