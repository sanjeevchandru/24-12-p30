document.write("35.to get a random item from an array"+"<br>");
document.write("The original array [254, 45, 212, 365, 2543]"+"<br>")
function test35(arr){
    var x=arr[Math.floor(Math.random()*arr.length)];
    return x;
}
document.write(test35([254, 45, 212, 365, 2543])+"<br><br>");