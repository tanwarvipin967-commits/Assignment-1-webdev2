const domOutput = document.getElementById("domOutput");

function showDOMAction(message) {
    domOutput.innerHTML = `
    <p>${message}</p>
  `;
}

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

    showDOMAction(`
    <strong>Event Added</strong><br>
     document.createElement() : Add a new event card  <br>
     innerHTML() : Event content has been inserted<br>
     appendChild() : Added to the event list
  `);

    document.getElementById("title").value = "";
    document.getElementById("date").value = "";
    document.getElementById("description").value = "";
}


function createEvent(title, date, category, description) {
    const div = document.createElement("div");
    div.className = "event";

    div.innerHTML = `
    <div class="delete">×</div>
    <h3>${title}</h3>
    <p>📅 ${date}</p>
    <span class="tag">${category}</span>
    <p>${description}</p>
  `;

    div.querySelector(".delete").addEventListener("click", () => {
        div.remove();
        showDOMAction(`
      <strong>Event Deleted</strong><br>
      remove() : Event card has been removed from the DOM
    `);
    });

    eventList.appendChild(div);
}


function clearEvents() {
    eventList.innerHTML = "";

    showDOMAction(`
    <strong>All Events Cleared</strong><br>
    innerHTML() : The entire DOM has been cleared
  `);
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

    showDOMAction(`
    <strong>Sample Events Added</strong><br>
     createElement() : Multiple elements have been created<br>
     appendChild() : Added to the list
  `);
}

