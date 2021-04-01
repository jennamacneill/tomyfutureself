      var public_spreadsheet_url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR4x2YvHAA6DSVPYsxDJUTGnnkNa38oi2f3lDRJP4iKKA9ogXa1rlLRqZjPsh9II_j56pEW-YyRyMaq/pub?gid=0&single=true&output=csv"
      public_spreadsheet_url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR4x2YvHAA6DSVPYsxDJUTGnnkNa38oi2f3lDRJP4iKKA9ogXa1rlLRqZjPsh9II_j56pEW-YyRyMaq/pub?gid=0&single=true&output=csv"
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
  p.classList.add("card2"); 
  p.innerHTML = data[i]["What is a hobby you have pursued that helps expand your mind and creativity?"]
  document.getElementById("data-area").append(p);





}
console.log(data);
}
