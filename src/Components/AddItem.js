import React, { Component, Fragment } from 'react'

// const AddItem = (props) => {
//     console.log(props)
//     
class AddItem extends Component{
    handleBtnClick = () => {
        const { onClick } = this.props;
        onClick()
    }
    inputChange = (e) => {
        const { onChange } = this.props;
        onChange(e.target.value)
    }
    render (){
        return (
             <Fragment>
            <input 
                className='input is-primary inputWidth'
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