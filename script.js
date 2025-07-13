document.addEventListener("DOMContentLoaded", function () {
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", function () {
      const answer = this.nextElementSibling;
      const icon = this.querySelector(".icon");

      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        answer.style.padding = "0 0";
        icon.style.transform = "rotate(0deg)";
      } else {
        document.querySelectorAll(".faq-answer").forEach((el) => {
          el.style.maxHeight = null;
          el.style.padding = "0 0";
        });

        document.querySelectorAll(".faq-question .icon").forEach((ic) => {
          ic.style.transform = "rotate(0deg)";
        });

        answer.style.maxHeight = answer.scrollHeight + "px";
        answer.style.padding = "0 0 15px";
        icon.style.transform = "rotate(90deg)";
      }
    });
  });
});
