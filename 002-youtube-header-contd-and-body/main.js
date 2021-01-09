window.addEventListener("DOMContentLoaded", () => {
  const nextTopicButton = document.getElementById("next-topic");
  const prevTopicButton = document.getElementById("prev-topic");
  const topicsScrollContainer = document.getElementById(
    "topics-scroll-container"
  );

  nextTopicButton.addEventListener("click", () => {
    topicsScrollContainer.scrollTo({
      left: 1000,
    });
  });

  prevTopicButton.addEventListener("click", () => {
    topicsScrollContainer.scrollTo({
      left: 0,
    });
  });
});
