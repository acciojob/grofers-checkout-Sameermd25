const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const getPrices=document.querySelectorAll(".price")
	let sum=0;
	for(let item of getPrices){
		sum+=parseInt(item.innerHTML)
	}

	
	const table=document.getElementById("table")
	
    const row=document.createElement("tr");
	const data=document.createElement("td");
	data.colSpan="2";
	data.id = "ans"; 
	data.innerHTML=`<strong>Total Price: ${sum} Rs</strong>`;
	row.appendChild(data);
	table.appendChild(row);

	
};

getSumBtn.addEventListener("click", getSum);

