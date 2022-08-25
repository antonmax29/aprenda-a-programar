//exibir os impares

//primeira forma
/*let n = 21
let i = 1
while (n != 0 ) {
    if(i % 2 != 0 ){
        console.log(i)
    }
    n -= 1
    i +=1
}  */

//segunda forma
let n = 15
let i = n
while (i >= 0 ) {
    if((n - i) % 2 != 0 ){
        console.log(n-i)
    }
    i-=1
}

