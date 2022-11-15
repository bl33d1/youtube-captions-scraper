let getSubtitles = require('youtube-captions-scraper').getSubtitles;
const fs = require('fs');

getSubtitles({
  videoID: 'ATlila3e9dM', // youtube video id
}).then(function(captions) {
  // console.log(captions);
  let captionString;
  captions.map((text) => {
    let captionSentence = text.text;
    captionString+=text.text;
    if(captionSentence.charAt(captionSentence.length-1) === '.' ||
      captionSentence.charAt(captionSentence.length-1) != ' '
    ){
      captionString+="\n";
    }
  })
  //console.log(captionString);
  //const captionsString = JSON.stringify(captions[0].text.toString(), null, 4);
  fs.writeFileSync('./first-punic-war-text-only.json', captionString);
  //console.log(captions)
});