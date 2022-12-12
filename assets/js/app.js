const money = document.querySelector("#money");
const btnMoney = document.querySelector("#btnMoney");
const cashMoney = document.querySelector("#cashMoney");
const totalBar = document.querySelector("#totalBar");
const chartContainer = document.querySelector("#chartContainer");
var chart = null;
var dataPoints = [];

chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	theme: "light2",
	title: {
		text: "Daily Sales Data"
	},
	axisY: {
		title: "Units",
		titleFontSize: 24
	},
	data: [{
		type: "column",
		yValueFormatString: "#,### Units",
		dataPoints: dataPoints
	}]
});

const getMoney = async (money) => {
    try {
        const url = `https://mindicador.cl/api/${money}`;
        const response = await fetch(url);
        const arrayMoney = await response.json();
        const total = arrayMoney.serie[0].valor * cashMoney.value;
        totalBar.textContent = "El Total es: " + total;
        console.log(arrayMoney.serie.length);
        for (var i = 0; i < arrayMoney.serie.length; i++) {
            dataPoints.push({
                x: new Date(arrayMoney.serie[i].fecha),
                y: arrayMoney.serie[i].valor
            });
        }
        chart.render(); 
    } catch {
        console.log(error);
    } 
}

btnMoney.addEventListener('click', () => {
    getMoney(money.value);
})
