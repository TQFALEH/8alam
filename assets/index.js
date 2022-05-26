const txt = document.getElementById('title');
const prog = 'قلم';
const bodytxt = document.getElementById('t-body');
const txtbody = 'منصة تقدم خدمات  متجددة للطلاب ';
let idx = 1
let idxx = 1
setInterval(writeText, 80 );

function writeText() {
    txt.innerText = prog.slice(0, idx);
    idx++;
    if (idx > prog.length) {
        bodytxt.innerHTML = txtbody.slice(0, idxx);
        idxx++;
        if (ixx > txtbody) {
            idxx = 1;
        }
    }
}