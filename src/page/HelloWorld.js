import React from 'react';
import Square from './Square';
import { Card, Tabs, Tree } from 'antd';
import 'antd/dist/antd.css'




const MyInput = ({ onChange }) => (        
    <input onChange={onChange} />
  );


class Demo extends React.Component {
    onTextChange = (event) => {
      console.log(event.target.value);
    }
    onTextReset = () => {
        // 我该怎么做？
        // 拿到 MyInput 内部的 input 元素然后设置 value 为 ''？
        console.log('reset');
      }
  
    render() {
      return (
        <div>
        <MyInput onChange={this.onTextChange} />
        <button onClick={this.onTextReset}>Reset</button>
        </div>
      );
    }
  }

    const MyInputA = ({ value = '' ,onChange }) => (        
        <input value={value} onChange={ onChange } />                
    );

    class DemoA extends React.Component {
        constructor(){
            super();
            this.state = {
                text: '11111'
            }
        }
        

        onTextChange= (event)=>{
            // this.setState({
            //     text: event.target.value,
            // })
            console.log(event);
            this.setState({ text: event.target.value });
        }

        onTextReset = ()=>{
            this.setState({
                text:''
            })
        }

        render(){
            return (
                <div>
                <MyInputA value={ this.state.text } onChange={this.onTextChange} />
                <button onClick={this.onTextReset}>Reset</button>
                </div>
            );
        }
    }
  

const { TabPane } = Tabs;
const {TreeNode } = Tree;

function callback(key){
    console.log(key)
}
class TabsDemo extends React.Component{
    state = {
        activeKey: '1',
      }
      
    onTabChange = (activeKey) => {
        console.log(activeKey);
        this.setState({ activeKey });
    }

    render(){
        return (
            <Tabs activeKey={this.state.activeKey} onChange={this.onTabChange}>
              <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
              <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
          </Tabs>
        )
    }
}

class TreeDemo extends React.Component {
    state = {
        expandedKeys: [],
    }

    onExpand = (expandedKeys) => {
        this.setState({ expandedKeys })
    }

    onSelect = (selectedKeys) => {
        const {expandedKeys} = this.state;
        const key = selectedKeys[0];

        if(expandedKeys.includes(key)) {
            //移除 key
            this.setState({
                expandedKeys: expandedKeys.filter( k => k!==key ),
            });
        } else {
            //添加 key
            this.setState({ expandedKeys: [...expandedKeys, key]});
        }
    }

    render(){
        return (
            <Tree
            expandedKeys={this.state.expandedKeys}
            selectedKeys={[]}
            onExpand={this.onExpand}
            onSelect={this.onSelect}
            >
            <TreeNode title="parent 1" key="0-0">
                <TreeNode title="1111111" key="0-0-0" />
                <TreeNode title="2222222" key="0-0-1" />
            </TreeNode>
            </Tree>
        )
    }
}
   
export default () => {
    
    const style = {
        width: '400px',
        margin: '30px auto',
        boxShadow: '0 4px 8px 0 rgna(0, 0, 0, .2)',
        border: '1px solid #e8e8e8',
    }   

    const style1 = {
        marginRight: '20px'
    }
    
     
  return (  
          
      
  <div style={{textAlign:'center', margin:'10px auto'}}>       
      <Square></Square>
      <Card style={style} actions={[<a>操作一</a>, <a>操作二</a>]}>
          <Card.Meta
          avatar={<img 
            alt=""
            style={{width:'64px', height: '64px', borderRadius: '32px' }}
            src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png"
          />                     
          } 
          title="Alipay" 
          description="在中台产品的研发过程中，会出现不同的设计规范和实现方式"
          />
      </Card>      
      <div>hello world</div>
      <Demo />
      <DemoA/>
        <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Tab 1" key="1">
            Content of Tab Pane 1
            </TabPane>
            <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
            </TabPane>
        </Tabs>,
    mountNode,<hr />
          <Tabs>
              <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
              <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
          </Tabs>
          <hr />
          <TabsDemo />
          <hr/>
          <Tree>
            <TreeNode title="parent 1" key="0-0">
                <TreeNode title="leaf" key="0-0-0" />
                <TreeNode title="leaf" key="0-0-1" />
            </TreeNode>
            </Tree>

            <hr/>
            <TreeDemo />
    </div>
    );
}


