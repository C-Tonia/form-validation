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
const formGroup = document.querySelectorAll(".b-input");
const selectEl = document.querySelector("select");
let genderValue;
let hobbyValue = " ";

iconToggle.addEventListener("click", function () {
  const pType =
    passwordEl.getAttribute("type") === "password" ? "text" : "password";
  const cType =
    confirmPasswordEl.getAttribute("type") === "password" ? "text" : "password";

  passwordEl.setAttribute("type", pType);
  confirmPasswordEl.setAttribute("type", cType);
  iconToggle.classList.toggle("bi-eye");
});
const populateOptionEl = () => {
  const values = ["Nigeria", "Ghana", "USA", "Canada", "Niger", "Biafra"];
  for (val of values) {
    console.log(val);
    const option = document.createElement("OPTION");
    option.setAttribute("value", val);
    const text = document.createTextNode(val);
    option.appendChild(text);
    selectEl.appendChild(option);
  }
  console.log(selectEl);
};

const getRadioValue = () => {
  const genderEl = document.querySelector(`input[name ='gender']:checked`);
  if (genderEl != null) {
    genderValue = genderEl.value;
  } else {
    alert("Choose a gender");
    return;
  }
};
const getCheckValue = () => {
  const hobbyEl = document.querySelectorAll(`input[type ='checkbox']`);
  console.log(hobbyEl);
  if (hobbyEl != null) {
    for (checkbox of hobbyEl) {
      console.log(checkbox);
      if (checkbox.checked) {
        hobbyValue += checkbox.value + ", ";
      }
    }
    console.log(hobbyValue);
  } else {
    alert("Choose a gender");
    return;
  }
};

const getSelectValue = () => {};
const onSubmit = function (e) {
  e.preventDefault();
  // input validation
  if (
    firstNameEl.value.trim() === "" ||
    lastNameEl.value.trim() === "" ||
    emailEl.value.trim() === "" ||
    passwordEl.value.trim() === ""
  ) {
    alert("The field should not be empty");
    return;
  }
  if (passwordEl.value.trim().length < 8) {
    passwordEl.style.borderColor = "red";
    alert("Password should grater than 7");
    return;
  } else {
    passwordEl.style.borderColor = "rebeccapurple";
  }
  if (passwordEl.value.trim() !== confirmPasswordEl.value.trim()) return;

  getRadioValue();
  getCheckValue();

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
  <div class="text-wrapper">
  <p>Country </p>
  <p>${selectEl.value}</p>
</div>
  <div class="text-wrapper">
  <p>Gender</p>
  <p>${genderValue}</p>
</div>
<div class="text-wrapper">
  <p>Hobbies</p>
  <p>${hobbyValue}</p>
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

populateOptionEl();
submitBtn.addEventListener("click", onSubmit);
