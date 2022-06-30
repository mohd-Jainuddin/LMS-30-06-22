let num=5
let c=1
for(let i=1;i<=num;i++){
    let str=''
    for(let j=1;j<=i;j++){
        str+=c+' '
        c++
    }
    console.log(str)
}