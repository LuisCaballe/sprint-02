(() => {
  "use strict";

  const form = document.querySelector(".needs-validation");

  form.addEventListener(
    "submit",
    (event) => {
      event.preventDefault();

      if (!form.checkValidity()) {
        event.stopPropagation();
      }

      form.classList.add("was-validated");
    },
    false
  );
})();
