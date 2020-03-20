import React from 'react';

class UpvoteShow extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            userVote: this.props.votes[this.props.curUserId === null ? 0 : this.props.curUserId],
            numVotes: this.props.numVotes
        }
        this.upvoteSubmit = this.upvoteSubmit.bind(this)
        this.downvoteSubmit = this.downvoteSubmit.bind(this)
    }

    upvoteSubmit(e){
        if(this.props.curUserId){
            if(this.state.userVote === undefined ){
                e.preventDefault();
                let userId = this.props.userId
                let id = this.props.voteableId;
                let type = this.props.voteableType
                const upvote = {
                    user_id: userId,
                    voteable_id: id,
                    voteable_type: type,
                    vote_type: 'upvote'
                };
                this.props.createUpvote(upvote)
                    .then(() => this.setState({ userVote: this.props.votes[this.props.curUserId], numVotes: this.state.numVotes + 1 }))
            } else {
                if(this.state.userVote.vote_type === 'downvote'){
                    e.preventDefault();
                    let userId = this.props.userId
                    let id = this.props.votes[userId].id
                    let voteableId = this.props.voteableId;
                    let type = this.props.voteableType
                    const upvote = {
                        id,
                        user_id: userId,
                        voteable_id: voteableId,
                        voteable_type: type,
                        vote_type: 'upvote'
                    }
                    this.props.updateUpvote(upvote)
                        .then(() => this.setState({ userVote: this.props.votes[this.props.curUserId], numVotes: this.state.numVotes + 2 }))
                } else {
                    e.preventDefault();
                    this.props.destroyUpvote(this.props.votes[this.props.userId].id)
                    .then(() => this.setState({ userVote: undefined, numVotes: this.state.numVotes - 1}))
                }
            }
        }
    }

    downvoteSubmit(e){
        if(this.props.curUserId){
            if(this.state.userVote === undefined ){
                e.preventDefault();
                let userId = this.props.userId
                let id = this.props.voteableId;
                let type = this.props.voteableType
                const downvote = {
                    user_id: userId,
                    voteable_id: id,
                    voteable_type: type,
                    vote_type: 'downvote'
                };
                this.props.createUpvote(downvote)
                    .then(() => this.setState({ userVote: this.props.votes[this.props.curUserId], numVotes: this.state.numVotes - 1 }))
            } else {
                if (this.state.userVote.vote_type === 'upvote') {
                    let id = this.state.userVote.id
                    let userId = this.props.userId;
                    let voteableId = this.props.voteableId;
                    let type = this.props.voteableType;
                    const downvote = {
                        id,
                        user_id: userId,
                        voteable_id: voteableId,
                        voteable_type: type,
                        vote_type: 'downvote'
                    }
                    this.props.updateUpvote(downvote)
                        .then(() => this.setState({ userVote: this.props.votes[this.props.curUserId], numVotes: this.state.numVotes - 2 }))
                } else {
                    this.props.destroyUpvote(this.state.userVote.id)
                        .then(() => this.setState({ userVote: undefined, numVotes: this.state.numVotes + 1 }))
                }
            }
                
            
        }
    }

    render(){
        let numVotesCount = this.props.numVotes
        return(
            <div className={`voting-thumbs ${this.props.voteableType === "Comment" ? "voting-thumbs-comments" : null}`}>
                <svg onClick={this.upvoteSubmit} className={`upvote-thumb ${this.props.voteableType === "Comment" ? "upthumb-comments" : null}`} id="upvote-thumb" src="thumbs_up.svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.62 21.36"><path className="upvote-thumb-path" id="upvote-thumb-path" style={this.state.userVote !== undefined && this.state.userVote.vote_type === "upvote" ? { fill: "#0ecb27" } : null} d="M16.52 21.29H6V8.5l.84-.13a3.45 3.45 0 0 0 1.82-1.09 13.16 13.16 0 0 0 .82-1.85c1.06-2.69 2-4.78 3.52-5.31a2.06 2.06 0 0 1 1.74.17c2.5 1.42 1 5 .16 6.95-.11.27-.25.6-.31.77a.78.78 0 0 0 .6.36h4.1a2.29 2.29 0 0 1 2.37 2.37c0 .82-1.59 5.4-2.92 9.09a2.39 2.39 0 0 1-2.22 1.46zm-8.52-2h8.56a.48.48 0 0 0 .31-.17c1.31-3.65 2.73-7.82 2.79-8.44 0-.22-.1-.32-.37-.32h-4.1A2.61 2.61 0 0 1 12.54 8 4.29 4.29 0 0 1 13 6.46c.45-1.06 1.64-3.89.7-4.43-.52 0-1.3 1.4-2.38 4.14a10 10 0 0 1-1.13 2.38A5.28 5.28 0 0 1 8 10.11zM0 8.4h4.86v12.96H0z"></path></svg>
                <div className="number-of-votes" style={numVotesCount === 0 ? { color: "#9a9a9a" } : numVotesCount > 0 ? { color: "#0ecb27" } : { color: "#ff1414"}}>{numVotesCount > 0 ? "+" + numVotesCount :  numVotesCount}</div>
                <svg onClick={this.downvoteSubmit} className={`downvote-thumb ${this.props.voteableType === "Comment" ? "downthumb-comments" : null}`} id="downvote-thumb" src="thumbs_down.svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.62 21.36"><path className="downvote-thumb-path" id="downvote-thumb-path" style={this.state.userVote !== undefined && this.state.userVote.vote_type === "downvote" ? { fill: "#ff1414" } : null} d="M8 21.36a2.12 2.12 0 0 1-1.06-.29c-2.5-1.42-1-5-.16-6.95.11-.27.25-.6.31-.77a.78.78 0 0 0-.6-.36H2.37A2.29 2.29 0 0 1 0 10.64c0-.82 1.59-5.4 2.92-9.09A2.39 2.39 0 0 1 5.1.07h10.56v12.79l-.84.13A3.45 3.45 0 0 0 13 14.08a13.16 13.16 0 0 0-.82 1.85c-1.06 2.69-2 4.79-3.49 5.31a2.06 2.06 0 0 1-.69.12zM5.1 2.07a.48.48 0 0 0-.31.17C3.48 5.89 2.07 10.06 2 10.68c0 .22.1.32.37.32h4.1a2.61 2.61 0 0 1 2.61 2.4 4.29 4.29 0 0 1-.48 1.51c-.46 1.09-1.65 3.89-.7 4.42.52 0 1.3-1.4 2.38-4.14a10 10 0 0 1 1.13-2.38 5.27 5.27 0 0 1 2.25-1.56V2.07zM16.76 0h4.86v12.96h-4.86z"></path></svg>
            </div>
        )
    }

}

export default UpvoteShow