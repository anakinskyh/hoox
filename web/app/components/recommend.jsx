import React from 'react'
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';

export default class Recommend extends React.Component{
    render(){
        return(
            <div className="recommend">
                <Row>
                    <Col xs={3} sm={3} md={3} lg={3}>
                        Y11111
                    </Col>
                    <Col xs={3} sm={3} md={3} lg={3}>
                        Y2
                    </Col>
                </Row>
            </div>
        );
    }
}