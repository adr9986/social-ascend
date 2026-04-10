const forms = document.querySelectorAll("[data-capture-form]");

forms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = new FormData(form).get("email");
    const message = form.parentElement.querySelector("[data-form-message]");

    if (!email || !message) return;

    message.textContent = "You're on the list. Early access details coming soon.";
    form.reset();
  });
});

document.querySelectorAll(".step-item").forEach((step) => {
  const number = step.querySelector("span")?.textContent;
  if (number) step.dataset.step = number;
});
