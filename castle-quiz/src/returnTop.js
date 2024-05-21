//戻った時にスコアをゼロポイントにする.
const returnTop = () => {
  const result = window.confirm(
    "今までの点数がなくなりますが、本当に戻りますか？"
  );
  if (result) {
    window.location = "./top.html";
    count = 0;
  }
};
const backTop = () => {
  window.location = "./top.html";
};
