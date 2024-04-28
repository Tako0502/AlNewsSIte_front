document.addEventListener("DOMContentLoaded", function () {
  let reactions = document.querySelectorAll('.reaction');
  reactions.forEach(e => {
    e.onclick = function () {
      let icon = e.querySelector("i");
      reactions.forEach(el => {
        let i = el.querySelector("i");
        i.classList.remove("fa-solid");
        i.classList.remove(el.getAttribute("id").toString());
      });
      icon.classList.toggle(e.getAttribute("id").toString());
      icon.classList.toggle("fa-solid");
    }
  });
});
document.addEventListener("DOMContentLoaded", async function () {
  const choices = new Choices(document.querySelector('#categoryId'), {
    placeholder: false,
    itemSelectText: '',
    searchEnabled: false

  });
});