let num=5,a=0,b=1,c=0;

for(let i=1;i<=num;i++){
    let str=''
        for(let j=1;j<=i;j++){
            if(i==1 || i==2){
                str+=a+' '
                a=1
            }
            else{
                c=a+b
                a=b
                b=c
                str+=c+' '
            }
        }
   console.log(str)
}