let conver = prompt(
  "Convertatsiya amalini tanlang \n '1' UZS >> USD \n '2' UZS >> EUR \n '3' USD >> UZS \n '4' EUR >> UZS \n '5' EUR >> USD \n '6' USD >> EUR"
);

let uzs, usd, eur;
let varb = Number(conver);
switch (varb) {
  case 1:
    uzs = prompt(
      " 1 USD = 10 654 UZS \n 1 EUR = 12 674 UZS \n Siz tanlagan amal UZS >> USD \n Summani kiriting (UZS)"
    );
    usd = uzs / 10654;
    usd = usd.toPrecision(4);
    convert = `${uzs} UZS = ${usd} USD`;
    alert(convert);
    break;

  case 2:
    uzs = prompt(
      " 1 EUR = 12 674 UZS \n 1 EUR = 12 674 UZS \n Siz tanlagan amal UZS >> EUR \n Summani kiriting (UZS)"
    );
    eur = uzs / 12674;
    eur = eur.toPrecision(4);
    convert = `${uzs} UZS = ${eur} EUR`;
    alert(convert);
    break;

  case 3:
    usd = prompt(
      " 1 USD = 10 654 UZS \n 1 EUR = 12 674 UZS \n Siz tanlagan amal USD >> UZS \n  Summani kiriting (UZS)"
    );
    // uzs = usd * 10654;
    uzs = uzs.toPrecision(4);
    convert = `${usd} USD = ${uzs} UZS`;
    alert(convert);
    break;

  case 4:
    eur = prompt(
      " 1 USD = 10 654 UZS \n 1 EUR = 12 674 UZS \n Siz tanlagan amal EUR >> UZS \n Summani kiriting (UZS)"
    );
    uzs = eur * 12674;
    // uzs = uzs.toPrecision(4);
    convert = `${eur} EUR = ${uzs} UZS`;
    alert(convert);
    break;

  case 5:
    eur = prompt(
      " 1 USD = 10 654 UZS \n 1 EUR = 12 674 UZS \n Siz tanlagan amal EUR >> USD \n Summani kiriting (UZS)"
    );
    usd = (eur * 12674) / 10654;
    // usd = usd.toPrecision(4);
    convert = `${eur} EUR = ${usd} USD`;
    alert(convert);
    break;

  case 6:
    usd = prompt(
      " 1 USD = 10 654 UZS \n 1 EUR = 12 674 UZS \n Siz tanlagan amal USD >> EUR \n Summani kiriting (UZS)"
    );
    eur = (usd * 10654) / 12674;
    eur = eur.toPrecision(4);
    convert = `${usd} USD = ${eur} EUR`;
    alert(convert);
    break;

  default:
    alert(" Bunday amal yo'q \n Qayta urinib ko'ring !!!");
}
