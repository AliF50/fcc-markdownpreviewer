import React, { Component } from 'react';
import MarkDownPreview from './MarkDownPreview';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {Grid, Row, Col} from 'react-bootstrap';

class MarkDown extends Component{
	constructor(props){
			super(props);
			this.state = {value: '# h1\n## h2\n*italic*\n**bold**\n~~strikethrough~~\n```code```'};
			this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event){
		this.setState({value: event.target.value});
	}
	render(){
		return(
			<Grid>
				<Row className =  "show-grid">
					<Col xs={4} xsOffset = {2}>
						<h1>Markdown Previewer</h1>
						<p>Write your markdown in the textarea to the left and the preview will be shown on the left</p>
					</Col>
				</Row>
				<Row className = "show-grid">
					<Col xs={6} md={4}>
						<h3>Markdown</h3>
						<hr />
			    		<textarea style = {{height: 200}} value = {this.state.value} onChange = {this.handleChange} />
			    	</Col>
			    	<Col xs={6} md={4}>
			    		<h3>Markdown Preview</h3>
			    		<hr />
						<MarkDownPreview markDownText = {this.state.value}/>
					</Col>
				</Row>
			</Grid>
		);
	}
}

export default MarkDown;