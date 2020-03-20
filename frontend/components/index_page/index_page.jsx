import React from 'react';
import News from './news';
import ChartsContainer from './charts_container';
import Videos from './videos'

class IndexPage extends React.Component {

    render(){
        return(
            <div>
                <News />
                <ChartsContainer />
                <Videos />
            </div>
        )   
    }

}

export default IndexPage;