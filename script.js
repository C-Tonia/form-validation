const firstNameEl = document.getElementById("first-name");
const lastNameEl = document.getElementById("last-name");
const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");
const confirmPasswordEl = document.getElementById("confirm-password");
const submitBtn = document.querySelector(".submit");
const content = document.querySelector(".content-wrapper");
const formSection = document.querySelector(".form-section");
const displaySection = document.querySelector(".display-section");
const iconToggle = document.querySelector(".bi");

iconToggle.addEventListener("click", function () {
  const pType =
    passwordEl.getAttribute("type") === "password" ? "text" : "password";
  const cType =
    confirmPasswordEl.getAttribute("type") === "password" ? "text" : "password";

  passwordEl.setAttribute("type", pType);
  confirmPasswordEl.setAttribute("type", cType);
  iconToggle.classList.toggle("bi-eye");
});
const submit = function (e) {
  e.preventDefault();
  // input validation
  if (typeof firstNameEl.value.trim() === Number) return;
  if (
    firstNameEl.value.trim() === "" ||
    lastNameEl.value.trim() === "" ||
    emailEl.value.trim() === "" ||
    passwordEl.value.trim() === ""
  )
    return;
  if (passwordEl.value.trim().length != 8) {
    passwordEl.style.borderColor = "red";

    return;
  } else {
    passwordEl.style.borderColor = "rebeccapurple";
  }
  if (passwordEl.value.trim() !== confirmPasswordEl.value.trim()) return;

  // display the values
  const html = `<div class="wrapper">
  <div class="text-wrapper">
    <p>Name</p>
    <p>${firstNameEl.value} ${lastNameEl.value}</p>
  </div>
  <div class="text-wrapper">
    <p>Email</p>
    <p>${emailEl.value}</p>
  </div>
  <div class="text-wrapper">
    <p>Password</p>
    <p>${passwordEl.value}</p>
  </div>
</div>`;

  content.innerHTML += html;
  formSection.style.opacity = 0;
  formSection.style.display = "none";
  formSection.style.zIndex = 0;

  displaySection.style.opacity = 1;
  displaySection.style.zIndex = 4;
};

confirmPasswordEl.addEventListener("input", function (e) {
  if (passwordEl.value !== confirmPasswordEl.value) {
    passwordEl.style.borderColor = "red";
    confirmPasswordEl.style.borderColor = "red";
  } else {
    passwordEl.style.borderColor = "rebeccapurple";
    confirmPasswordEl.style.borderColor = "rebeccapurple";
  }
});
submitBtn.addEventListener("click", submit);
