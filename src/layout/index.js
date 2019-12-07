import { Component } from 'react';
import { Layout } from 'antd';
//Header, Footer, Sider, Content 组件在Layout 组件模块下
const { Header, Footer, Sider, Content } = Layout;

class BasicLayout extends Component {
    render() {
        return (
            <Layout>
                <Sider>Sider</Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        )
    }
}

export default BasicLayout;