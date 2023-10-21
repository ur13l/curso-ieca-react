document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("#input");
  const button = document.querySelector("#button");
  const list = document.querySelector("#list");

  button.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = input.value;

    li.addEventListener("click", () => {
      alert(li.textContent);
    });

    list.appendChild(li);
  });
});
