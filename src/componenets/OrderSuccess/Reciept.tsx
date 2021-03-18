import React, { Component } from 'react';
import { Card } from 'antd';


class Reciept extends Component {
    
    render() {
        return(
            <Card title="Reciept" extra={<a href="#">More</a>} style={{ width: '80%' }}>
                <p>Card content {}</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        )
    }
}

export default Reciept;