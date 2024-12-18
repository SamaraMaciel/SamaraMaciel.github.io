function userName() {
    let inputfield_fname = document.getElementById("FName");
    let name = inputfield_fname.value;
    let inputfield_domain = document.getElementById("domain");
    let domain = inputfield_domain.value;
    let inputfield_mail = document.getElementById("email");
    let email = inputfield_mail.value;
    if ((name != "") && (email != "") && ((domain.includes(".com"))== true)) {
        alert(name + ", thank you for submiting the form!");
    }  else if ((email!= "") && (domain.includes(".com")) == false) {
        alert("Please, provide a valid email domain!");
    }  else {
        alert("Please, complete the form before submiting!");
    }
}

// function collapse() {
//     var coll = document.getElementsByClassName("collapsible");
//     var i;

//     for (i = 0; i < coll.length; i++) {
//     coll[i].addEventListener("click", function() {
//         this.classList.toggle("active");
//         var content = this.nextElementSibling;
//         if (content.style.display === "block") {
//         content.style.display = "none";
//         } else {
//         content.style.display = "block";
//         }
//     });
//     }
// }