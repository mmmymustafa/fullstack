
# [Disneyus](disneyus.herokuapp.com)
**Disneyus** is a clone of [Genius](www.genius.com) with a disney twist. utilizing the same functionalities of Genius.
![alt-text](https://github.com/mmmymustafa/fullstack/blob/master/readme_gifs/ezgif-6-09b06c6dd3cc.gif)

# Getting Started
- Users can annotate lyrics and describe the meaning behind it to earn Disneyus Points (+5 DP per annotation).
- If users missed their chance to annotate a piece of lyrics they can suggest annotation improvement in the suggestion        seccions.
- Dynamic upvoting system is emplemented for annotations, comments and annotaion suggestions.
![alt-text](https://github.com/mmmymustafa/fullstack/blob/master/readme_gifs/ezgif-6-993817da2415.gif)

# MVP functionalities
## 1. User Auth
  - Users can sign-up and login with a username and a password and logout as well.
  - Users also have the option to demo login and try how a user can interact with UI.
  - the main features such as comment and annotate can only be done while logged in.

## 2. Index Page
  - News section links to actual disney related news.
  - Charts listing all the availabe tracks with a "Load More" button incrementing the list to show 10 extra songs.
  - Videos deploy a video player when one of the non of the main videos are clicked
    ![alt-text](https://github.com/mmmymustafa/fullstack/blob/master/readme_gifs/ezgif-6-2bbfc991a224.gif)

## 3. Search bar and Sub-header
  - Sub-header anchors to index page and on the right section using a custom anchorHandler method
  ```javascript
    anchorHandler(position){
        if (window.location.href === "https://disneyus.herokuapp.com/#/"){
            $(window).scrollTop(position)
        } else {
            window.location.href = "https://disneyus.herokuapp.com/#/"
            $(window).scrollTop(position)
            }
        }
    }
  ```
  - Search bar goes through track, albums and artists to find a word that begins with the matching input characters and show only the needed data (for example: if non of the albums matches the characters then albums won't show only tracks and artists)
  - ![alt-text](https://github.com/mmmymustafa/fullstack/blob/master/readme_gifs/ezgif-6-3793a3027596.gif)
  
## 4. Tracks
  - Users can highlight a piece of lyrics and annotate the meaning behind it with the highlighted lyrics must be minimum of 7 letters to be annotated after being logged in.
  - Comment section available in each track for users too comment about the track.
  ![alt-text](https://github.com/mmmymustafa/fullstack/blob/master/readme_gifs/ezgif-6-2997e8715a68.gif)

## 5. Annotations
  - Annotation form and annotation show components appears dynalmically in the page depending on the position of the highlighted lyrics in the track by setting the style in the prop of the div contatining the component dynamilcally
```javascript
const pos = window.scrollY + document.getSelection().getRangeAt(0).getBoundingClientRect().top - 500
<div className="annotation-form" style={{ marginTop: `${document.getSelection().toString().length > 0 ? pos : null}px`}}>
```
  ![alt-text](https://github.com/mmmymustafa/fullstack/blob/master/readme_gifs/ezgif-6-cb95d3231c8f.gif)

## 6. Comments
  - Users can comment on a track page, album page or suggest on an existing annotation if logged in.
  - Comments are upvotable and downvotable as well.

## 7. Upvotes
  - Users can upvote or downvote a comment or an annotation.
  - Number of likes color dynamically changes depending on the total number of votes.
  ```javascript
  {<div className="number-of-votes" style={numVotesCount === 0 ? { color: "#9a9a9a" } : numVotesCount > 0 ? { color: "#0ecb27" } : { color: "#ff1414"}}>{numVotesCount > 0 ? "+" + numVotesCount :  numVotesCount}</div>}
  ```

# Current and Upcoming Features
  - [x] Succesful User Auth
  - [x] Lyrics organized in track page
  - [x] Dynamic annotations
  - [x] Comments and annotation suggestions
  - [x] Dynamic upvotes and downvotes
  - [x] Functional sub-header
  - [x] Functional video player
  - [ ] Embed spotify track samples
  - [ ] Extend charting for artists and albums
  - [ ] Charts to have filtering and ordering system

# Technologies Information

Ruby version:
 - ruby 2.5.1
 - rails 5.2.3

Dependencies: 
 - "@babel/core": "^7.7.7"
 - "@babel/preset-env": "^7.7.7"
 - "@babel/preset-react": "^7.7.4"
 - "babel-loader": "^8.0.6"
 - "material-design-icons": "^3.0.1"
 - "react": "^16.12.0"
 - "react-dom": "^16.12.0"
 - "react-redux": "^7.1.3"
 - "react-router-dom": "^5.1.2"
 - "redux": "^4.0.5"
 - "redux-logger": "^3.0.6"
 - "redux-thunk": "^2.3.0"
 - "webpack": "^4.41.5"
 - "webpack-cli": "^3.3.10"

Engines:
  - "node": "13.0.1",
  - "npm": "6.12.0"











