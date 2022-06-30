let num=5
let a=num

for(let i=1;i<=num;i++){
    let str=''
    for(let j=1;j<=num;j++){
        if(i==j || j==a){
            str+='*'
        }
        else{
            str+=' '
        }
    }
    console.log(str)
    a--
}