// Local time in Addis Ababa
(function () {
  var el = document.querySelector("[data-clock]");
  if (!el) return;
  var fmt = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: "Africa/Addis_Ababa",
  });
  function tick() {
    el.textContent = fmt.format(new Date()).replace(" ", "").toLowerCase();
  }
  tick();
  setInterval(tick, 15000);
})();

// Click an image to see it full size
(function () {
  var buttons = document.querySelectorAll("figure button[data-full]");
  if (!buttons.length || typeof HTMLDialogElement === "undefined") return;

  var dialog = document.createElement("dialog");
  dialog.className = "lightbox";
  var img = document.createElement("img");
  dialog.appendChild(img);
  document.body.appendChild(dialog);

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var inner = btn.querySelector("img");
      img.src = btn.getAttribute("data-full");
      img.alt = inner ? inner.alt : "";
      dialog.showModal();
    });
  });

  dialog.addEventListener("click", function () {
    dialog.close();
  });
})();
