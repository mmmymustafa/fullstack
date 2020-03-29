import React from 'react';
import News from './news';
import ChartsContainer from './charts';
import Videos from './videos'

class IndexPage extends React.Component {

    render(){
        return(
            <div className="index-page-container">
                <div className="index-page">
                    <News />
                    <ChartsContainer />
                    <Videos />
                </div>
            </div >
        )   
    }

}

export default IndexPage;