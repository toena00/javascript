// function printName() {
//     document.write("John");
//     document.write("br");
//     setTimeout(function() { document.write ("Amy") }, 3000)
//     document.write("Bob");
// }

// printName ();


var colors = ["pink","red","orange","yellow"];

function changebg() {
    document.querySelector("body").style.background=
    colors [Math.floor(Math.random()*colors.length)]
}

var names = ["diar","orges","toena","desea"];

function changename() {
    document.querySelector("p").innerHTML=
    names [Math.floor(Math.random()*names.length)]
}


setInterval(changename,1000);
    



setInterval(changebg,1000);
    