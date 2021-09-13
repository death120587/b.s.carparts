import React from "react";
import { Layout } from "antd";
import HeaderLayout from './Header';

const {Content, Footer} = Layout;

class MainLayouyt extends React.Component {

    render() {
        return(
            <Layout className="layout" style={{ minHeight: "100vh" }}>
                <HeaderLayout />
                <Content style={{ padding: '0 50px', background: '#FFF' }}>
                    {this.props.children}
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        );
    }
}

export default MainLayouyt;