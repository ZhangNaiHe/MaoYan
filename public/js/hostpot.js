// 选座位
let liAs = document.querySelectorAll('.navbar li a');

for (let k = 0; k < liAs.length; k++) {
    liAs.onclick = function() {
        for (let i = 0; i < liAs.length; i++) {
            liAs[i].className = '';
        }
        this.className = 'active';
    }
}