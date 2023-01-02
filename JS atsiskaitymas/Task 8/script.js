/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klasę "Calculator", kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą;
subtraction() - priima du skaičius ir grąžina jų skirtumą;
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

class Calculator{
    sum(sk1,sk2){
        return sk1 + sk2
    }
    subtraction(sk1,sk2){
        return sk1 - sk2;
    }
    multiplication(sk1, sk2){
        return sk1 * sk2;
    }
    division(sk1, sk2){
        return sk1 / sk2;
    }
        
}

calc = new Calculator()
console.log(calc.sum(4,4));
console.log(calc.subtraction(6,6));
console.log(calc.multiplication(6,6));
console.log(calc.division(12,2));
