const counter = document.getElementById('countNumber');

counter.onclick = function () {

    for (let i = 0; i <= 100; i++) {
        let div = document.createElement('div');
        let text = "";
        //console.log('i');
        text = i
        if (i % 15 == 0) {
            //console.log('i');
            div.innerHTML = "..."
        } else {
            div.innerHTML = text;
        }

        document.body.appendChild(div);
    }
}