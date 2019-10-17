function calculate(){
    let num =document.getElementById('num').value
    num =parseInt(num)&&Number(num)
    if(!isNaN(num)){
        document.getElementById('pai').value =pi(num)
    }
}
function  factorial(n){
    let sum = 1
    for(let i=1;i<=n;++i){
        sum = sum+1
    }
    return sum
}
function oddFactorial(n){
    let sum = 1
    for(let i=1;i<=n;++i){
        sum=2*n+1
    }
    return sum
}
function pi(num){
    let sum = 0
    for(let i=0;i<=num;++i){
        let dividend = factorial()
        let dicisor = oddFactorial(n)
        sum+=i+i+i
    }
    return sum*2
}
calculate()