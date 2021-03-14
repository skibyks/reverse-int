module.exports =function reverse (n) {
    let rev = ""
    n = String(n)
    n= n.split('').reverse()
    for (let i = 0; i < n.length; i++){
        if(n[i] === '-'){
            n[i]=""
          } else{
           rev+=n[i] 
          }
    }
  return Number(rev)
  }
  