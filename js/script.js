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
