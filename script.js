const eventList = document.getElementById("eventList");

function addEvent() {
  const title = document.getElementById("title").value;
  const date = document.getElementById("date").value;
  const category = document.getElementById("category").value;
  const description = document.getElementById("description").value;

  if (!title || !date) {
    alert("Title and Date required");
    return;
  }

  createEvent(title, date, category, description);

  document.getElementById("title").value = "";
  document.getElementById("date").value = "";
  document.getElementById("description").value = "";
}

function createEvent(title, date, category, description) {
  const div = document.createElement("div");
  div.className = "event";

  div.innerHTML = `
    <div class="delete" onclick="this.parentElement.remove()">×</div>
    <h3>${title}</h3>
    <p>📅 ${date}</p>
    <span class="tag">${category}</span>
    <p>${description}</p>
  `;

  eventList.appendChild(div);
}

function clearEvents() {
  eventList.innerHTML = "";
}

function addSampleEvents() {
  clearEvents();

  createEvent(
    "Emifest",
    "2026-01-14",
    "Social",
    "Lorem ipsum dolor sit amet"
  );

  createEvent(
    "Tech Conference",
    "2026-02-10",
    "Conference",
    "JavaScript & Web Dev"
  );
}
