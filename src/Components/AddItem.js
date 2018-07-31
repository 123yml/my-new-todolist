import React, { Component, Fragment } from 'react'

// const AddItem = (props) => {
//     console.log(props)
//     
class AddItem extends Component{
    handleBtnClick = () => {
        const { onClick } = this.props;

    }
    inputChange = () => {

    }
    render (){
        return (
             <Fragment>
            <input 
                className='input is-primary'
                type='text'
                value={this.props.inputValue}
                onChange={this.inputChange}
            />
            <button
                className='button is-primary'
                onClick={ this.handleBtnClick }    
            >
                添加
            </button>
        </Fragment>
        )
    } 
}
    


export default AddItem