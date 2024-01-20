"use strict";
window.onload = () => {
    const element = document.getElementById("div");
    const szerkosc = 10;
    const wyokosc = 10;
    if (element) {
        let tabela = `<table>`;
        tabela += `<tr>`;
        tabela += `<th>/</th>`;
        for (let j = 0; j < szerkosc; j++) {
            tabela += `<th>${j + 1}</th>`;
        }
        tabela += `</tr>`;
        for (let i = 0; i < wyokosc; i++) {
            tabela += `<tr>`;
            tabela += `<th>${i + 1}</th>`;
            for (let j = 0; j < szerkosc; j++) {
                const wynik = (i + 1) * (j + 1);
                const szarosc = Math.min(Math.floor((wynik / 150) * 255), 255);
                tabela += `<td style="background-color: rgb(${szarosc}, ${szarosc}, ${szarosc})">${wynik}</td>`;
            }
            tabela += `</tr>`;
        }
        console.log(tabela);
        tabela += `</table>`;
        element.innerHTML = tabela;
    }
};
