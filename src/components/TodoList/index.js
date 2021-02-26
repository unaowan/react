import React, { Component, Fragment } from 'react';
import { Input, Button } from 'antd';
import TodoItem from '../TodoItem/index.js';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputVal: '',
            listData: []
        };
        this.changeInput = this.changeInput.bind(this);
        this.clickAdd = this.clickAdd.bind(this);
        this.delItem = this.delItem.bind(this);
    };
    changeInput(e){
        this.setState ( 
            {
                inputVal: e.currentTarget.value
            }
        );
    };
    clickAdd(){
        if(this.state.inputVal){
            this.setState((state) => {
                
                return {
                    listData: [...state.listData, state.inputVal],
                    inputVal: ''
                }
            })
        }
    };
    delItem(index){
        this.setState((state)=>{
            state.listData.splice(index, 1)

            return {
                listData: [...state.listData]
        }});
    };
    render () {
        return (
                <Fragment>
                    <div style={{ margin: '10px', width:'300px' }}>
                        <div style = {{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <Input placeholder="todo content"  value={this.state.inputVal} onChange={this.changeInput}/>
                            <Button type="primary" onClick={this.clickAdd}>Add</Button>
                        </div>
                        <TodoItem listData={this.state.listData} delItem={this.delItem}></TodoItem>
                    </div>
                </Fragment>
            )
    }
};

export default TodoList;