document.addEventListener("DOMContentLoaded", () => {
  const shareButtons = document.querySelectorAll("[data-share]");

  shareButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      const shareData = {
        title: "Uday Classes Hardoi",
        text: "Uday Classes Hardoi - Vijay Sir | UP PET, UPPCS और One Day Exams की तैयारी",
        url: window.location.href
      };

      try {
        if (navigator.share) {
          await navigator.share(shareData);
        } else {
          await navigator.clipboard.writeText(window.location.href);
          alert("Website link copy हो गया है।");
        }
      } catch (error) {
        console.log(error);
      }
    });
  });

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("sw.js").catch(() => {});
    });
  }
});
