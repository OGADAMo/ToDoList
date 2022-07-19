// Create Close button
let liList = document.getElementsByTagName("LI");

for (let i = 0; i < liList.length; i++) {
    let span = document.createElement("SPAN");
    let close = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(close);
    liList[i].appendChild(span);
    
}

// Checked
//\u2713"
let ul = document.querySelector('ul');
ul.addEventListener("click", function(click){
    if(click.target.tagName === "LI"){
        click.target.classList.toggle('checked');
        click
    }
}, false);
let close = document.createTextNode("\u00D7");
span.className = "close";
span.appendChild(close);
liList[i].appendChild(span);




