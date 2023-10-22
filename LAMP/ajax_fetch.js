const url = "https://randomuser.me/api/"
const container = document.getElementById("image-container")
let output = document.getElementById("output")

ajax();

function ajax(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4 && xhr.status === 200){
            let data = JSON.parse(xhr.responseText);
            const imgURL = data.results[0].picture.large;
            container.innerHTML = `<img  class="profile" src=${imgURL} alt="rando user">`;
            output.innerHTML= "Meet " + data.results[0].name.first + " " + data.results[0].name.last;
            document.getElementById("first").value=data.results[0].name.first
            document.getElementById("last").value=data.results[0].name.last
            document.getElementById("age").value=data.results[0].dob.age
            document.getElementById("country").value=data.results[0].location.country
        } else if (xhr.readyState === 4){
            output.innerHTML = "AJAX: " + xhr.status;
        }
    
    };
    xhr.send();
}


function useFetch(){
    fetch(url)
    .then(response => response.json())
    .then(data => { output.innerHTML = "Fetch: " + data.results[0].name.first;})
}
