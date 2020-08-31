document.addEventListener("DOMContentLoaded", async function(){ 
    var url_api = 'https://api.gohardstudy.gq/todos';
    var result_api = '';

  //  Use XMLHTTPRequest
    // var xhr = new XMLHttpRequest();
    // xhr.open('GET', url_api, false);
    // xhr.send();
    // if (xhr.status != 200) {
    //     console.log("Error "+ xhr.status);
    //   } else {
    //    result_api = JSON.parse(xhr.responseText); 
    //   }
    
    var response = await fetch(url_api);
    if (response.ok) { 
        result_api = await response.json();
      } else {
        alert("Error: " + response.status);
      }

    if (result_api != ''){
        var my_div = document.querySelector('#push_here');
        for (var id in result_api) {
           console.log(result_api[id]);
           my_div.innerHTML += "<input id="+result_api[id]["id"]+" value="+ result_api[id]["text"] +"><br>";
          }
    };
    
  });

