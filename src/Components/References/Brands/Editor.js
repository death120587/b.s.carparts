import React, { useContext } from 'react';
import { Input, Row, Col } from 'antd';
import BrandContext from '../../../BrandContext';

const BrandEditor = () => {
    const {editingBrand, setEditBrand} = useContext(BrandContext);

    const onChangeName = (e) => {
        setEditBrand({id: editingBrand?.id, name: e.target.value});
    }

    return (
        <>
            <Row justify="start">
                <Col span={4}>Назва:</Col>
                <Col span={8}>
                     <Input value={editingBrand?.name} onChange={onChangeName} />
                </Col>
            </Row>
        </>
    );
}

export default BrandEditor;