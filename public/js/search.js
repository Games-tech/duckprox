const frame = document.querySelector("iframe");
const div = document.querySelector(".center-container");
frame.style.display = "none";

const input = document.querySelector("input");

input.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    div.style.display = "none";
    frame.style.display = "block";

    frame.src =
      __uv$config.prefix +
      __uv$config.encodeUrl(search(input.value));
  }
});

const params = new URLSearchParams(window.location.search);

console.log("Searching for " + params.get("q"));

if (params.get("q")) {
  div.style.display = "none";
  frame.style.display = "block";

  frame.src =
    __uv$config.prefix +
    __uv$config.encodeUrl(search(params.get("q")));
}

function search(input) {
  try {
    // Direct URL
    return new URL(input).toString();
  } catch (err) {}

  try {
    // URL without http://
    const url = new URL(`http://${input}`);

    if (url.hostname.includes(".")) {
      return url.toString();
    }
  } catch (err) {}

  // Search query
  return `https://duckduckgo.com/?q=${encodeURIComponent(input)}`;
}
