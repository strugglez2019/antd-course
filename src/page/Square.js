class Square extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 'Y',
            value1: 'YYYYYYY',
            value2:'aaaaaaaaaa',
            value3:'bbbbbbbbbb',
            value4:'DDDDDDDDD',
            value5:'TTTTTTT'
        };
        this.handleClick = this.handleClick.bind(this);
    }

    setBotton(){
        console.log('on');
        this.setState({
            value1:'xxxxxxxxxxx',            
        })
    }
    handleClick(){
        this.setState({
            value2:'8888888888888'
        })
    }

    setBottomA(){
        this.setState({
            value3:'9999999'
        })
    }

    setBottomB(value,e){
        console.log(e);
        this.setState({
            value4:value
        })
    }

    render() {
        let square = {
            color:'F#59',
            width:'100px',   
            background:'#F59',
            height:'60px'         
        }
        return (
            <div>
            <button style={square} onClick={() => this.setState({ value: 'X' })}>{this.state.value}</button>
            <button style={square} onClick={() => this.setBotton()}>{this.state.value1}</button>
            <button style={square} onClick={this.handleClick}>{this.state.value2}</button>
            <button style={square} onClick={this.setBottomA.bind(this)}>{this.state.value3}</button>
            <button style={square} onClick={this.setBottomB.bind(this,'CCCCCCC')}>{this.state.value4}</button>
            <button style={square} onClick={(e)=>{this.setBottomB('GGGGGGGGGGG',e)}}>{this.state.value5}</button>
            </div>
        )
    }
}

export default Square;