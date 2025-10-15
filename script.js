//your JS code here. If required.
let player_1, player_2;
let messDiv = document.querySelector(".message");
let turnX= true;

document.getElementById("submit").addEventListener("click", function() {
	player_1 = document.getElementById("player-1").value;
    player_2 = document.getElementById("player-2").value;
	if(player_1 && player_2) {
		document.querySelector(".input-section").style.display = 'none';
		document.querySelector(".board").style.display = 'block';
	    messDiv.innerText = `${player_1}, you're up`
	}
		});
	document.querySelector(".restart").addEventListener("click", function(){
		document.querySelector(".input-section").style.display = 'block';
		document.querySelector(".board").style.display = 'none';
		player_1 = document.getElementById("player-1").value = "";
		player_2 = document.getElementById("player-2").value = "";
		messDiv.innerText = "";
		document.querySelectorAll(".cell").forEach(item => {
			item.innerText = "";
		})
});

let boxes = document.querySelectorAll(".cell");
boxes.forEach(item => {
	item.addEventListener("click", () => {
		if(turnX){
			item.textContent = "X";
			messDiv.innerText = `${player_2}  you're up `
			
			item.disabled = true;
		} else {
			item.textContent = "O";
			messDiv.innerText = `${player_1}  you're up `
			turnX = true;
			}
	    
	});
});












