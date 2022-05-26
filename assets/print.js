


function display(el) {

    var restorpage = document.body.innerHTML;

    var printcontent = document.getElementById(el).innerHTML;
    document.body.innerHTML = printcontent;
    document.getElementById('prinText').className += 'text-black';

    window.print();
    document.body.innerHTML = restorpage;
}

