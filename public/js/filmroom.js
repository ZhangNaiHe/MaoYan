// let show = function () {
    var btn = document.querySelectorAll('.tags>li');
    // console.log(btn);
    for (var i = 0; i < btn.length; i++) {
        btn[i].onclick = function () {
            // console.log(1);
            for (var j = 0; j < btn.length; j++) {
                btn[j].removeAttribute('class');
            }
            this.className = 'active';
        }
    }
// }

// show();