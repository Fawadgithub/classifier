var classifier = prompt("classifier your age");


if(classifier >=0 && classifier <=12){
alert("You are classified as an " + "\n"
   + "child");
}
else if(classifier >=13 && classifier <=19){
alert("You are classified as an " + "\n"
    + "Teenager");
}
else if(classifier >=20 && classifier <=45){
    alert("You are classified as an " + "\n"
        + "Adult");
    }
    else if(classifier >=46 && classifier <=65){
        alert("You are classified as an " + "\n"
             + "senior");
         }
else{
    alert("You are not classified as an " + "\n"
       + "age");
}

