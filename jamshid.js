// 1-masala


// function musbatKvadratYigindi(sonlar) {
//     let natija = sonlar.map(son => {
//         let musbat = Math.abs(son);
//         return musbat % 2 === 0 ? musbat ** 2 : musbat;
//     });
//     let yigindi = natija.reduce((a, b) => a + b, 0);
//     return { natija, yigindi };
// }
// console.log(musbatKvadratYigindi([-3, 2, -4, 5, -8]));



// 2-masala


// function mosElementBormi(a, b) {
//     return a.some(son => b.includes(son));
// }
//     console.log(mosElementBormi([1, 2, 3], [4, 3])); 
//     console.log(mosElementBormi([1, 2, 3, 4], [0, 6])); 


//   3-masala


// function saralaNatija(...sozlar) {
//     return sozlar.map(soz => {
//         if (Array.isArray(soz)) {
//             return soz.slice().sort((a, b) => a - b);
//         } else if (typeof soz === "string") {
//             return Array(soz.length).fill(soz);
//         }
//         return soz;
//     });
// }

// console.log(saralaNatija([1, 10], [2, 3, 4], 'kitob'));


// 4-masala


// function ikkigaBol(son) {
//     let yarim = son / 2;
//     if (son % 2 === 0) return [yarim, yarim];
//     else return [Math.floor(yarim), Math.ceil(yarim)];
// }

// console.log(ikkigaBol(9)); 
// console.log(ikkigaBol(4)); 


// 5-masala

// function uzunlikBoyichaSarala(sozlar) {
//     return sozlar.slice().sort((a, b) => a.length - b.length);
// }

// console.log(uzunlikBoyichaSarala(['a', 'salom', 'hi', 'kitob'])); 


// 6-masala


// function ikkiBaravarJuftSaralash(sonlar) {
//     let natija = sonlar.map(son => son * 2);
//     let juftlar = natija.filter(son => son % 2 === 0).sort((a, b) => a - b);
//     return { natija, juftlar };
// }
// console.log(ikkiBaravarJuftSaralash([3, 4, 7])); 


// 7-masala


// function ikkiBaravarJuftKvadrat(sonlar) {
//     let natija = sonlar.map(son => son * 2);
//     let juftKvadrat = natija.filter(son => son % 2 === 0).map(son => son ** 2);
//     console.log(juftKvadrat);
//     return juftKvadrat;
// }

// ikkiBaravarJuftKvadrat([1, 2, 3, 4]);

// 8-masala


// function teskariMatritsa(a) {
//     return a.map(qator => qator.slice().reverse()).reverse();
// }

// console.log(teskariMatritsa([
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]));


// 9-masala


// function sonniSozga(a, b) {
//     const sozlar = [
//         'nol', 'bir', 'ikki', 'uch', 'to‘rt', 'besh',
//         'olti', 'yetti', 'sakkiz', 'to‘qqiz', 'o‘n'
//     ];
//     let natija = [];
//     if (a < b) {
//         for (let i = a; i <= b; i++) natija.push(sozlar[i]);
//     } else {
//         for (let i = a; i >= b; i--) natija.push(sozlar[i]);
//     }
//     return natija;
// }
// console.log(sonniSozga(1, 5));



// 10-masala


// function arraygaQoshNatija(a) {
//     let natija = [];
//     for (let i = 1; i <= a; i++) natija.push(i);
//     let bolingan = [];
//     for (let i = 0; i < natija.length; i += 3) {
//         bolingan.push(natija.slice(i, i + 3));
//     }
//     return bolingan;
// }

// console.log(arraygaQoshNatija(10));
