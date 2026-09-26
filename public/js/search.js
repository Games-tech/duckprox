const div = document.querySelector(".center-container");
const input = document.querySelector("input");

input.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    const query = input.value.trim();

    if (!query) return;

    // If it's a URL, open it through DuckProxy
    try {
      const url = new URL(query);
      if (url.hostname.includes(".")) {
        window.location.href =
          __uv$config.prefix +
          __uv$config.encodeUrl(url.toString());
        return;
      }
    } catch (err) {}

    // Otherwise, open DuckDuckGo normally
    window.location.href =
      "https://duckduckgo.com/?q=" + encodeURIComponent(query);
  }
});
