import React from 'react';
import ReactDOM from 'react-dom';
import "../scss/main.scss";
import Title from "./components/Title.jsx";
import ToDoForm from "./components/ToDoForm.jsx";
import ToDoList from "./components/ToDoList.jsx";

document.addEventListener('DOMContentLoaded', function(){
    
    
    class App extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                text: "",
                items: []
            };
        }
        
        handleChange = (e) => {
            this.setState({
                text: event.currentTarget.value
            })
        }
        
        addItem = (e) => {
            let newItem = this.state.text;
            if (localStorage.getItem('items') == null){
                let items = [];
                items.push(newItem);
                localStorage.setItem("items", JSON.stringify(items));
            }else{
                let items = JSON.parse(localStorage.getItem('items'));
                items.push(newItem);
                localStorage.setItem('items', JSON.stringify(items))
            }
            this.setState({
                items: JSON.parse(localStorage.getItem('items'))
            })
            
            console.log(newItem);
        }
        
        
        removeItem = (e) => {
            let index = e.target.getAttribute("data-key");
            let list = JSON.parse(localStorage.getItem("items"));
            list.splice(index, 1);
            this.setState({
                items: list
            })
            localStorage.setItem('items', JSON.stringify(list));
        }
        
        render(){
            return(
                <div>            
                    <Title/>
                    <ToDoForm onClick={this.addItem} onChange={this.handleChange}/>
                    <ToDoList items={this.state.items} onClick={this.removeItem}/>
                </div>
            )
        }
    }
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});