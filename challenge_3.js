function netSalaryCalculation(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    //calculate payeeTax
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

    //calculate NHIF deductions
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

    //calculate NSSF
    const nssf = grossSalary * 0.06
    const netSalary = grossSalary - payee - nhif - nssf;
    return `Gross salary: KES ${grossSalary}\nPayee: KES ${payee}\nNHIF: KES ${nhif}\nNSSF: KES ${nssf}\nNet salary: KES ${netSalary}`;
}
console.log(netSalaryCalculation(81000, 20000));