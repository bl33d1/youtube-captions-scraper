let getSubtitles = require('youtube-captions-scraper').getSubtitles;
const fs = require('fs');

getSubtitles({
  videoID: 'ATlila3e9dM', // youtube video id
}).then(function(captions) {
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
  fs.writeFileSync('./first-punic-war-text-only.txt', captionString);
});