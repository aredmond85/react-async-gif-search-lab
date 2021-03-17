import React, { Component } from 'react';

class GifList extends Component {
    renderGif = () =>{
        return this.props.gifs.map((gif) => {
         return <li key={gif.id}><img src={gif.images.original.url} alt='Giphy' /></li>
        });
       }

    render(){
        return (
        <ul>
            {this.renderGif()}
        </ul>
        )
    }
}
 
export default GifList;