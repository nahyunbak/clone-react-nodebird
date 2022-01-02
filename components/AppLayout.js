import PropTypes from 'prop-types';
import Link from 'next/link';
import { Input, Menu, Row, Col } from 'antd';
import { useState } from 'react';

const AppLayout =({ children }) =>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div>
        <Menu mode = "horizontal">
            <Menu.Item>
                <Link href="/"><a>노드버드</a></Link>
            </Menu.Item>
            <Menu.Item>
                <Link href="/profile"><a>프로필</a></Link>
            </Menu.Item>
            <Menu.Item>
                <Input.Search enterButton style={{verticalAlign:'middle'}}/>
            </Menu.Item>
            <Menu.Item>
                <Link href="/signup"><a>회원가입</a></Link>
            </Menu.Item>
        </Menu>
        <Row gutter={8}>
            <Col xs={24} md={6}>
                {isLoggedIn ? <UserProfile /> : <LoginForm/>}
            </Col>
            <Col xs={24} md={12}>
                 {children}
            </Col>
            <Col xs ={24} md={6}>
                <a href="https://www.zerocho.com" target="_blank" rel="noreferrer noopener"/>
            </Col>
        </Row>
           
        </div>
    )
};

// node :  return 안에 들어갈 수 있는 모든 것이 node
AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AppLayout;