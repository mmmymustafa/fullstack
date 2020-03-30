
# [Disneyus](disneyus.herokuapp.com)
**Disneyus** is a clone of [Genius](www.genius.com) with a disney twist. utilizing the same functionalities of Genius.
![alt-text](https://github.com/mmmymustafa/fullstack/blob/master/readme_gifs/ezgif-6-09b06c6dd3cc.gif)

# Getting Started
- Users can annotate lyrics and describe the meaning behind it to earn Disneyus Points (+5 DP per annotation).
- If users missed their chance to annotate a piece of lyrics they can suggest annotation improvement in the suggestion        seccions.
- Dynamic upvoting system is emplemented for annotations, comments and annotaion suggestions.
![alt-text](https://github.com/mmmymustafa/fullstack/blob/master/readme_gifs/ezgif-6-993817da2415.gif)

# MVP functionalities
1. Tracks
  - Users can highlight a piece of lyrics and annotate the meaning behind it with the highlighted lyrics must be minimum of 7 letters to be annotated after being logged in.
  - Comment section available in each track for users too comment about the track.
  ![alt-text](https://github.com/mmmymustafa/fullstack/blob/master/readme_gifs/ezgif-6-2997e8715a68.gif)

  2. Annotations
  - Annotation form and annotation show components appears dynalmically in the page depending on the position of the highlighted lyrics in the track by setting the style in the prop of the div contatining the component dynamilcally
```javascript
const pos = window.scrollY + document.getSelection().getRangeAt(0).getBoundingClientRect().top - 500
<div className="annotation-form" style={{ marginTop: `${document.getSelection().toString().length > 0 ? pos : null}px`}}>
```
  ![alt-text](https://github.com/mmmymustafa/fullstack/blob/master/readme_gifs/ezgif-6-cb95d3231c8f.gif)