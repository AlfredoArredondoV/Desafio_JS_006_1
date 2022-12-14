const money = document.querySelector("#money");
const btnMoney = document.querySelector("#btnMoney");
const cashMoney = document.querySelector("#cashMoney");
const totalBar = document.querySelector("#totalBar");
const chartContainer = document.querySelector("#chartContainer");
var chart = null;
const dataPoints = [];

chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	theme: "light2",
	title: {
		text: "Variacion Mensual"
	},
	axisY: {
		title: "Valor",
		titleFontSize: 24
	},
	data: [{
		type: "column",
		yValueFormatString: "#,### Pesos",
		dataPoints: dataPoints
	}]
});

const getMoney = async (money) => {
    try {
        const url = `https://mindicador.cl/api/${money}`;
        const response = await fetch(url);
        if (response.status === 200) {
            const arrayMoney = await response.json();
            const total = Math.trunc(cashMoney.value * arrayMoney.serie[0].valor);
            totalBar.textContent = "El Total es: " + total;
            for (var i = 0; i < arrayMoney.serie.length; i++) {
                dataPoints.push({
                    x: new Date(arrayMoney.serie[i].fecha),
                    y: arrayMoney.serie[i].valor
                });
            }
            chart.render(); 
        } else {
            throw "err";
        }
    } catch (err){
        console.log(err);
    } 
}

btnMoney.addEventListener('click', () => {  
    getMoney(money.value);
})
