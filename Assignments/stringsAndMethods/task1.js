var userName = prompt("What is your name?");
const vowels = ['a', 'e', 'i', 'o', 'u' , 'A', 'E', 'I', 'O', 'U' ];
var count = 0;

for (let i = 0; i < userName.length; i++) 
{
    for (let j = 0; j < vowels.length; j++) 
    {
        if (userName[i] === vowels[j]) {
            count++;
        }
    }
}

console.log(count);
