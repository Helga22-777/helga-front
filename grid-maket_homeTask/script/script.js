document.addEventListener("DOMContentLoaded", function () {
  const backToTopButton = document.getElementById("back-to-top");
  const form = document.getElementById("contact-form");
  console.log(form);

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  });

  backToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const firstName = document.getElementById("item1").value;
    const lastName = document.getElementById("item2").value;
    const email = document.getElementById("item3").value;
    const message = document.getElementById("item4").value;

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        message,
      }),
    }).then((response) => {
      if (response.ok) {
        alert("Form submitted successfully!");
        form.reset();
      } else {
        alert("Failed to submit the form. Please try again.");
      }
    });
  });
});
