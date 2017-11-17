import React from 'react';



class Todo extends React.Component{
  constructor(){
    super();
    this.state={
      complete: false,
      newInput: '',
      showUpdateField: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.updateProp = this.updateProp.bind(this)
    this.updateInput = this.updateInput.bind(this)
    // manualling bind your functions here

  }


  handleClick(e){
    e.preventDefault();
    this.setState({
      complete: true
    })

  }

  updateInput(e){
    e.preventDefault()
    this.setState({
      newInput: e.target.value
    })
  }

  updateProp(e){
    e.preventDefault()
    this.props.update([this.props.task, this.state.newInput]);
    this.setState({
      showUpdateField: false
    })
  };


// Don't worry about the code below.
// There was a bug in the app where if you click complete on a task and then
// delete the task, the following task was marked complete.
// This function below prevents that behaviour from happenning.
// to learn more about how this method works below, check out react lifecycles.
// Docs-----
// https://facebook.github.io/react/docs/react-component.html#componentwillreceiveprops
componentWillReceiveProps(nextProps){
  if(nextProps !== this.props){
    this.setState({
      complete: false
    })
  }
}


render(){
  return(

    <div>
      <li>{this.props.task} <br/>
      {/* change  the below code from a function to a variable */}
        <button onClick={ ()=>this.props.del(this.props.task) }>Delete</button>

        {this.state.complete ?

        <button onClick={ () => this.setState({complete: false}) }>Not Complete</button> :
        <button onClick={ () => this.setState({complete: true}) }>Complete</button>
        }

        {this.state.showUpdateField ?
            <button onClick={this.updateProp}>Done Updating</button> :
            <button onClick={ ()=> this.setState({ showUpdateField: true }) }>
            Update</button>
          }
        </li>



      {this.state.showUpdateField ?
        <form onSubmit={ this.updateProp }>
        <input placeholder={this.props.task} onChange={ this.updateInput }/>
        </form> :
        ""
      }
        <br/>
      {/* change  the below code from a function to a variable */}
      {this.state.complete ? "mission complete" : "Mission NOT Complete"}

      <br/>

    </div>
    )
  }
}



export default Todo;
