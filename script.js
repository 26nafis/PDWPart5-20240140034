// SELECT ALL
const checkAll = document.getElementById("checkAll");

checkAll.addEventListener("change", () => {
  document.querySelectorAll("tbody input[type='checkbox']").forEach(cb => {
    cb.checked = checkAll.checked;
  });
});

// DELETE
document.querySelectorAll(".delete").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const row = e.target.closest("tr");
    row.style.opacity = "0";
    row.style.transform = "translateX(50px)";
    row.style.transition = "0.3s";

    setTimeout(() => row.remove(), 300);
  });
});

// STATUS DROPDOWN
document.querySelectorAll(".status-container").forEach(container => {
  const badge = container.querySelector(".badge");
  const menu = container.querySelector(".status-menu");

  badge.addEventListener("click", () => {
    document.querySelectorAll(".status-menu").forEach(m => m.style.display = "none");
    menu.style.display = "block";
  });

  menu.querySelectorAll("div").forEach(item => {
    item.addEventListener("click", () => {
      const value = item.dataset.value;
      badge.textContent = item.textContent;

      badge.classList.remove("active", "waiting", "inactive");
      badge.classList.add(value);

      menu.style.display = "none";
    });
  });
});

// klik luar nutup menu
document.addEventListener("click", (e) => {
  if (!e.target.closest(".status-container")) {
    document.querySelectorAll(".status-menu").forEach(m => m.style.display = "none");
  }
});