let condition = true;
let num = 1;

while (condition) {
    console.log(num);
    num++;
    if (num == 11) {
    condition = false;
    }
}

const money = 1250;

switch (money) {
    case 1250:
        console.log('Ai primit marire');
        break;
    case 900:
        console.log('Ti-am taiat din salariu');
        break;
    case 2000:
        console.log('S-a produs o greseala')
        break;
    default:
        console.log('Au Intrat banii')
        break;
}