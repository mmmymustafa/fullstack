import React from 'react';
import { Link } from 'react-router-dom'

class Footer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            selectedAlpha: ""
        }
    this.alphaLetterSubmit = this.alphaLetterSubmit.bind(this)
    }

    alphaLetterSubmit(letter){
        this.setState({selectedAlpha: letter})
    }

    render() {
        const alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
        return (
            <div className="footer">
                <div className="disneyus-about">
                    Disneyus is a clone of Genius.com with a Disney twist. Show off your Disney music knowledge with our library of lyrics!
                </div>
                <div className="footer-links-container">
                    <a href="https://www.linkedin.com/in/mohammed-mustafa-96469a167/" target="_blank">
                        <div href className="linkedin-link"><img className="lin-img" src="https://lh3.googleusercontent.com/proxy/no1lQ2bty5SoUsABQ5zSHcFCmU9m85L58ywm3ImxV_F9kh2KEHMvS9ohbPxWO9O4dI_D4jTOJZSfXzhkwHFYFzo7EOB3K1vMXD0g8eFkrJVR_6WP3WOMgCM"/></div>
                    </a>
                    <a href="https://github.com/mmmymustafa" target="_blank">
                        <div className="github-link"><img className="git-img" src="http://www.pngall.com/wp-content/uploads/2016/04/Github-Free-PNG-Image.png"/></div>
                    </a>
                    <a href="https://angel.co/mohammed-mustafa-9" target="_blank">
                    <div className="angelist-link"><img className="angelist-link-img" src="https://angel.co/images/static_pages/logo/AngelList_White_Victory_Hand.png"/></div>
                    </a>
                    <a href="https://www.facebook.com/mohammed.alibrahim.5" target="_blank">
                        <div className="facebook-link"><img className="fb-img" src="http://www.pngall.com/wp-content/uploads/2016/07/Facebook-Transparent.png"/></div>
                    </a>
                </div>
                <div className="artists-list-container">
                    <div className="all-artists-header">All Artists: </div>
                    {alpha.map(letter => <div className={`${letter}-letter-container uni-letter-container`} onClick={() => this.alphaLetterSubmit(letter)}><Link target="_blank" className={`${letter}-letter-link uni-letter-link`} to={`/artists-list/${letter}`}>{letter}</Link></div>)}
                </div>
            </div>
        )
    }
}

export default Footer;