import React from 'react';
import CreateAnnotationFormContainer from '../annotation/create_annotation_form_container';

class Lyrics extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
        };
        this.onHighlight = this.onHighlight.bind(this);
        this.toggleAnnotationForm = this.toggleAnnotationForm.bind(this)
    }

    toggleAnnotationForm(){
        this.setState({
            showComponent: !this.state.showComponent
        })
    }

    onHighlight() {
        console.log(document.getSelection().toString())
        if (document.getSelection().toString() !== "")
        this.setState({
            showComponent: true,
        });
    }
       
    gText(){
    let t = '';
    // t = (document.all) ? console.log(document.selection.createRange().text) : console.log(document.getSelection());
    t = console.log(document.getSelection().toString());
    document.getElementsByClassName('track-lyrics-body').value = t;
    // return <CreateAnnotationFormContainer/>
    }

    render(){
        // if (document.getElementsByClassName("track-lyrics-body")[0] === undefined) return null
        let lyr;
        if (document.getElementsByClassName("track-lyrics-body")[0]){
            lyr = document.getElementsByClassName("track-lyrics-body")[0].innerText;
        }
        let selected;
        let _selected;
        if (document.getSelection()){
            selected = document.getSelection().toString()
            _selected == new RegExp(`/${selected}/gi`)
        }
        if (this.props.track.lyrics === undefined) return null;
        const renderLyrics = () => (
        this.props.track.lyrics.split("\n").map((line) => <div className="lyrics-line">{line}</div>)
        )
        return(
            <div className="track-lyrics">
                <span><p hidden onMouseUp={this.onHighlight} className="track-lyrics-body">{renderLyrics()}</p></span>
                {/* <textarea onSelect="Ur highlighting mayne" className="tlb" value={document.getElementsByClassName("track-lyrics-body")[0].innerText}></textarea> */}
                <div onMouseUp={this.onHighlight} className="track-lyrics-body" >{lyr && lyr.replace(/([A-Z])/g, ' \n$1').split("\n").map((line) => {
                    let foundAnnotation = line;
                    for (let i = 0; i < this.props.track.annotated_lyrics.length; i++){
                        let lyrAnn = this.props.track.annotated_lyrics[i]
                        let currentAnnotation = line.replace(lyrAnn, `<p id="yinw" className="yinw">${lyrAnn}</p>`)
                        if(currentAnnotation !== lyrAnn ){ foundAnnotation = currentAnnotation;
                        } 
                    }
                    console.log(foundAnnotation)
                    return(
                    <div dangerouslySetInnerHTML={{ __html: foundAnnotation}} className="lyrics-line">
                </div>)})}</div>
                {this.state.showComponent ?
                    <CreateAnnotationFormContainer trackId={this.props.trackId} selectedLyrics={selected} toggleAnnotationForm={this.toggleAnnotationForm} /> :
                    null
                }
            </div>
            
        )
    }
}


export default Lyrics;