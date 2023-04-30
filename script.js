let result =document.getElementById("inputText");

let calculate = (number) =>{
    result.value +=number;

}
let Result=()=>{
    try {
        result.value=eval(result.value);
    } catch (error) {
        alert("Enter a valid input")
    }
}

function CLR(){
    result.value=" ";
}

function DEL(){
    result.value=result.value.slice(0,-1);
}