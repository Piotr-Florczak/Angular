window.onload = () => {
  const element: HTMLElement | null = document.getElementById("div");
  const szerkosc: number = 10;
  const wyokosc: number = 10;

  if (element) {
    let tabela: string = `<table>`;
    tabela += `<tr>`;
    tabela += `<th>/</th>`;

    for (let j: number = 0; j < szerkosc; j++) {
      tabela += `<th>${j+1}</th>`;
    }

    tabela += `</tr>`;

    for (let i: number = 0; i < wyokosc; i++) {
      tabela += `<tr>`;
      tabela += `<th>${i + 1}</th>`;

      for (let j: number = 0; j < szerkosc; j++) {
        const wynik: number = (i + 1) * (j + 1);
        const szarosc: number = Math.min(Math.floor((wynik / 150) * 255), 255);
        tabela += `<td style="background-color: rgb(${szarosc}, ${szarosc}, ${szarosc})">${wynik}</td>`;
      }

      tabela += `</tr>`;
    }
    console.log(tabela);
    tabela += `</table>`;
    element.innerHTML = tabela;
  }
};
