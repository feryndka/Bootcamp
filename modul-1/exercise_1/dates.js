//find different day
let date1 = new Date('2022-01-20');
let date2 = new Date('2022-01-22');

let milisecond = date2 - date1;
let differentDay = milisecond / (1000 * 60 * 60 * 24);
console.log("Perbedaan hari:", differentDay, "hari")

console.log("========================")

//convert days to year, month, and days
let year = 365;
let month = 30;
let days = 365; // change days here
let tahun = (days / year);
let bulan = (days % year) / month;
let hari = (days % year) % month;

console.log(tahun.toFixed(0), "year,", bulan.toFixed(0), "month,", hari.toFixed(0), "days")