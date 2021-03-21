import React from 'react'

 class TextFill extends React.Component {
    render() {
        handleSubmit = (e) => {

        }
        return (
            <form onSubmit={this.handleSubmit}>
                <textarea className='text' >

                </textarea>
            </form>
        )
    }
}
export default TextFill;