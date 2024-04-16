function bmi(){
    
    var h=document.getElementById("height").value;
    var unit=document.getElementById("unit").value;
    var w=document.getElementById("weight").value;
    if(h=="" || w==""){
        alert("Please fill all the fields");
        return;
    }
    if(unit=="Select Height Unit"){
        alert("Please fill the Height Unit Field");
        return;
    }
    if(unit=="CM"){
        var bmi= w/(h/100*h/100);
        var total=bmi.toFixed(2);
        document.getElementById("info").innerHTML="Your BMI is "+total;
        if(total<18.5){
            document.getElementById("value").innerHTML="Underweight";
        }else if(total>=18.5 && total<=24.9){
            document.getElementById("value").innerHTML="Normal Weight";
        }else if(total>=25 && total<=29.9){
            document.getElementById("value").innerHTML="Overweight";
        }else{
           document.getElementById("value").innerHTML="Obesity";
        }
    }else{
    var bmi= w/(h*h);
    var total=bmi.toFixed(2);
    document.getElementById("info").innerHTML="Your BMI is "+total;
    if(total<18.5){
        document.getElementById("value").innerHTML="Underweight";
    }else if(total>=18.5 && total<=24.9){
        document.getElementById("value").innerHTML="Normal Weight";
    }else if(total>=25 && total<=29.9){
        document.getElementById("value").innerHTML="Overweight";
    }else{
       document.getElementById("value").innerHTML="Obesity";
    }
}
}