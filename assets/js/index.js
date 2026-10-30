document.addEventListener("DOMContentLoaded", () => {
  console.log("Popover init");

  const popoverTriggerList = document.querySelectorAll(
    '[data-bs-toggle="popover"]',
  );

  console.log(popoverTriggerList);

  [...popoverTriggerList].forEach((el) => {
    new bootstrap.Popover(el);
  });
});
