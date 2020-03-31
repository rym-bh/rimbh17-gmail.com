import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addTask,deleteTask,completeTask} from '../actions/action'
//react
 class todoList extends Component {
     state={
         myInput:"",
         
     }

handleChange=(event)=>{
    this.setState({
        myInput:event.target.value
    })
}
handleADD=()=>{
this.props.addTask({
    text:this.state.myInput,
    id:Math.random(),
    isComplete:false,
   
})
this.setState({
    myInput:""
})

}


    render() {
        return (
            <>
            <header>
                <span>TODOLIST</span>
                <div className="form">
             <input value={this.state.myInput} onChange={this.handleChange}/>
        <button className="add" onClick={this.handleADD}>ADD</button> 
        </div>
            </header>
            <ul>
                
                {this.props.todos.map(el=>
                <div className="element" key={el.id}>
                   
                    
                
                    <span style={el.isComplete?{textDecoration:'line-through'}:null}>{el.text}</span>
              
                    <div className="Btn">
                    <button  onClick={()=>this.props.deleteTask(el.id)} >DELETE</button>
                    <button  onClick={()=>this.props.completeTask(el.id)} >COMPLETE</button>
                    
                    </div>
                    </div>
                    )}
                    

            </ul>
            </>
        )
    }
}


//redux
//1
const mapStateToprops=state=>{
    return{todos:state}
}
// 2
const mapDispatchToProps=dispatch=>{
    return {addTask:(payload)=>dispatch(addTask(payload)),
        deleteTask:(payload)=>dispatch(deleteTask(payload)),
        completeTask:(payload)=>dispatch(completeTask(payload)),
       
    }
}

//connect raeat to redux
export default connect(mapStateToprops,mapDispatchToProps) (todoList)
