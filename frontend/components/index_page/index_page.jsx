import React from 'react';
import News from './news';
import ChartsContainer from './charts';
import Videos from './videos'

class IndexPage extends React.Component {

    render(){
        return(
            <div>
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