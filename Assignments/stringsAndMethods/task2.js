var userName = prompt("type something")
var reverseOrder = ""
for (let i = [userName.length]-1; i>=0; i--) {
      reverseOrder+=userName[i]
    }

    console.log(reverseOrder);