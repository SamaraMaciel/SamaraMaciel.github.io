function selectFavoritePet(){
    let user_Name = document.getElementById("userName").value;

    if (user_Name != ""){
        if(document.getElementById("radio1").checked){
            // let user_Name = document.getElementById("userName").value;
            let radio_1 = document.getElementById("radio1_value").textContent;
            document.getElementById('display').innerHTML = "Hello, " + user_Name + ". " + "Your prefered pet is: " + radio_1;
        } else if(document.getElementById("radio2").checked){
            let radio_2 = document.getElementById("radio2_value").textContent;
            document.getElementById('display').innerHTML = "Hello, " + user_Name + ". " + "Your prefered pet is: " + radio_2;
        } else if(document.getElementById("radio3").checked){
            let radio_3 = document.getElementById("radio3_value").textContent;
            document.getElementById('display').innerHTML = "Hello, " + user_Name + ". " + "Your prefered pet is: " + radio_3;
        } else if(document.getElementById('radio4').checked){
            let radio_4 = document.getElementById("radio4_value").textContent;
            document.getElementById('display').innerHTML = "Hello, " + user_Name + ". " + "Your prefered pet is: " + radio_4;
        } else { 
            alert("Please, select your prefered pet!");   
        }
    } else {
        alert("Please, enter your name!"); 
    }
}

function clearForm() {
    document.getElementsByName("Choose").checked = false;
    document.getElementById("userName").value = "";

}