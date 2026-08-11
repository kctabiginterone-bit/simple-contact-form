const form = document.getElementById("contact-form");
const confirmation = document.getElementById("confirmation");
const pageHeading = document.getElementById("page-heading");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  confirmation.textContent = "";
  confirmation.className = "confirmation";

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    confirmation.textContent = "Please complete all fields before submitting.";
    confirmation.classList.add("error");
    return;
  }

  confirmation.textContent = `Thank you, ${name}! Your message has been submitted successfully.`;
  confirmation.classList.add("success");
  pageHeading.style.color = "#0f766e";
  form.reset();
});
