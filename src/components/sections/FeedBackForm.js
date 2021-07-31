import React from 'react';

export default class FeedBackForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            feedback : "",
        };

        this.onFeedBack = this.onFeedBack.bind(this);
    }

    onFeedBack(e){
        const val = e.target.value;

        this.setState(() => ({
            feedback : val ,
        }));
    };

    render(){
        return (
            <div className = "FeedBackForm" id = "FeedBack">
                <form>
                    <textarea
                        value = {this.state.feedback}
                        onChange = {this.onFeedBack}
                        placeholder = "Write your feedback here..."
                        rows = "10"
                        cols = "30"
                    >
                    </textarea><br/>
                    <button type = "submit">Submit</button>
                </form>
            </div>
        );
    };
};