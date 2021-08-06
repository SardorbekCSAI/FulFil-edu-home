// let as = prompt(" Assalomu alaykum \n 'Safari' ga xush kelibsiz \n Bilet borish-kelish >> 500 USD \n Mexmonxona >> 250 USD \n Qo'shimcha to'lovlar 120 EUR \n Ma'lumot uchun \n 1 USD = 9433.34 \n 1 EUR = 10354.03 \n Xisobingizdagi mablag'ni kiriting >> ");

// let card,select;

// if( card >= as ){
//     select = prompt(" Sizning pulingiz yetarli \n Harajatlarni hisoblash uchun \n Pul birligini tanlang ");
// }
// else{
//     alert("Sizning pulingiz yetarli emas !!!");
// }

let value, value1 = prompt("World travel ga Xush kelibsiz !!! \nSayohat qilishni hohlaysizmi ?\n'Yes' / 'No'");
let sumType, name, monID;

let usd = 750 + 120 * 10354.03 / 9433.34;
    usd = usd.toFixed(2);
let eur = 750 * 9433.34 / 10354.03 + 120;
    eur = eur.toFixed(2);
let uzs = 750 * 9433.34 + 120 * 10354.03;
    uzs = uzs.toFixed(2);


if( value1 === "Yes" || value1 === "yes" || value1 === "YES" ){
    name = prompt("Ismingizni kiriting");
    monID = prompt("Hisob raqamingizni kiriting");
    alert("Ma'lumot uchun Hisobingizda \n 100.000.000 UZS (10.600 USD / 9.658 EUR) \n 1 USD = 9433.34 UZS \n 1 EUR = 10354.03 UZS \n Sizda yetarli mablag' mavjud")
    // Ustoz serverga ulanib kartadagi pul miqdorini bilishni o'rgansak o'shanda mukammalroq bo'lsa kk.
    sumType = prompt("Yechib olinadigan Qiymat birligini tanlang \n'USD' / 'EUR' / 'UZS'");
       
    switch(sumType){
        case "USD":
        case "Usd":
        case "usd": value = prompt(`Sizdan yechib olinadigan qiymat  >> ${usd} (USD) \nTo'lashga rozimisiz ? 'Yes' / 'No'` ); 
         if( value === "Yes" || value === "yes" || value === "YES" ){
                alert(`Oq Yo'l ${name} !!!`)
           }
            else{
                 alert("Xizmatlarimizdan foydalanganingiz uchun tashakkur !!! ");
            }
            break;

        case "EUR":
        case "Eur":
        case "eur": value = prompt(`Sizdan yechib olinadigan qiymat  >> ${eur} (EUR) \nTo'lashga rozimisiz ? 'Yes' / 'No'` ); 
         if( value === "Yes" || value === "yes" || value === "YES" ){
                alert(`Oq Yo'l ${name} !!!`)
            }
            else{
                alert("Xizmatlarimizdan foydalanganingiz uchun tashakkur !!! ");
            }
            break;

        case "UZS":
        case "Uzs":
        case "uzs": value = prompt(`Sizdan yechib olinadigan qiymat  >> ${uzs} (UZS) \nTo'lashga rozimisiz ? 'Yes' / 'No'` ); 
         if( value === "Yes" || value === "yes" || value === "YES" ){
                alert(`Oq Yo'l ${name} !!!`)
            }
            else{
                alert("Xizmatlarimizdan foydalanganingiz uchun tashakkur !!! ");
            }
            break;

    }



}
else if(value1 === ""){
    alert("Qaytadan urinib ko'ring !!! ");
}
else{
    alert("Xizmatlarimizdan foydalanganingiz uchun tashakkur !!! ");
}


