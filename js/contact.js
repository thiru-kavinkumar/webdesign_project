function alert() {
  let name = document.getElementById("fullname").value;
  let txt = name + ", thank you for your message."
  if (confirm(txt)) {
    window.location.href = "home.html"
  }
  }