'use strict';
var Degree =0;
var isName = prompt('whats your name?');
console.log('user name = ' + isName);
alert(' welcome to my page' + isName);



var study = prompt('Am I a chemical engineer?').toLocaleLowerCase();
if (study === 'yes' || study === 'y') {
  console.log('yes thats correct');
  alert('yes thats correct' + study);
  Degree=Degree+1;
} else if (study === 'no' || study === 'n') {
  console.log('no thats not correct');
  alert('no thats not correct' + study);
}



var myName = prompt('my names sahar?').toLocaleLowerCase();
if (myName === 'yes' || myName === 'y') {
  console.log('yes thats correct welcome to my page');
  alert('yes thats correct welcome to my page" + myName');
  Degree=Degree+1;

} else if (myName === 'no' || myName === 'n') {
  console.log('no thats not correct');
  alert('no thats not correct' + myName);
}

var work = prompt('My WORK EXPERIENCE Facilitator of mathematics and science ?').toLocaleLowerCase();
if (work === 'yes' || work === 'y') {
  console.log('yes thats correct my work EXPERIENCE Facilitator of mathematics and science');
  alert('yes thats correct my work EXPERIENCE Facilitator of mathematics and science ' + work);
  Degree=Degree+1;
} else if (work === 'no' || work === 'n') {
  console.log('no thats not correct');
  alert('no thats not correct' + work);
}


var project = prompt('is my project Generate bio-gas and fertilizers from organic waste ?').toLocaleLowerCase();
if (project === 'yes' || project === 'y') {
  console.log('yes thats correct my project Generate bio-gas and fertilizers from organic waste  ');
  alert(' yes thats correct my project Generate bio-gas and fertilizers from organic waste ' + project);
  Degree=Degree+1;
} else if (project === 'no' || project === 'n') {
  console.log('no thats not correct');
  alert('no thats not correct' + project);
}



var graduate = prompt('Is the graduation project name The effect of temperature and PH on settlability ?').toLocaleLowerCase();
if (graduate === 'yes' || graduate === 'y') {
  console.log('yes thats correct my graduation project name The effect of temperature and PH on settlability');
  alert( 'yes thats correct graduation project name The effect of temperature and PH on settlability ' + graduate);
  Degree=Degree+1;
} else if (project === 'no' || project === 'n') {
  console.log('no thats not correct');
  alert('no thats not correct' + graduate);
}

var yourname = prompt('whats your name?');
console.log(' user name = ' + yourname);
alert(' welcome to my page' + yourname);
document.write('welcome to my page  ' + yourname);

var userNumber = parseInt(prompt('what is my best number? choose from 1 to 7'));

for (var i = 0; i <= 3; i++) {
  if (userNumber === 3) {
    alert('correct');
    Degree=Degree+1;
    break;
  } else if (userNumber === 5 || userNumber === 6 || userNumber === 7) {
    console.log('too low');
    alert(' (too low) no you are not close to the answer ' + userNumber);
    userNumber = parseInt(prompt('what is my best number? choose from 1 to 7'));

  } else if (userNumber === 1 || userNumber === 2 || userNumber === 4) {
    console.log('too high');
    alert('(too high) you are  close to the answer' + userNumber);
    userNumber = parseInt(prompt('what is my best number? choose from 1 to 7'));

  }
}
alert('Correct answer=3');


var myColor = ['white', 'blue', 'red', 'black', 'green', 'pink', 'silver']; 
var userColor = prompt('what is my favorite color?');
var count = 0;
console.log(userColor);
for (var i = 0; i < 6; i++) {
  for (var j = 0; j <= myColor.length - 1; j++) {
    if (userColor === myColor[j]) {
      alert('correct');
      Degree=Degree+1;
      break;
    }
    else {
      count = count + 1;
    }
  }

  if (count === 7) {
    userColor = prompt('try again');
    count = 0;
  }
  else {
    break;
  }
}

alert(myColor);
alert('your Degree' + Degree);