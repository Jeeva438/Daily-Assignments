var userName = prompt("poda bunda")
var bunda = ""
for (let i = [userName.length]-1; i>=0; i--) {
    bunda+=userName[i]
    
}
if (userName === bunda) {
    console.log("true");
}
