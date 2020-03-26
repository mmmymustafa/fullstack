import React from 'react';

class News extends React.Component{
    render(){
        return(
        <div className="news">
        <a target="_blank" href="https://www.fool.com/investing/2020/01/09/disney-lucasfilm-refocus-on-creativity-not-fans.aspx">
          <div className="main-news">
            <div className="main-news-headers">
                <p className="main-news-label"><span>NEWS</span></p>
                    <h2 className="main-news-header">Disney's Lucasfilm Needs to Refocus on Creativity, Not Fan Service</h2>
                <h2 className="main-news-subheader">A $1 billion box office hit is normally great news, unless you’re Disney.</h2>
                <div className="main-page-author">
                    <span className="main-news-authname"> by Nicholas Rossolillo / </span>
                    <span className="main-news-authdate">Jan 9 2020</span>
                </div>
                </div>
            <div>
                <img className="main-news-img" src="https://g.foolcdn.com/image/?url=https%3A%2F%2Fg.foolcdn.com%2Feditorial%2Fimages%2F552893%2Fdisney-star-wars.jpg&w=700&op=resize"/>
            </div>
          </div>
        </a> 
        <div className="other-news">
            <ul className="other-news-list">
                <li>
                            <a target="_blank" href="https://www.marketwatch.com/story/have-these-people-gone-crazy-for-mickey-mouse-10000-people-applied-for-unpaid-jobs-at-disney-2020-01-09">
                            <div className="other-news-headers">
                                <p className="other-news-label"><span>NEWS</span></p>
                                    <h2 className="other-news-header">10,000 people applied for 14 unpaid jobs at Disney</h2>
                                <div className="other-page-author-1">
                                    <span className="other-news-authname"> by Jacobs Passy / </span>
                                    <span className="other-news-authdate">Jan 10 2020</span>
                                        <div>
                                            <img className="other-news-img" src="https://ei.marketwatch.com/Multimedia/2019/04/11/Photos/ZH/MW-HH439_MagicK_20190411114958_ZH.jpg?uuid=75dc85ce-5c71-11e9-a02f-9c8e992d421e" />
                                        </div>
                                </div>
                            </div>
                    </a>
                </li>
                <li className="other-news-item">
                        <div className="other-news-content">
                                <a target="_blank" href="https://nypost.com/2020/01/10/columbia-releases-mickey-mouse-collection-featuring-original-artwork-of-the-disney-icon/">
                            <div className="other-news-headers">
                                    <p className="other-news-label"><span>NEWS</span></p>
                                        <h2 className="other-news-header">Columbia releases Mickey Mouse collection featuring original artwork of Disney icon</h2>
                                    <div className="other-page-author-2">
                                        <span className="other-news-authname"> by Treye Green / </span>
                                        <span className="other-news-authdate">Jan 10 2020</span>
                                        <div>
                                                <img className="other-news-img" src="https://thenypost.files.wordpress.com/2020/01/mickey-mouse-1.png?w=618&h=410&crop=1" />
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                </li>
                <li className="other-news-item" >
                        <div className="other-news-content">
                            <a target="_blank" href="https://comicbook.com/tv-shows/2020/01/10/disney-fox-deal-killed-one-of-fxs-most-promising-new-series/">
                            <div className="other-news-headers">
                                    <p className="other-news-label"><span>NEWS</span></p>
                                        <h2 className="other-news-header">Disney-Fox Deal May Have Just Killed One of FX's Most Promising New Series</h2>
                                    <div className="other-page-author-3">
                                        <span className="other-news-authname"> by Spencer Perry / </span>
                                        <span className="other-news-authdate">Jan 10 2020</span>
                                        <div>
                                            <img className="other-news-img" src="https://media.comicbook.com/2020/01/noah-hawley-fx-1202488-1280x0.jpeg" />
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                </li>
                <li className="other-news-item">
                     <div className="other-news-content">
                          <a target="_blank" href="https://people.com/home/disney-princess-dinnerware-set/">
                            <div className="other-news-headers">
                                    <p className="other-news-label"><span>NEWS</span></p>
                                        <h2 className="other-news-header">This Disney Princess Dinnerware Set Is All Over Instagram — and Selling Out Fast</h2>
                                    <div className="other-page-author-4">
                                        <span className="other-news-authname"> by Katie Macdonald / </span>
                                        <span className="other-news-authdate">Jan 9 2020</span>
                                    <div>
                                                <img className="other-news-img" src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpeopledotcom.files.wordpress.com%2F2020%2F01%2Fdisney-dinnerware-2.jpg&w=650&c=sc&poi=face&q=85" />
                                    </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                </li>
            </ul>
        </div>
        </div>
        )
    }
}

export default News;