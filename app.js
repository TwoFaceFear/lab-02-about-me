'use strict';

var edm = prompt('do you think i like edm?');
if ( edm.trim().toLowerCase() == 'yes'){
  alert('the song has to be unique for me to like it.');
} else {
  alert('eh, its okay.');
}

var hipHop = prompt('do you think i like hip-hop?');
if ( hipHop.trim().toLowerCase() == 'yes'){
  alert('kinda the same as edm, the song has to be unique.');
} else {
  alert('still just okay.');
}

var metal = prompt('do you think i like metal?');
if ( metal.trim().toLowerCase() == 'yes'){
  alert('thats my go to!');
} else {
  alert('youre dead wrong!');
}

var punk = prompt('do you think i like punk?');
if ( punk.trim().toLowerCase() == 'yes'){
  alert('my second choice in my music lineup');
} else {
  alert('incorrect, i love me some punk music!');
}

var country = prompt('do you think i like country?');
if ( country.trim().toLowerCase() == 'no'){
  alert('nice guess!');
} else {
  alert('i cant stand the stuff.');
}

console.log('the user answered', edm, 'to the edm question')
console.log('the user answered', hipHop, 'to the hip-hop question')
console.log('the user answered', metal, 'to the metal question')
console.log('the user answered', punk, 'to the punk question')
console.log('the user answered', country, 'to the country question')
