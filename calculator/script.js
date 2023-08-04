function text(){
    let ip=document.querySelector('input').value;
    if (ip.match(/[a-zA-Z]/g)) {
        window.alert('Do not enter text');
        document.querySelector('input').value="";
    }
}
let string = "";

let buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((btn) => {
    btn.addEventListener('click', function (e) {
        // console.log(e.target)
        if (e.target.innerHTML == '=') {
            if (document.querySelector('input').value == '') {
                window.alert('value is empty');
            } else {
                string = eval(string)

                document.querySelector('input').value = string;
            }

        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == '%') {
            string = eval(string / 100)
            document.querySelector('input').value = string;
        }
        else {
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string
        }
    })
})