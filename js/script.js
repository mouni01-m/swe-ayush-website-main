document.getElementById("appointmentForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you! Our team will contact you shortly.");
});

function openTab(tabId) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

  document.getElementById(tabId).classList.add('active');
  event.target.classList.add('active');
}
function openCallbackModal() {
    document.getElementById("callbackModal").style.display = "flex";
}

function closeCallbackModal() {
    document.getElementById("callbackModal").style.display = "none";
}

function openCallbackModal() {
  document.getElementById("callbackModal").style.display = "flex";
}

function closeCallbackModal() {
  document.getElementById("callbackModal").style.display = "none";
}

function submitCallback() {

  const branch = document.getElementById("cbBranch").value;
  const branchName = document.getElementById("cbBranch").options[
      document.getElementById("cbBranch").selectedIndex
  ].text;

  const name = document.getElementById("cbName").value;
  const phone = document.getElementById("cbPhone").value;

  if(branch === "" || name === "" || phone === "") {
    alert("Please fill all details");
    return;
  }
const container = document.querySelector(".water-drops");

setInterval(() => {
  if (!container) return;

  const drop = document.createElement("span");
  drop.className = "drop";

  drop.style.left = Math.random() * 100 + "%";
  drop.style.top = Math.random() * 100 + "%";

  container.appendChild(drop);

  setTimeout(() => drop.remove(), 1600);
}, 900);
  const message =
    "New Appointment Request%0A" +
    "Branch: " + branchName + "%0A" +
    "Name: " + name + "%0A" +
    "Mobile: " + phone;

  const whatsappURL =
    "https://wa.me/91" + branch + "?text=" + message;

  window.open(whatsappURL, "_blank");

  closeCallbackModal();
}
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".water-drops");
  if (!container) return;

  setInterval(() => {
    const drop = document.createElement("span");
    drop.className = "drop";
    drop.style.left = Math.random() * 100 + "%";
    drop.style.top = Math.random() * 100 + "%";
    container.appendChild(drop);
    setTimeout(() => drop.remove(), 1600);
  }, 900);
});
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();