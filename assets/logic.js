console.log("Hi fellow developer!")
console.log("Checking...");

var element = document.getElementById("email")
element.addEventListener("click", copy_email)

function copy_email()
{
    console.log("Copied!")
    navigator.clipboard.writeText("gsnikhil333@gmail.com")

    var alert_box = document.createElement("div")
    alert_box.innerHTML = '<div id="alert" class="alert alert-primary text-center" role="alert"> Email has been copied to your clipboard. [gsnikhil333@gmail.com] </div>'

    if (document.getElementById("alert") == null){
        document.getElementById("header").append(alert_box);
        setTimeout(() => {document.getElementById("alert").remove()}, 5000);    
    }    
}
