import React from 'react';
import { List, Avatar } from 'antd';
import GoodsRequest from '../../../Requests/Goods';

class GoodsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            goodsList: []
        };

        this.request = new GoodsRequest();
    }

    componentDidMount(){
        this.request.getGoods(this);
    }

    render() {
        let {goodsList} = this.state;
        return (
        <List
            itemLayout="horizontal"
            dataSource={goodsList}
            renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    key={item.id}
                    title={item.name}
                    description={`Код: ${item.code} Авто: ${item.brandName} ${item.modelName}`}
                  />
                </List.Item>
              )}
        />
        );
    }
}

export default GoodsList;