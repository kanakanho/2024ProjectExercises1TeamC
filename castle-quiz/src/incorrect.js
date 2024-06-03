function getQueryParam(value) {
  // 現在のURLを取得
  const urlParams = new URLSearchParams(window.location.search);
  // 'param' パラメータのすべての値を取得
  return urlParams.getAll("value");
}
const paramValues = getQueryParam("value");
// console.log(`ans : ${paramValues[1]}`);
// console.log(`value : ${paramValues[0]}`);
document.getElementById("ans").innerText = `Ans: ${paramValues[1]}`;
document.getElementById("explanation").innerText = paramValues[0];
