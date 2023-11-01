
/**
  * @param {String} url - address for the HTML to fetch
  * @return {String} the resulting HTML string fragment
  */
async function fetchHtmlAsText(url) {
  return await (await fetch(url)).text();
}

async function loadFile(file) {
  // menu = document.getElementsByClassName("li a");
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = await fetchHtmlAsText(file);
}
