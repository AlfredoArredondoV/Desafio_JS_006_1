
const money = document.querySelector("#money");
const btnMoney = document.querySelector("#btnMoney");
const cashMoney = document.querySelector("#cashMoney");
const totalBar = document.querySelector("#totalBar");

const getMoney = async (money) => {
    try {
        const url = `https://mindicador.cl/api/${money}`;
        const response = await fetch(url);
        const arrayMoney = await response.json();
        const total = arrayMoney.serie[0].valor * cashMoney.value;
        totalBar.textContent = "El Total es: " + total;
    } catch {
        console.log(error);
    } 
}

btnMoney.addEventListener('click', () => {
    getMoney(money.value);
})

// var chart = new CanvasJS.Chart("chartContainer", {
//     animationEnabled: true,
//     theme: "light2", // "light1", "light2", "dark1", "dark2"
//     title: {
//         text: "Usuarios Registrados en los meses Junio y Julio",
//     },
//     axisY: {
//         title: "Cantidad de Usuarios",
//     },
//     data: [
//         {
//         type: "column",
//         showInLegend: true,
//         legendMarkerColor: "grey",
//         dataPoints: [
//             { y: totalMayo, label: "Mayo" },
//             { y: totalJunio, label: "Junio" },
//             { y: totalJulio, label: "Julio" },
//         ],
//         },
//     ],
//     options: {
//         backgroundColor: ["rgba(21,129, 239, 1)"],
//         labels: {
//         font: {
//             family: "'Quicksand', sans-serif'",
//             size: 14,
//         },
//         },
//     },
// });
// chart.render();