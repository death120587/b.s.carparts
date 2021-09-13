import React from 'react';
import { List, Avatar } from 'antd';
import ModelRequest from '../../../Requests/Model';

class ModelList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modelList: []
        };

        this.request = new ModelRequest();
    }

    componentDidMount(){
        this.request.getModels(this);
    }

    render() {
        let {modelList} = this.state;
        return (
        <List
            itemLayout="horizontal"
            dataSource={modelList}
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

export default ModelList;