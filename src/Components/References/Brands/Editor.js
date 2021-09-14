import React, { useContext } from 'react';
import { Input, Row, Col } from 'antd';
import BrandContext from '../../../BrandContext';

const BrandEditor = () => {
    const {brandName, setBrandName} = useContext(BrandContext);

    const onChangeName = (e) => {
        setBrandName(e.target.value);
    }

    return (
        <>
            <Row justify="start">
                <Col span={4}>Назва:</Col>
                <Col span={8}>
                     <Input value={brandName} onChange={onChangeName} />
                </Col>
            </Row>
        </>
    );
}

export default BrandEditor;