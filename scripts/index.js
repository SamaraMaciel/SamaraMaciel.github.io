let MonaValue = 4;
let MaxwellValue = 7;
let TenleyValue = 6;
let RockyValue = 5;

function selectFavoritePet(){
    let user_Name = document.getElementById("userName").value;

    if (user_Name != ""){
        if(document.getElementById("radio1").checked){
            // let user_Name = document.getElementById("userName").value;
            let radio_1 = document.getElementById("radio1_value").textContent;
            MaxwellValue = MaxwellValue + 1;
            displayChart()
        } else if(document.getElementById("radio2").checked){
            let radio_2 = document.getElementById("radio2_value").textContent;
            MonaValue = MonaValue + 1;
            displayChart()
        } else if(document.getElementById("radio3").checked){
            let radio_3 = document.getElementById("radio3_value").textContent;
            RockyValue = RockyValue + 1;
            displayChart()
        } else if(document.getElementById('radio4').checked){
            let radio_4 = document.getElementById("radio4_value").textContent;
            TenleyValue = TenleyValue + 1;
            displayChart()
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

function displayChart(){
    $('#selectform').css('visibility', 'hidden');
    new Chart("myChart", {
        type: "bar",
        data: {
        labels: ["Mona","Tenley","Maxwell","Rocky"],
        datasets: [{
            backgroundColor: ['DarkMagenta','SaddleBrown','DarkRed','LightSlateGrey'],
            data: [MonaValue,TenleyValue,MaxwellValue,RockyValue]
        }]
        },
        options: {
        legend: {display: false},
        title: {
            display: true,
            text: "Favourite Pets"
        }
        }
    });
}
