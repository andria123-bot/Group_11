let counter = 0;
document.getElementById("increaseBtn").onclick = function(){
  counter++;
  document.getElementById("counterText").textContent = counter;
}
