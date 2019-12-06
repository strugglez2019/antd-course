import React from 'react';
const Picture = (props => {
    return (
        <div>
            <img src={props.src} />
            {props.children}
        </div>
    )
})      
class ShoppingList extends React.Component {
    render() { 
        const picture = {
            src: 'https://www.jczyfww.com/upload/images/user/201912041028308634.jpg',
          };        
        return (
            <div className="shopping-list">
            <h1>Shopping List for {this.props.name}</h1>
            <img src={this.props.src} />
            <ul>
                <li>Instagram</li>
                <li>WhatsApp</li>
                <li>Oculus</li>
            </ul>
                <Picture src={picture.src}>
                {/* // 这里放置的内容就是 props.children */}
                <h2>我是chlidren</h2>
                </Picture>
            </div>
        )
    }
}

export default ShoppingList;