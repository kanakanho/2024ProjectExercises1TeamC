//戻った時にスコアをゼロポイントにする.
const returnTop = () => {
  const result = window.confirm(
    "今までの点数がなくなりますが、本当に戻りますか？"
  );
  if (result) {
    localStorage.removeItem("Index");
    localStorage.removeItem("count");
    window.location = "./start.html";
  }
};
const backTop = () => {
  localStorage.removeItem("Index");
  localStorage.removeItem("count");
  window.location = "./start.html";
};
