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
  /* loops through the database data and replaces the title with the match word from the html
   so it can recognize words that are followed by a period */
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
  /*looks for every matched word in the html and replaces it with the tooltip and identifies it with a class and
  adds the data-tooltip attribute*/
  for (let i = 0; i < termsArray.length; i++) {
    const term = termsArray[i];
    result = result.replaceAll(
      term.title,
      `<span class="tooltip" data-tooltip="${term.title}">
    <a href="/glossary-term/${term.id}" class="tooltip__link">${term.title}</a>
    </span>`
    );
    console.log(result);
  }
  return result;
};
const placeTooltipDescription = (termsArray) => {
  /* this function places the tooltip description in the tooltip container */
  for (let i = 0; i < termsArray.length; i++) {
    const term = termsArray[i];
    const matchedTooltips = document.querySelectorAll(
      `.tooltip[data-tooltip="${term.title}"]`
    );
    for (let j = 0; j < matchedTooltips.length; j++) {
      const tooltip = matchedTooltips[j];
      const fragment = document.createDocumentFragment();
      const tooltipElement = document.createElement("div");
      tooltipElement.classList.add("tooltip__container");
      tooltipElement.innerHTML = `
        <div class="tooltip__body">
        ${
          term.description.length > 100
            ? term.description.substring(0, 100) +
              "... <span class='tooltip__read-more'>Click to read more!</span>"
            : term.description
        }
        </div>
      `;
      fragment.appendChild(tooltipElement);
      tooltip.appendChild(fragment);
    }
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
