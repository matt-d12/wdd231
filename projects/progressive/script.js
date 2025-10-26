// script.js

/**
 * validateEmail - returns true if email text looks like a normal email.
 * Uses a simple regex to check format: something@something.something
 */
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

/**
 * submitForm - attached to the form submit event.
 * event is the submit event for the form.
 */
function submitForm(event) {
  // event.currentTarget is the form element
  const form = event.currentTarget;
  const nameValue = (form.name.value || "").trim();
  const emailValue = (form.email.value || "").trim();

  let error = "";

  if (nameValue === "") {
    error += "Name is required.\n";
  }

  if (emailValue === "") {
    error += "Email is required.\n";
  } else if (!validateEmail(emailValue)) {
    error += "Please enter a valid email address (e.g. user@example.com).\n";
  }

  // If an error exists, prevent the form from submitting and show the message
  const errorEl = document.getElementById("form-error");
  if (error) {
    event.preventDefault();
    errorEl.textContent = error;
    // optionally set focus for screen reader and keyboard users
    errorEl.focus?.();
  } else {
    // No error: clear any previous error and allow normal submission.
    errorEl.textContent = "";
    // If you're testing locally and don't want the page to refresh, uncomment:
    // event.preventDefault();
    // alert("Form would submit here (no validation errors).");
  }
}

// Attach the submit handler once the DOM has loaded
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", submitForm);
  }
});
