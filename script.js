function view(num){
    document.getElementById('result').value+=num
}

function compute(){
   let a = document.getElementById('result').value;
   b = eval(a)
   document.getElementById('result').value=b;
}

function clears(){
    document.getElementById('result').value=""
}