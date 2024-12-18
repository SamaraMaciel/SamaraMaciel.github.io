let MonaValue = 4;
let MaxwellValue = 7;
let TenleyValue = 6;
let RockyValue = 5;

function selectFavoritePet(){
    let user_Name = document.getElementById("userName").value;

    if (user_Name != ""){
        if(document.getElementById("radio1").checked){
            MaxwellValue = MaxwellValue + 1;
            displayChart()
        } else if(document.getElementById("radio2").checked){
            MonaValue = MonaValue + 1;
            displayChart()
        } else if(document.getElementById("radio3").checked){
            RockyValue = RockyValue + 1;
            displayChart()
        } else if(document.getElementById('radio4').checked){
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
    let user_Name = document.getElementById("userName").value;
    $('#selectform').css('display', 'none');
    new Chart("myChart", {
        type: "bar",
        data: {
        labels: ["Mona","Tenley","Maxwell","Rocky"],
        datasets: [{
            backgroundColor: ['DarkMagenta','SaddleBrown','DarkRed','LightSlateGrey'],
            data: [MonaValue,TenleyValue,MaxwellValue,RockyValue]}]
        },
        options: {
        legend: {display: false},
        title: {
            display: true,
            text: "Hello " + user_Name + "! Favourite Pets's poll:"
        },
        scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true, }}]}
        }
        })
    };
