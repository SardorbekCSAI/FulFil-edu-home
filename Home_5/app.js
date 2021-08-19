let value = confirm(
  "Assalomu alaykum \nSon topish o'yinini o'ynashni hohlaysizmi ?"
);
console.log(value);

if (value === false) window.location.href = "https://fulfiledu.uz/";

let number = Math.round(Math.random() * 20);

let input = prompt("O'ylagan soningiz");
let bank = 1;

while (1) {
  if (input < number) {
    alert("kichik son kiritdingiz !");
    input = prompt("Qaytadan urinib ko'ring");
    bank++;
  } else if (input > number) {
    alert("katta son kiritdingiz !");
    input = prompt("Qaytadan urinib ko'ring");
    bank++;
  } else break;
}

alert(
  `Tabriklaymiz Siz Biz o'ylagan sonni ${bank} ta urunishda topdingiz !\n biz o'ylagan son >> ${number}`
);
