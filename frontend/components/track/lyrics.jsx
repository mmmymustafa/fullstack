import React from 'react';
import CreateAnnotationFormContainer from '../annotation/create_annotation_form_container';
import AnnotationShowContainer from '../annotation/annotation_show_container'
import { Link } from 'react-router-dom';


class Lyrics extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
            showAnnotation: false,
            curAnnotation: 29,
            selectedAnnotation: false
        };
        this.onHighlight = this.onHighlight.bind(this);
        this.onAnnotatedClick = this.onAnnotatedClick.bind(this);
        this.toggleAnnotationForm = this.toggleAnnotationForm.bind(this)
        this.toggleShowAnnotation = this.toggleShowAnnotation.bind(this)
    }

    // componentDidUpdate(prevProps){
    //     if(prevProps.annotations !== this.props.annotations){
    //         console.log("they ain\'t the same breh")
    //     }
    // }

    toggleAnnotationForm(){
        this.setState({
            showComponent: !this.state.showComponent
        })
    }

    toggleShowAnnotation(){
        this.setState({
            showAnnotation: !this.state.showAnnotation
        })
    }

    onHighlight() {
        for (let i = 0; i < document.getElementsByClassName("yinw").length; i++){
            if (document.getSelection().toString() !== "" && !document.getSelection().containsNode(document.getElementsByClassName("yinw")[i], true)){
            this.setState({
                showComponent: true,
                showAnnotation: false,
            });
            let annotated = document.getElementsByClassName("yinw")
                for (let i = 0; i < annotated.length; i++) {
                    annotated[i].setAttribute("style", "background-color: #e9e9e9;")
                }
            } else {
                this.setState({
                showComponent: false,
                }) 
                break
            }
        }
    }

    onAnnotatedClick(){
        let annotated = document.getElementsByClassName("yinw")
        for (let i = 0; i < annotated.length; i++) {
            if (annotated[i]) {
                annotated[i].onclick = () => {
                    this.setState({ curAnnotation: this.props.annotations[this.props.track.annotationIds[this.props.track.annotated_lyrics.indexOf(document.getElementsByClassName("yinw")[i].innerText)]].id, showAnnotation: !this.state.showAnnotation})
                    console.log(this.state.curAnnotation)
                    for (let i = 0; i < annotated.length; i++) {
                        if (this.state.curAnnotation === this.props.annotations[this.props.track.annotationIds[this.props.track.annotated_lyrics.indexOf(document.getElementsByClassName("yinw")[i].innerText)]].id && this.state.showAnnotation === true){
                            annotated[i].setAttribute("style", "background-color: #ffff64;")
                        } else {
                            annotated[i].setAttribute("style", "background-color: #e9e9e9;")
                        }
                    }
                }
            }
        }
    }
       
    gText(){
    let t = '';
    t = console.log(document.getSelection().toString());
    document.getElementsByClassName('track-lyrics-body').value = t;
    }

    render(){
        this.onAnnotatedClick()
        let selected;
        let _selected;
        if (document.getSelection()){
            selected = document.getSelection().toString()
            _selected == new RegExp(`/${selected}/gi`)
        } 
        console.log(selected)
        if (this.props.track.lyrics === undefined) return null;
        const renderLyrics = () => {
            let foundAnnotation = this.props.track.lyrics;
            for (let i = 0; i < this.props.track.annotated_lyrics.length; i++) {
                let lyrAnn = this.props.track.annotated_lyrics[i]
                let replaceable = new RegExp(lyrAnn, "gi")
                let currentAnnotation = foundAnnotation.replace(replaceable, `<span id="yinw" class="yinw" >${lyrAnn}</span>`)
                if (currentAnnotation !== lyrAnn) {
                    foundAnnotation = currentAnnotation;
                }
            }
            return { __html: foundAnnotation }
        }
        return(
            <div className="track-lyrics">
                <div hidden className="track-lyrics-body"><pre>{this.props.track.lyrics}</pre></div>
                <pre><div onMouseUp={this.onHighlight} dangerouslySetInnerHTML={renderLyrics()} className="track-lyrics-body"></div></pre>
                {this.state.showComponent && this.props.curUserId ?
                    <CreateAnnotationFormContainer trackId={this.props.trackId} selectedLyrics={selected} toggleAnnotationForm={this.toggleAnnotationForm} /> :
                    null
                } 
                {this.state.showComponent && !this.props.curUserId ?
                    <div className="outer-not-signed-creating-anno">
                        <div className="not-signed-creating-anno">
                            <Link className="anno-link" to="/signup">Sign up </Link>
                            or  
                            <Link className="anno-link" to="/login"> login </Link>
                            to start annotating
                        </div> 
                    </div>
                        :null
                }
                {this.state.showAnnotation ?
                    <div>
                    <AnnotationShowContainer annotationId={this.state.curAnnotation} annotation={this.props.annotations[this.state.curAnnotation]} toggleShowAnnotation={this.toggleShowAnnotation}
                    />
                    </div> : null
                }
            </div>
        )
    }
}


export default Lyrics;