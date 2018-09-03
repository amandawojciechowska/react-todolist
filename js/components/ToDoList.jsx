import React from "react";

class ToDoList extends React.Component{
    render(){
        const items = this.props.items;
        return (
            <div className="list">
               <ul>
                   {items.map( (item, index) => {
                       return (<li key={index}>
                               <label><input type="checkbox" id="cbx"></input> <span>{item}</span> </label>
                               <input type="button" value="x" data-key={index} onClick={this.props.onClick}></input></li>)
                        })
                    }
               </ul>
            </div>
        )
    }
}

export default ToDoList;