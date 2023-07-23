var userName = prompt('type something')
for (let i = 0; i < userName.length; i++) {
    if (userName[i] == " ") {
        userName = userName.split(userName[i]).join("")
    }
    
}
console.log(userName);