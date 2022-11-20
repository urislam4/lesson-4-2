const len = (ok,ko) => {
    let num = 0 
  for (let i = 0; i <= ok.length; i++){
    if(ok[i] == ko){
    num++
    }
  }
console.log(num)
 }
len("nnurislam",'n')