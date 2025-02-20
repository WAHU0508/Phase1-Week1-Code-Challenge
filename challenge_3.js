function calculateGrossSalary(basicSalary, benefits) {
    return basicSalary + benefits;
}
function calculatePayee(grossSalary) {
    let payee;
    if (grossSalary <= 24000) {
        payee = grossSalary * 0.1;
    }
    else if (grossSalary >= 24_001 && grossSalary <= 32_333) {
        payee = grossSalary * 0.25;
    }
    else if (grossSalary >= 32_334 && grossSalary <= 500_000) {
        payee = grossSalary * 0.3;
    }
    else if (grossSalary >= 500_001 & grossSalary <= 800_000) {
        payee = grossSalary * 0.325;
    }
    else {
        payee = grossSalary * 0.35;
    }
    return payee;
}
function nhifDeductions(grossSalary) {
    let nhif;
    if (grossSalary <= 5_999) {
        nhif = 150;
    }
    else if (grossSalary >= 6_000 && grossSalary <= 7_999) {
        nhif = 300;
    }
    else if (grossSalary >= 8_000 && grossSalary <= 11_999) {
        nhif = 400;
    }
    else if (grossSalary >= 12_000 && grossSalary <= 14_999) {
        nhif = 500;
    }
    else if (grossSalary >= 15_000 && grossSalary <= 19_999) {
        nhif = 600;
    }
    else if (grossSalary >= 20_000 && grossSalary <= 24_999) {
        nhif = 750;
    }
    else if (grossSalary >= 25_000 && grossSalary <= 29_999) {
        nhif = 850;
    }
    else if (grossSalary >= 30_000 && grossSalary <= 34_999) {
        nhif = 900;
    }
    else if (grossSalary >= 35_000 && grossSalary <= 39_999) {
        nhif = 950;
    }
    else if (grossSalary >= 40_000 && grossSalary <= 44_999) {
        nhif = 1000;
    }
    else if (grossSalary >= 45_000 && grossSalary <= 49_999) {
        nhif = 1100;
    }
    else if (grossSalary >= 50_000 && grossSalary <= 59_999) {
        nhif = 1200;
    }
    else if (grossSalary >= 60_000 && grossSalary <= 69_999) {
        nhif = 1300;
    }
    else if (grossSalary >= 70_000 && grossSalary <= 79_999) {
        nhif = 1400;
    }
    else if (grossSalary >= 80_000 && grossSalary <= 89_999) {
        nhif = 1500;
    }
    else if (grossSalary >= 90_000 && grossSalary <= 99_999) {
        nhif = 1600;
    }
    else {
        nhif = 1700;
    }
    return nhif;
}
function nssfDeductions(grossSalary) {
    return grossSalary * 0.06
}
function calculateNetSalary(grossSalary, payee, nhif, nssf) {
    return grossSalary - payee - nhif - nssf;
}
function displayCalculation(grossSalary, payee, nhif, nssf, netSalary) {
    console.log(`Gross Salary:KES ${grossSalary}`);
    console.log(`Payee:KES ${payee}`);
    console.log(`NHIF:KES ${nhif}`);
    console.log(`NSSF:KES ${nssf}`);
    console.log(`Net Salary:KES ${netSalary}`);
}
function netSalary(basicSalary, benefits) {
    const grossSalary = calculateGrossSalary(basicSalary, benefits);
    const payee = calculatePayee(grossSalary);
    const nhif = nhifDeductions(grossSalary);
    const nssf = nssfDeductions(grossSalary);
    const netSalary = calculateNetSalary(grossSalary, payee, nhif, nssf)
    displayCalculation(grossSalary, payee, nhif, nssf, netSalary);
}
netSalary(81000, 20000);