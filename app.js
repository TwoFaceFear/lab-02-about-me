'use strict';
var yes = 0;

function question1() {
  var username = prompt('what is your name?');
  var edm = prompt('do you think i like edm?');
  if ( edm.trim().toLowerCase() == 'yes' || edm.trim().toLowerCase() == 'y') {
    alert('the song has to be unique for me to like it.');
    yes++;
  } else {
    alert('eh, its okay.');
  }
  console.log(username);
}

function question2() {
  var hipHop = prompt('do you think i like hip-hop?');
  if ( hipHop.trim().toLowerCase() == 'yes' || hipHop.trim().toLowerCase() == 'y') {
    alert('kinda the same as edm, the song has to be unique.');
    yes++;
  } else {
    alert('still just okay.');
  }
  console.log(hipHop);
}

function question3 () {
  var metal = prompt('do you think i like metal?');
  if ( metal.trim().toLowerCase() == 'yes' || metal.trim().toLowerCase() == 'y') {
    alert('thats my go to!');
    yes++;
  } else {
    alert('youre dead wrong!');
  }
  console.log(metal);
}

function question4 () {
  var punk = prompt('do you think i like punk?');
  if ( punk.trim().toLowerCase() == 'yes' || punk.trim().toLowerCase() == 'y') {
    alert('my second choice in my music lineup');
    yes++;
  } else {
    alert('incorrect, i love me some punk music!');
  }
  console.log(punk);
}

function question5 () {
  var country = prompt('do you think i like country?');
  if ( country.trim().toLowerCase() == 'no' || country.trim().toLowerCase() == 'n') {
    alert('nice guess!');
    yes++;
  } else {
    alert('i cant stand the stuff.');
  }
  console.log(country);
}

function question6 () {
  var comp = '2';
  var correct = true;
  var times;
  for (var i = 4; i > 0 && correct ; i--) {
    times = prompt('how many computers do i own?');
    if (times == comp) {
      alert('not as many as id like to! but you are right!');
      yes++;
      correct = false;
    } else if (times < comp) {
      alert ('too low guess higher!');
    } else if (times > comp) {
      alert('too high guess lower!');
    } else if (i == 0) {
      alert('you are out of chances!');
    } else {
      alert('guess again!');
    }
  }
  console.log(comp);
}

function question7() {
  var states = ['california', 'utah', 'idaho', 'new york', 'nevada','oregon'];
  var notDone = true;
  for (var log = 6; log > 0 && notDone ; log--) {
    var guess = prompt('guess a state ive traveled to');
    for (var j = 0; j < states.length; j++) {
      if (guess.trim().toLowerCase() == states[j]) {
        alert('thats one of the 6! all possible answers were California, Utah, Idaho, New York, Nevada, and Oregon.');
        notDone = false;
        yes++;
      }
    }
  }
  console.log(states);
}

function displayNumCorrect() {
  alert('you got ' + yes + ' out of 7 questions correct!');
}

question1();
question2();
question3();
question4();
question5();
question6();
question7();
displayNumCorrect();
