import React from 'react';
import ShoppingList from './ShoppingList';

class Content extends React.Component {    
    render() {
        const picture = {
            src: './public/3.jpg'
        };
        return (
            <ShoppingList name="李四" src={picture.src}></ShoppingList>
            
        )
    }
}

export default Content;