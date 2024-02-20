const EMdata = [
    {
        name: 'Dev',
        EId: 123,
        DPM: 'Marketing',
        DSIG: 'Digital Marketing',
        BnkName: 'SBI',
        ACnum: '*****0987',
        salary: 50000
    },
    {
        name: 'Om',
        EId: 234,
        DPM: 'Management',
        DSIG: 'Product Management',
        BnkName: 'SBI',
        ACnum: '*****8907',
        salary: 20000
    },
    {
        name: 'Vikas',
        EId: 345,
        DPM: 'WareHouse Team',
        DSIG: 'Order Distribution',
        BnkName: 'SBI',
        ACnum: '*****7896',
        salary: 35000
    },
    {
        name: 'Neel',
        EId: 456,
        DPM: 'Shipping',
        DSIG: 'Surat Distribution',
        BnkName: 'SBI',
        ACnum: '*****6790',
        salary: 40000
    }
]
let x
let HRA, CA, PF, PT, MA, SA, totalEarning, deductions, netPay;
let HI = 1800;
function validate() {
    var EId = document.getElementById('LogID').value
    for (let i = 0; i < EMdata.length; i++) {
        if (EId == EMdata[i].EId) {
            document.getElementById('LogIn').className += ' none'
            document.getElementById('main').className = ''
            x = EMdata[i]
            process(x.salary);
            View();
        }
    }
}



function View() {
    // Info
    document.getElementById('Ename').innerHTML = x.name
    document.getElementById('EId').innerHTML = x.EId
    document.getElementById('DPM').innerHTML = x.DPM
    document.getElementById('DSIG').innerHTML = x.DSIG
    document.getElementById('BnkName').innerHTML = x.BnkName
    document.getElementById('ACnum').innerHTML = x.ACnum
    document.getElementById('Salary').innerHTML = x.salary

    // Salary
    document.getElementById('HRA').innerHTML = HRA
    document.getElementById('PF').innerHTML = PF
    document.getElementById('MA').innerHTML = MA
    document.getElementById('SA').innerHTML = SA
    document.getElementById('PT').innerHTML = PT
    document.getElementById('CA').innerHTML = CA
    document.getElementById('HI').innerHTML = HI
    document.getElementById('TE').innerHTML = totalEarning
    document.getElementById('TD').innerHTML = deductions
    document.getElementById('netPay').innerHTML = netPay
}

function process(basicSalary) {
    if (basicSalary <= 10000) {
        HRA = basicSalary * 0.2;
        CA = basicSalary * 0.8;
    } else if (basicSalary > 10000 && basicSalary <= 20000) {
        HRA = basicSalary * 0.25;
        CA = basicSalary * 0.9;
    } else {
        HRA = basicSalary * 0.3;
        CA = basicSalary * 0.95;
    }

    if (basicSalary >= 20001) {
        PF = 0;
    } else {
        PF = basicSalary * 0.12;
    }

    PT = 200;

    MA = basicSalary * 0.1;

    SA = basicSalary * 0.05;

    totalEarning = basicSalary + HRA + CA + MA + SA;

    deductions = PF + PT + HI;

    netPay = totalEarning - deductions;
    View()
}



