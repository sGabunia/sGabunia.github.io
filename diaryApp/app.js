const button = document.querySelector(".btn");
const entries = document.querySelector(".entries");
const mainEntry = document.querySelector("#entry");
const noteButtons = document.querySelector(".note-buttons");

let count = 1;
mainEntry.setAttribute("required", "required");

button.addEventListener("click", (e) => {
  e.preventDefault();
  if (!mainEntry.value) {
    return;
  }
  console.log(mainEntry.value);
  const notesDiv = document.createElement("div");
  notesDiv.classList.add("single-note");
  notesDiv.textContent = mainEntry.value;
  notesDiv.style.display = "none";
  entries.append(notesDiv);

  mainEntry.value = "";

  const btn = document.createElement("button");
  btn.classList.add("display-btn");
  btn.textContent = count;
  noteButtons.append(btn);

  btn.addEventListener("click", () => {
    const allEntries = document.querySelectorAll(".single-note");
    allEntries.forEach((entry) => (entry.style.display = "none"));
    notesDiv.style.display = "block";
  });

  count++;
});
