import React from "react";

class ToDoForm extends React.Component{
    render(){
        return (
            <div>
                <form>
                    <input className="text" type="text" placeholder="what i need to do, today?" value={this.props.text} onChange={this.props.onChange}></input>
                    <input className="button" type="button" value="+" onClick={this.props.onClick}></input>
                </form>
            </div>
        )
    }
}

export default ToDoForm;