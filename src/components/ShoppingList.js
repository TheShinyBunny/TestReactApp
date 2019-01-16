import React, { Component } from 'react';

export class ShoppingList extends Component {

    constructor() {
        super();
        this.state = {
            items: ["Your shopping list is empty!"],
            value: "",
            hasItems: false
        }
    }

    /**
     * 
     * @param {React.KeyboardEvent<HTMLInputElement>} e 
     */
    addItem(e) {
        if (e.key === 'Enter') {
            let items = this.state.items;
            if (!this.state.hasItems) {
                items = [];
            }
            items.push(e.target.value);
            this.setState({hasItems: true, value: "", items});
        }
    }

    removeItem(i) {
        if (this.state.hasItems) {
            let items = this.state.items;
            items.splice(i,1);
            if (items.length === 0) {
                items.push("Your shopping list is empty!");
                this.setState({hasItems: false});
            }
            this.setState({items});
        }
        
    }

    render() {
        const items = this.state.items.map((item,i)=><ShoppingItem real={this.state.hasItems} key={i} content={item} onRemove={this.removeItem.bind(this,i)} />);
        return (
            <div className="shoppingList">
                <ul>
                    {items}
                </ul>
                <input value={this.state.value} className="addItem" onChange={(e)=>this.setState({value: e.target.value})} onKeyPress={this.addItem.bind(this)}/>
            </div>
        );
    }
}

export class ShoppingItem extends React.Component {

    render() {
        return (
            <li className={this.props.real ? "shoppingItem" : ""} onClick={this.props.onRemove}>
                {this.props.content}
            </li>
        );
    }
}