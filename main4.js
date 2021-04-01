      var public_spreadsheet_url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTUpAaZ8wa0X9qLyIiktU472ZAf9T7948fuNVgxuzVEZ5vRIvPlCPmfYxHtTRlu3-hdG-SS2Kimyvl6/pub?gid=0&single=true&output=csv"
      public_spreadsheet_url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTUpAaZ8wa0X9qLyIiktU472ZAf9T7948fuNVgxuzVEZ5vRIvPlCPmfYxHtTRlu3-hdG-SS2Kimyvl6/pub?gid=0&single=true&output=csv"
      function init() {
        Papa.parse(public_spreadsheet_url, {
          download: true,
          header: true,
          complete: showInfo
        })
      }

      window.addEventListener('DOMContentLoaded', init)

      function showInfo(results) {
        var data = results.data

// alert("Successfully processed " + data.length + "rows!")



for (var i = data.length - 1; i >= 0; i--) {
  let p = document.createElement("p"); 
  p.classList.add("card4"); 
  p.innerHTML = data[i]["What is a mindset change you have decided to make in your life in order to help shift your mentality around the pandemic from negative to positive?"]
  document.getElementById("data-area").append(p);





//   // if(data[i].What is a healthy habit you have developed during the course of the pandemic and how has it changed your well-being?.length > 0){
//   //           document.getElementById("data-area").append(p)
//   //         }
}
console.log(data);
}