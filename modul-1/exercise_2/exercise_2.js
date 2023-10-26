//pseudocode no.1
/*
    DECLARE c EQUALS TO 60
    DECLARE f

    f EQUALS TO (C MULTIPLICATION 9 DIV 5) PLUS 32

    PRINT(f, "Fahrenheit")
*/
console.log("Number 1: [Celcius <- 60]")
//code no.1
let c = 60;
let f = (c * 9 / 5) + 32;
console.log(`${f} Fahrenheit\n`);

/*
==================================================================
==================================================================
*/

//pseudocode no.2
/*
    DECLARE input EQUALS TO 25

    IF input % 2 NOT EQUALS TO 0
        THEN PRINT("odd number")
    ELSE
        THEN PRINT("even number")
*/
console.log("Number 2: [input <- 25]")
//code no.2
let input = 25
console.log(input % 2 !== 0 ? "odd number\n" : "even number\n")

/*
==================================================================
==================================================================
*/

//pseudocode no.3
/*
    DECLARE num EQUALS TO 7
    DECLARE i EQUALS TO 5
    
    SWITCH true THEN
    CASE num % 2 EQUALS TO 0 OR num % 3 EQUALS TO 0
        THEN PRINT("is not a prime number")
    DEFAULT
        WHILE i MULTIPLICATION i LESS THAN EQUALS TO num DO
            IF num % i EQUALS TO 0 OR num % (i plus 2) EQUALS TO 0 
                THEN PRINT("is not a prime number")
                CONTINUE
            ENDIF
            i EQUALS TO i PLUS 6
        ENDWHILE
        PRINT("is a prime number")
        BREAK
*/
console.log("Number 3: [input <- 7]")
//code no.3
let num = 7;
let prime = true
for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        prime = false
    }
}
console.log(prime == true ? "is a prime number\n" : "is not a prime number\n")


/*
==================================================================
==================================================================
*/

//pseudocode no.4
/*
    DECLARE n EQUALS TO 5
    DECLARE result EQUALS TO 0
    DECLARE i EQUALS TO 1

    FOR i LESS THAN EQUALS TO n
    DO result EQUALS TO result PLUS i
    i EQUALS TO i PLUS 1

    PRINT(result)
*/
console.log("Number 4: [input <- 5]")
// code no.4
let n = 5;
let result = 0;
for (let i = 1; i <= n; i++) {
    result += i;
}
console.log(`${result}\n`)

/*
==================================================================
==================================================================
*/

//pseudocode no.5
/*
    DECLARE n1 EQUALS TO 6
    DECLARE result1 EQUALS TO 1
    DECLARE i EQUALS TO n1

    FOR i BIGGER THAN EQUALS TO 1
    DO result1 EQUALS TO result1 MULTIPLICATION i
    i EQUALS TO i MIN 1

    PRINT(result)
*/
console.log("Number 5: [input <- 6]")
//code no.5
let n1 = 6;
let result1 = 1;
for (let i = n1; i >= 1; i--) {
    result1 *= i;
}
console.log(`${result1}\n`)

/*
==================================================================
==================================================================
*/

//pseudocode no.6
/*
    DECLARE N EQUALS TO 15
    DECLARE prev EQUALS TO 0
    DECLARE current EQUALS TO 1
    DECLARE next
    DECLARE i EQUALS TO 2

    FOR i LESS THAN EQUALS TO N
    DO next EQUALS TO prev PLUS current
    prev EQUALS TO current
    current EQUALS TO next

    PRINT(current)
*/
console.log("Number 6: [input <- 15]")
//code no.6
let N = 15;
let prev = 0;
let current = 1;
let next = 0;

for (let i = 2; i <= N; i++) {
    next = prev + current;
    prev = current;
    current = next;
}
console.log(current);