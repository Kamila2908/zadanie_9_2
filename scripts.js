var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var allNames = femaleNames.concat(maleNames);

var newName = 'Czarek'

if (allNames.indexOf(newName) === -1) {
        var x = allNames.push(newName);
    } else {false;
           } 

    console.log(allNames)
