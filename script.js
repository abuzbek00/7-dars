const sonlar = [10, 20, 30, 40];

let yigindi = 0;
let kopaytma = 1;      
let kvadratlar = [];   
let kvadratlarYigindisi = 0;

for (let i = 0; i < sonlar.length; i++) {
  yigindi += sonlar[i];
  kopaytma *= sonlar[i];
  kvadratlar.push(sonlar[i] ** 2);
  kvadratlarYigindisi += sonlar[i] ** 2;
}

console.log("Yig'indi:", yigindi);                          
console.log("Ko'paytma:", kopaytma);                        
console.log("Kvadratlar:", kvadratlar);                     
console.log("Kvadratlar yig'indisi:", kvadratlarYigindisi); 