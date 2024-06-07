function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

const value = getQueryParam("value");
document.getElementById("explanation").innerText = value;
