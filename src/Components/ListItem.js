import React, {Component} from 'react'
import classNames from 'classnames'

export default class ListItem extends Component{
    handleClick = () => {
        const { id, onClick } = this.props;
        onClick(id);
    }
    render(){
        console.log(this.props)
        return (
            <li 
                onClick={ this.handleClick }
                className={classNames('common', {'isCompleted': this.props.isComplete})}>
                {this.props.id}-{this.props.title}
            </li>
        )
    }
}