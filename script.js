    var last;
    function loader(){
        let req = new XMLHttpRequest();
        req.onreadystatechange = () => {
        if (req.readyState == XMLHttpRequest.DONE) {
            last = req.responseText;
            this.show(JSON.parse(last).data);
            }
        };

        req.open("GET", "https://api.jsonbin.io/s/5cfc124958196b429f50ad8d", true);
        req.setRequestHeader("Content-type", "application/json");
        req.setRequestHeader("secret-key", "$2a$10$T4A0vojC9ffvrUo9t9B44euZmspAa3x57VvnkYNHoGrkb8SafuTru");
        req.send();
    }
    function apiCall(){
        console.log("Last in Call :",last);
        let req = new XMLHttpRequest();
        req.open("PUT", "https://api.jsonbin.io/s/5cfc124958196b429f50ad8d", true);
        req.setRequestHeader("Content-type", "application/json");
        req.setRequestHeader("secret-key","$2a$10$T4A0vojC9ffvrUo9t9B44euZmspAa3x57VvnkYNHoGrkb8SafuTru");
        var myObj=last;
        req.onreadystatechange = () => {
        if (req.readyState == XMLHttpRequest.DONE) {
            var resp = JSON.parse(req.responseText);
            console.log(resp);
            temp = resp.data;
            location.reload();
            }
        };
        var jsonObj = JSON.parse(myObj);
        console.log(jsonObj);
        if(document.getElementById('inputData').value !== "")
            jsonObj.data.push(document.getElementById('inputData').value);
        console.log(jsonObj);
        req.send(JSON.stringify(jsonObj));
    }
    function show(data){
        for(var i=0;i<data.length;i++){
            document.getElementById('show').innerHTML += "<p class='card cards'>"+data[i]+"</p>"
        }
    }