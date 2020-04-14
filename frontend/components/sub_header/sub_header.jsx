import React from 'react';
import { Link } from 'react-router-dom'

class SubHeader extends React.Component {
    constructor(props){
        super(props)
        this.anchorHandler = this.anchorHandler.bind(this)
    }

    anchorHandler(position){
        if (window.location.href === "http://localhost:3000/#/" || window.location.href === "https://disneyus.herokuapp.com/#/"){
            $(window).scrollTop(position)
        } else {
            if (window.location.href.includes("localhost:3000")){
                window.location.href = "http://localhost:3000/#/"
                $(window).scrollTop(position)
            } else {
                window.location.href = "https://disneyus.herokuapp.com/#/"
                $(window).scrollTop(position)
            }
        }
    }

    render() {
        return (
            <div className="sub-header">
                <div onClick={() => this.anchorHandler(200-60)} className="sub-path" id="no-border-sub">FEATURED</div>
                <br/>
                <div onClick={() => this.anchorHandler(1200 - 60)} className="sub-path">CHARTS</div>
                <br/>
                <div onClick={() => this.anchorHandler(document.getElementById('videos') ?  window.scrollY + document.querySelector('#videos').getBoundingClientRect().top : 2040)} className="sub-path">VIDEOS</div>
                <div className="sub-path social-links">
                    <a className="linkedin-link-sub" href="https://www.linkedin.com/in/mohammed-mustafa-96469a167/" target="_blank">
                        <div href className="linkedin-img-container"><img className="lin-img lin-img-sub" src="https://lh3.googleusercontent.com/proxy/no1lQ2bty5SoUsABQ5zSHcFCmU9m85L58ywm3ImxV_F9kh2KEHMvS9ohbPxWO9O4dI_D4jTOJZSfXzhkwHFYFzo7EOB3K1vMXD0g8eFkrJVR_6WP3WOMgCM" /></div>
                    </a>
                    <a className="github-link-sub" href="https://github.com/mmmymustafa" target="_blank">
                        <div className="github-img-container"><img className="git-img git-img-sub" src="http://www.pngall.com/wp-content/uploads/2016/04/Github-Free-PNG-Image.png" /></div>
                    </a>
                    <a className="angelist-link-sub" href="https://angel.co/mohammed-mustafa-9" target="_blank">
                        <div className="angelist-img-container"><img className="angelist-link-img angel-img-sub" src="https://angel.co/images/static_pages/logo/AngelList_White_Victory_Hand.png" /></div>
                    </a>
                    <a className="facebook-link-sub" href="https://www.facebook.com/mohammed.alibrahim.5" target="_blank">
                        <div className="facebook-"><img className="fb-img fb-img-sub" src="http://www.pngall.com/wp-content/uploads/2016/07/Facebook-Transparent.png" /></div>
                    </a>
                </div>
            </div>
        )
    }
}

export default SubHeader;