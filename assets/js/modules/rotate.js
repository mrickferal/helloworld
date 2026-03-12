const rotate = {
  init: function () {
    console.log("Hello world, I'm rotate.js");

    // crearte an array from the elements
    rotate.wrapperSpans = Array.from(
      document.querySelectorAll(".wrapper-span")
    );

    rotate.dropSpansContent();
  },
  /**
   * Drops the content of the elements in `rotate.wrapperSpans`.
   * @return {void}
   */
  dropSpansContent: function () {
    console.log("rorate.dropSpansContent()");

    for (rotate.wrapperSpan of rotate.wrapperSpans) {
      // create an array from all the letters contains in each span
      rotate.letters = rotate.wrapperSpan.children[0].textContent.split("");
      // drop the content of each span
      rotate.wrapperSpan.innerHTML = "";
      // add the letters in the span with some CSS style
      rotate.fillSpans();
    }
  },
  /**
   * Get the index of each letter from the array `rotate.letters` and add the letters to the span with some CSS styling.
   * @return {void}
   */
  fillSpans: function () {
    console.log("rorate.fillSpans()");

    // initialaze an index
    let index = 0;

    for (rotate.letter of rotate.letters) {
      // get the index of each rotate.letter
      index = rotate.letters.indexOf(rotate.letter);
      // create a CSS style from the index and add the letter in the span 
      rotate.wrapperSpan.innerHTML += `<span style="transition-delay: ${
        0.07 * index
      }s">${rotate.letter}</span>`;
    }
  },
};
