document.addEventListener("DOMContentLoaded", () => {
  console.log("Page Loaded");

  const contactBtn = document.querySelector("#contactSend");
  if (contactBtn) {
    contactBtn.addEventListener("click", () => {
      alert("메시지가 전송되었습니다. 감사합니다!");
    });
  }
});
