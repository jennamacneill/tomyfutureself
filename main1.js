      var public_spreadsheet_url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRi2QmD2LcexK9ugcK14sjDlLqPFGd_c35rgFcQZSLl0tyMXxMZVv-3_3ZRm4W4TpFwgOrBrnw7flkd/pub?gid=0&single=true&output=csv"
      public_spreadsheet_url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRi2QmD2LcexK9ugcK14sjDlLqPFGd_c35rgFcQZSLl0tyMXxMZVv-3_3ZRm4W4TpFwgOrBrnw7flkd/pub?gid=0&single=true&output=csv"
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
  p.classList.add("card1"); 
  p.innerHTML = data[i]["What is something you look forward to each day during a state of quarantine and unprecedented times? "]
  document.getElementById("data-area").append(p);





//   // if(data[i].What is a healthy habit you have developed during the course of the pandemic and how has it changed your well-being?.length > 0){
//   //           document.getElementById("data-area").append(p)
//   //         }
}
console.log(data);
}


// p.innerHTML = data[i].Name + "," +data[i].Text

      //   for (var i = data.length - 1; i >= 0; i--) {
      //     let p = document.createElement("p");
      //     p.classList.add("card");
      //     p.innerHTML = data[i].What is a healthy habit you have developed during the course of the pandemic and how has it changed your well-being?
      //     // let p2 = document.createElement("p");
      //     // p2.classList.add("card");
      //     // p2.innerHTML = data[i].Q2
      //     // let p3 = document.createElement("p");
      //     // p3.classList.add("card");
      //     // p3.innerHTML = data[i].Q3
      //     if(data[i].Q1.length > 0){
      //       document.getElementById("data-area").append(p)
      //     }
      //     // if(data[i].Q2.length > 0){
      //     //   document.getElementById("data-area").append(p2)
      //     // }
      //     // if(data[i].Q3.length > 0){
      //     //   document.getElementById("data-area").append(p3)
      //     // }
        
      //   }

      //   console.log(data);
      // }

