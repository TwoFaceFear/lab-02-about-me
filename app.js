'use strict';

var edm = prompt('do you think i like edm?');
if ( edm.trim().toLowerCase() == 'yes' || edm.trim().toLowerCase() == 'y'){
  alert('the song has to be unique for me to like it.');
} else {
  alert('eh, its okay.');
}

var hipHop = prompt('do you think i like hip-hop?');
if ( hipHop.trim().toLowerCase() == 'yes' || hipHop.trim().toLowerCase() == 'y'){
  alert('kinda the same as edm, the song has to be unique.');
} else {
  alert('still just okay.');
}

var metal = prompt('do you think i like metal?');
if ( metal.trim().toLowerCase() == 'yes' || metal.trim().toLowerCase() == 'y'){
  alert('thats my go to!');
} else {
  alert('youre dead wrong!');
}

var punk = prompt('do you think i like punk?');
if ( punk.trim().toLowerCase() == 'yes' || punk.trim().toLowerCase() == 'y'){
  alert('my second choice in my music lineup');
} else {
  alert('incorrect, i love me some punk music!');
}

var country = prompt('do you think i like country?');
if ( country.trim().toLowerCase() == 'no' || country.trim().toLowerCase() == 'n'){
  alert('nice guess!');
} else {
  alert('i cant stand the stuff.');
}

var comp = '2';
var correct = true;

var times;
for (var i = 4; i > 0 && correct ; i--){
  times = prompt('how many computers do i own?');

if (times == comp){
  alert('not as many as id like to!');
  correct = false;
} else if (times == 1){
  alert('you are out of chances!');
} else {
  alert('guess again!');
}
}

var states = ['california', 'utah', 'idaho', 'new york', 'nevada','oregon'];
var yep = true;

var guess;
for (var log = 6; log > 0 && yep ; log--){
  times = prompt('guess a state ive traveled to');

if (log == 0){
  guess = prompt('ive been there for sure!');
} else {
  guess = alert('you are out of chances');
}

for(var j = 0; j < states.length; j++) {
  if(stats[j] == guess {
    alert('thats one of the 6! all possible answers were California, Utah, Idaho, New York, Nevada, and Oregon.')
      yep = false;
  }
}
}
if (yep == true){
  alert('too bad!')
}



console.log('the user answered', edm, 'to the edm question')
console.log('the user answered', hipHop, 'to the hip-hop question')
console.log('the user answered', metal, 'to the metal question')
console.log('the user answered', punk, 'to the punk question')
console.log('the user answered', country, 'to the country question')
