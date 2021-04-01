      var public_spreadsheet_url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQhRNo_U2JrX-xtEnM6Uyn5dncWdANlqSrM9Mc5fd4oN03Tv0J9uRVOZ7ydAaANWX8ZINO1YP9Col-2/pub?gid=0&single=true&output=csv"
      public_spreadsheet_url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQhRNo_U2JrX-xtEnM6Uyn5dncWdANlqSrM9Mc5fd4oN03Tv0J9uRVOZ7ydAaANWX8ZINO1YP9Col-2/pub?gid=0&single=true&output=csv"
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
  p.classList.add("card3"); 
  p.innerHTML = data[i]["What is a healthy habit you have developed during the course of the pandemic and how has it changed your well-being?"]
  document.getElementById("data-area").append(p);





}
console.log(data);
}
