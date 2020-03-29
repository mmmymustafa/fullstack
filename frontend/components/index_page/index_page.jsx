import React from 'react';
import News from './news';
import ChartsContainer from './charts';
import Videos from './videos'

class IndexPage extends React.Component {

    render(){
        return(
            <div>
                <div className="index-page-container">
                    <div className="index-page">
                        <News />
                        <ChartsContainer />
                    </div>
                </div >
                <div className="index-page-container index-videos-container">
                    <div className="index-page">
                        <Videos />
                    </div>
                </div>
            </div >
        )   
    }

}

export default IndexPage;