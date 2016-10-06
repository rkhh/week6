//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible

var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    userNamePrompt,
    favoriteSpeechPrompt;

    var i = 0;
    while (i < speechesArray.length) {
      console.log("This speech is written by " + speechesArray[i].author + ".");
      i++;
    }
    var oldest = speechesArray[0].year;
    var newest = speechesArray[0].year;
 

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  var favAuthor = window.prompt('Which speech author is your favorite?');
  for (i = 0; i < speechesArray.length; i++) {
    console.log(speechesArray[i].author + ' was ' + speechesArray[i].authorAge + ' during this speech.'); 

     while (speechesArray[i].year < oldest) {
      oldest = speechesArray[i].year;
      console.log(speechesArray[i].author + " is the oldest speech on the page.")
    }
    while (speechesArray[i].year > newest) {
      newest = speechesArray[i].year;
      console.log(speechesArray[i].author + " is the newest speech on the page.")
    }
  };
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  console.log('This speech was written by ' + speechesArray[0].author + ' in ' + speechesArray[0].year);
  if(speechesArray[0].yearIsBCE === true){
    console.log('This speech took place before the common era.');
  }else{
    console.log('This speech took place during the common era.');
  }

  if(speechesArray[0].year < speechesArray[1].year && speechesArray[0].year < speechesArray[2].year){
    console.log('This is the oldest speech on the page.');
  }else if(speechesArray[0].year > speechesArray[1].year && speechesArray[0].year > speechesArray[2].year){
    console.log('This is the most recent speech on the page.');
  }
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  console.log('This speech was written by ' + speechesArray[1].author + ' in ' + speechesArray[1].year);

  if(speechesArray[1].yearIsBCE === true){
    console.log('This speech took place before the common era.');
  }else{
    console.log('This speech took place during the common era.');
  }

  if(speechesArray[1].year < speechesArray[0].year && speechesArray[1].year < speechesArray[2].year){
    console.log('This is the oldest speech on the page.');
  }else if(speechesArray[1].year > speechesArray[0].year && speechesArray[1].year > speechesArray[2].year){
    console.log('This is the most recent speech on the page.');
  }
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  console.log('This speech was written by ' + speechesArray[2].author + ' in ' + speechesArray[2].year);

  if(speechesArray[2].yearIsBCE === true){
    console.log('This speech took place before the common era.');
  }else{
    console.log('This speech took place during the common era.');
  }

  if(speechesArray[2].year < speechesArray[0].year && speechesArray[2].year < speechesArray[1].year){
    console.log('This is the oldest speech on the page.');
  }else if(speechesArray[2].year > speechesArray[0].year && speechesArray[2].year > speechesArray[1].year){
    console.log('This is the most recent speech on the page.');
  }
});
