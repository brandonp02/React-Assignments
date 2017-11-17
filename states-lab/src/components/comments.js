import React from 'react';
import OneComment from './one-comment';

class Comments extends React.Component {
constructor(){
  super();
  this.state={
    newComments: ['working?'],
    input: ''
  }
  this.handleInput = this.handleInput.bind(this);
  this.handleClick = this.handleClick.bind(this);
}

handleClick(e){
  e.preventDefault();
  console.log('I just clicked the button');

  this.setState({
    newComments: this.state.newComments.concat([this.state.input]),
    input: ''
  });
}


handleInput(e){
  this.setState({
    input: e.target.value
  })

  console.log('handleInput update-' + this.state.input)
}


conponentDidUpdate(){
  if(this.state !== ''){
    console.log('conponentDidUpdate log-' + this.state.input)
  }
}


  render() {
    // debugger
    const comments = this.props.comments.map( (item, index) => <OneComment key={index} comment={item}/>)
    const newComments = this.state.newComments.map( (item, index) => <OneComment key={index} newComment={item}/>)

    return (
      <div>
        <form>

          <input placeholder= " " onChange= {this.handleInput} value={this.state.input}/>
            <button onClick={this.handleClick}>Add Comment</button>

      <div className="wrap">
        {newComments}
      </div>

        <div className="wrap">
          {comments}
        </div>

            </form>
          </div>
    );
  }
}

export default Comments;
