const addQestions = document.querySelector('[data-js=addQuestion]');
const addAnswers = document.querySelector('[data-js=addAnswer]');
const addHtmlTags = document.querySelector('[data-js=addTagHtml]');
const addCssTags = document.querySelector('[data-js=addTagCss]');
const addJavaTags = document.querySelector('[data-js=addTagJava]');

const elements = {addQuestions, addAnswers, addHtmlTags, addCssTags, addJavaTags};

const questions = [
    {
      id: 1,
      isBookmarked: false,
      question: "How often can I use <aside>?",
      answer: "As often as you like.",
      tags: ["html", "css", "javascript"],
    },
  ];

  questions.forEach((question) => {
    const card = document.createElement("main");
    card.classList.add("card");
    card.style.backgroundColor = "hotpink";
    document.body.append(card);
  });