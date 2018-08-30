import React from "react";

class ToDoList extends React.Component{
    render(){
        const items = this.props.items;
        return (
            <div>
                <ul>
                    {items.map( (item, index) => {
                        return (<li key={index}>{item} <input type="button" value="delete" data-key={index} onClick={this.props.onClick}></input></li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default ToDoList;