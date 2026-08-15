function openShowcase(slug) {
  fetch(`markdown/${slug}.md`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `ERROR. FAILED TO FETCH FILE FOR ${SLUG}. MUCUS EVERYWHERE!!!`,
        );
      }

      return response.text();
    })
    .then((markdownContent) => {
      const htmlContent = marked(markdownContent);
      const showcase = document.getElementById("showcase");

      showcase.classList.add("active");
      document.getElementById("showcaseTitle").innerText = slug;
      document.getElementById("showcaseContent").innerHTML = htmlContent;
    });
}

function closeShowcase() {
  document.querySelectorAll(".project-cards").forEach((card) => {
    card.style.opacity = "1";
    card.style.pointerEvents = "auto";
  });

  document.getElementById("showcase").classList.remove("active");
}
