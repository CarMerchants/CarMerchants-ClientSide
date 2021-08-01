import React from 'react';
import database from '../../firebase/firebase';

export default class FeedBackForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            feedback : "",
        };

        this.onFeedBack = this.onFeedBack.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onFeedBack(e){
        const val = e.target.value;

        this.setState(() => ({
            feedback : val ,
        }));
    };
    
    onSubmit(e){
        e.preventDefault();
        this.setState(() => ({
            feedback : "",
        }));
        database.ref("Feedback").push({
            feedback : this.state.feedback,
        }).then(() => {
            console.log("The feedback is submitted successfully....");
        });
    }

    render(){
        return (
            <div>
                <form onSubmit = {this.onSubmit} className = "FeedBackForm" id = "FeedBack">
                    <textarea
                        value = {this.state.feedback}
                        onChange = {this.onFeedBack}
                        placeholder = "Write your feedback here"
                        rows = "5"
                        cols = "20"
                        required = {true}
                    >
                    </textarea><br/>
                    <button type = "submit">Submit</button>
                </form>
            </div>
        );
    };
};