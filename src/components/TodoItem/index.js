import React, { Component, Fragment } from 'react'
import { List, Button } from 'antd';

class TodoItem extends Component {
    constructor(props){
        super(props);
    };
    delItem(index){
        return this.props.delItem(index)
    };
    render(){
        return (
            <Fragment>
                <List
                    size="large"
                    bordered
                    dataSource={this.props.listData}
                    renderItem={(item, index) => <List.Item style={{display: 'flex', justifyContent: 'space-between'}}><h1>{item}</h1><Button type="primary" size="small" danger onClick={this.delItem.bind(this, index)}>Del</Button></List.Item>}
                />
            </Fragment>
        )
    }
};

export default TodoItem;