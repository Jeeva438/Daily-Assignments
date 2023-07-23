var userName = prompt('type da en chips-uh')
var endResult = userName.split(" ")
for (let i = 0; i < endResult.length; i++) {
    var kundi = endResult[i]
    kundi=kundi.charAt(0).toUpperCase() +kundi.slice(1)
    endResult[i]=kundi
}
var result=""
for (let index = 0; index < endResult.length; index++) {
    result=result+endResult[index]
    result=result+" "  
}
console.log(result);