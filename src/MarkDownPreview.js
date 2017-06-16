import React, {Component} from 'react';
import marked from 'marked';

class MarkDownPreview extends Component{
	getMarkup(value){
		let md = marked(value, {sanitize: true});
		return {__html: md};
	}
	render(){
		return(
			<div>
				<p dangerouslySetInnerHTML = {this.getMarkup(this.props.markDownText)}></p>
			</div>
		);
	}
}

export default MarkDownPreview;