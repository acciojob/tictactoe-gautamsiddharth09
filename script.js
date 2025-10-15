//your JS code here. If required.
let player1, player2;
let messDiv = document.querySelector(".message");
let turnX= true;


document.getElementById("submit").addEventListener("click", function() {
	player1 = document.getElementById("player1").value;
    player2 = document.getElementById("player2").value;
	
	if(player1 && player2) {
		document.querySelector(".input-section").style.display = 'none';
		document.querySelector(".board").style.display = 'block';
	    messDiv.innerText = `${player1}, you're up`
	}

		});

  document.querySelector(".exit").addEventListener("click", function() {
  document.querySelector(".input-section").style.display = 'block';
  document.querySelector(".board").style.display = 'none';
  messDiv.innerText = "";
  document.querySelectorAll(".cell").forEach(item => {
			item.innerText = "";
			item.disabled = false;
			
  });
	  turnX = true;
	   messDiv.innerText = `${player1}, you're up`;
  });



	document.querySelector(".reset").addEventListener("click", function(){
		document.querySelectorAll(".cell").forEach(item => {
			item.innerText = "";
			item.disabled = false;
			
		});
		turnX = true;
	    messDiv.innerText = `${player1}, you're up`;
		
		});




let boxes = document.querySelectorAll(".cell");
boxes.forEach(item => {
	item.addEventListener("click", () => {
		
		if(turnX){
			item.textContent = "x";
			messDiv.innerText = `${player2}  you're up `
			
		
		} else {
			item.textContent = "o";
			messDiv.innerText = `${player1}  you're up `
			
			}
		
	    turnX = !turnX;
		checkWinner();
		
		
	});

});



let winPattern = [
	[0,1,2],
	[3,4,5],
	[6,7,8],
	[0,3,6],
	[1,4,7],
	[2,5,8],
	[0,4,8],
	[2,4,6],
];

let checkWinner = () => {
	for(let pattern of winPattern) {
		let pos1Val = boxes[pattern[0]].innerText;
		let pos2Val = boxes[pattern[1]].innerText;
		let pos3Val = boxes[pattern[2]].innerText;
		if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
			if(pos1Val === pos2Val && pos2Val === pos3Val) {
				 const winner = pos1Val === "x" ? player1 : player2;
				document.querySelector(".message").innerText = `${winner}, congratulations you won!`
			    boxes.forEach((box) => (box.disabled = true));
      return;
			}
		}
	}
	
}












