import React from 'react';
import { List, Avatar } from 'antd';
import BrandRequest from '../../../Requests/Brands';

class BrandList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            brandList: []
        };

        this.request = new BrandRequest();
    }

    componentDidMount(){
        this.request.getBrands(this);
    }

    render() {
        let {brandList} = this.state;
        return (
        <List
            itemLayout="horizontal"
            dataSource={brandList}
            renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    key={item.id}
                    title={item.name}
                    //description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                  />
                </List.Item>
              )}
        />
        );
    }
}

export default BrandList;