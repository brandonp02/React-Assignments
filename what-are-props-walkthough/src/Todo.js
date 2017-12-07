import React from 'react';



class Todo extends React.Component{

render(){
  console.log(this.props)
  return(
    <div>
      {this.props.bp}
      <button onClick={ this.props.alert }> Alert</button>
    </div>
  )
}

}

export default Todo
