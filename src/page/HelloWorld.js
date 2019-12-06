import Square from './Square';
import { Card } from 'antd';
import 'antd/dist/antd.css'
export default () => {
    const style = {
        width: '400px',
        margin: '30px',
        boxShadow: '0 4px 8px 0 rgna(0, 0, 0, .2)',
        border: '1px solid #e8e8e8',
    }
  return (
  <div>
      {/* <Square></Square> */}
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
      <span style={{textAlign:'center', margin:'10px auto'}}>hello world</span>
    </div>
    );
}
