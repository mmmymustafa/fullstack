import React from 'react';
import News from './news';
import ChartsContainer from './charts_container';

class IndexPage extends React.Component {

    render(){
        return(
            <div>
                <News />
                <ChartsContainer />
            </div>
        )   
    }

}

export default IndexPage;