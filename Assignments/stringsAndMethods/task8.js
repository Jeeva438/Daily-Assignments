var userName = prompt(`Type your name?`)
var vowels = [`a` , `e` , `i` , `o` ,`u` , 'A', 'E', 'I', 'O', 'U']


for (let i = 0; i < userName.length; i++)
 { for (let j = 0; j < vowels.length; j++) {
    if (userName[i] === vowels[j]) {
        userName = userName.split(vowels[j]).join('')
    }
    
 }
}
console.log(userName); 