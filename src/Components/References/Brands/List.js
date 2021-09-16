import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { List, Button, Modal } from 'antd';
import BrandEditor from './Editor';
import BrandContext from '../../../BrandContext';

const BrandList = () => {
    const [brandList, setBrandList] = useState([]);
    const [editingBrand, setEditBrand] = useState(null);
    const [isEditing, setEditAttribute] = useState(false);
    const [isModalVisible, setMadalVisibility] = useState(false);

    /**
     * Modal window "OK" button event hendler
     */
    const handleOk = () => {
        setMadalVisibility(false);

        if(isEditing) {
            setEditAttribute(false);
            editBrand();
        } else {
            createBrand();
        }
    }

    /**
     * Modal window "Cancel" button event hendler
     */
    const handleCancel = () => {
        setMadalVisibility(false);
        setEditBrand({name: ''});

        if(isEditing) {
            setEditAttribute(false);
        }        
    }

    /**
     * Show modal window of elment creating/editing
     */
    const showAddForm = () => {
        setMadalVisibility(true)
    };

    /**
     * Click event handler of list item
     * @param {*} item 
     */
    const listItemClick = (item) => {
        setEditBrand({name: item.name, id: item.id});
        setEditAttribute(true);
        showAddForm();
    };

    /**
     * Clearing edit item
     */
    const clearEditingItem = () => {
        setEditBrand({name: '', id: null});
    }

    /**
     * Edit "Brand" request
     */
    const editBrand = () => {
        axios.put(`/brands/${editingBrand.id}`, {name: editingBrand.name})
        .then((response) => {
            clearEditingItem();
            getBrands();
        });
    }

    /**
     * Get list of "Brand"s request
     */
    const getBrands = () => {
        axios.get('/brands')
        .then((response) => {
            setBrandList(response.data);
        });
    };

    /**
     * Create "Brand" request
     */
    const createBrand = () =>  {        
        axios.post('/brands/create', {name: editingBrand.name})
        .then((response) => {
            clearEditingItem();
            this.getBrands();
        });
    };

    useEffect(() => {
        getBrands();
    }, []);

    return(
        <BrandContext.Provider value={{editingBrand, setEditBrand}} >
            <Button onClick={showAddForm}>+</Button>
            <List
                itemLayout="horizontal"
                dataSource={brandList}
                renderItem={item => (
                    <List.Item onClick={() => listItemClick(item)} key={item.id}>
                      <List.Item.Meta
                        title={item.name}
                      />
                    </List.Item>
                  )}
            />
            <Modal 
                title={(isEditing ? 'Редагування' : 'Створення') + ' марки авто' } 
                visible={isModalVisible} 
                onOk={handleOk} 
                onCancel={handleCancel}
            >
                <BrandEditor />
            </Modal>
        </BrandContext.Provider>
    );
};

export default BrandList;