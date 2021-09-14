import React, { useState, useEffect, useMemo } from 'react';
import { List, Button, Modal } from 'antd';
import BrandRequest from '../../../Requests/Brands';
import BrandEditor from './Editor';
import BrandContext from '../../../BrandContext';

const BrandList = () => {
    const [brandList, setBrandList] = useState([]);
    const [isModalVisible, setMadalVisibility] = useState(false);
    const [brandName, setBrandName] = useState('');
    const requests = useMemo(() => new BrandRequest(), []);

    const handleOk = () => {
        requests.createBrand({brandName, setBrandName, brandList, setBrandList});
        setMadalVisibility(false);
    }

    const handleCancel = () => {
        setMadalVisibility(false);
    }

    const showAddForm = () => {
        setMadalVisibility(true)
    };

    useEffect(() => {
        requests.getBrands({brandList, setBrandList});
    }, [brandList, requests]);

    return(
        <BrandContext.Provider value={{brandName, setBrandName}} >
            <Button onClick={showAddForm}>+</Button>
            <List
                itemLayout="horizontal"
                dataSource={brandList}
                renderItem={item => (
                    <List.Item>
                      <List.Item.Meta
                        key={item.id}
                        title={item.name}
                      />
                    </List.Item>
                  )}
            />
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <BrandEditor />
            </Modal>
        </BrandContext.Provider>
    );
};

export default BrandList;