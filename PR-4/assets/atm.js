const User = [
    {
        user: 'Dev',
        pin: '123',
        amount: '10000'
    },
    {
        user: 'Om',
        pin: '123',
        amount: '20000'
    },
    {
        user: 'Vikas',
        pin: '123',
        amount: '30000'
    },
    {
        user: 'Neel',
        pin: '123',
        amount: '40000'
    }
]
let x
function validate() {

    var USERNAME = document.getElementById('username').value
    var PIN = document.getElementById('PIN')
    for (let i = 0; i < User.length; i++) {
        if (PIN.value == User[i].pin && USERNAME == User[i].user) {
            document.getElementsByClassName('Error').innerHTML = ``
            document.getElementById('page-1').className = 'none'
            document.getElementById('page-2').className = 'block'
            document.getElementById('pg-2').innerHTML += ` ${User[i].user}`
            x = User[i]
        } else {
            err('Error', 'Invalid Pin OR Username')
        }

    }
}

function err(el, msg) {
    document.getElementById(el).innerHTML = msg
}

function purpose(value) {

    if (value == "Withdraw") {
        document.getElementById('page-2').className = 'none'
        document.getElementById('page-3').className = 'block'
    } else if (value == "Check Balance") {
        document.getElementById('page-2').className = 'none'
        document.getElementById('page-4').className = 'block'
        document.getElementById('balance').innerHTML = x.amount
    }
    else if (value == "Deposit") {
        document.getElementById('page-2').className = 'none'
        document.getElementById('page-5').className = 'block'
    }
}
function process(val) {

    let n = document.getElementById('WithdrawAmount').value

    if (val == "Withdraw") {
        if (n == 0) {
            if (n == "") {
                document.getElementsByClassName('Error').innerHTML = ``
                document.getElementsByClassName('Error').innerHTML = `Enter a amount.`
            }
        } else if (n > x.amount) {
            document.getElementsByClassName('Error').innerHTML = `Insufficient balance`
        } else {
            n - x.amount
        }
    } else if (val == "Deposit") {
        if (n == "" || n == 0) {
            document.getElementsByClassName('Error').innerHTML = `Enter a amount.`
        } else {
            n + x.amount
        }
    }
}




// ------------------------------------------