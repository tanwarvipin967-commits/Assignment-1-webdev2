const domOutput = document.getElementById("domOutput");
const demoBox = document.getElementById("demoBox");
const keyPressed = document.getElementById("keyPressed");

const eventList = document.getElementById("eventList");

/* =========================
   DOM TEXT COMPARISON DEMO
========================= */

function showDOMComparison() {

    const htmlValue = demoBox.innerHTML;
    const textValue = demoBox.innerText;
    const contentValue = demoBox.textContent;

    domOutput.innerHTML = `
        <p><strong>innerHTML:</strong> ${htmlValue}</p>
        <p><strong>innerText:</strong> ${textValue}</p>
        <p><strong>textContent:</strong> ${contentValue}</p>
    `;
}

showDOMComparison();

/* =========================
   KEY PRESS DETECTOR
========================= */

document.addEventListener("keydown", (e) => {
    keyPressed.textContent = e.key;
});

/* =========================
   EVENT MANAGER FUNCTIONS
========================= */

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
        <div class="delete">×</div>
        <h3>${title}</h3>
        <p>📅 ${date}</p>
        <span class="tag">${category}</span>
        <p>${description}</p>
    `;

    div.querySelector(".delete").addEventListener("click", () => {
        div.remove();
    });

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
