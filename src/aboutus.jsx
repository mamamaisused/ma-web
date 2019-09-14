import React from 'react';
import 'antd/dist/antd.css';
import './home.css';
import { PageHeader, Menu, Dropdown, Icon, Button, Tag, Typography, Row } from 'antd';

const { Paragraph } = Typography;


class AboutUsPage extends React.Component {
    render() {
        const IconLink = ({ src, text }) => (
            <a
                style={{
                    marginRight: 16,
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <img
                    style={{
                        marginRight: 8,
                    }}
                    src={src}
                    alt="start"
                />
                {text}
            </a>
        );

        const content = (
            <div className="content">
                <Paragraph>
                    2015年毕业于西安交通大学，获得电气工程硕士学位。热爱编程，电气和机械。
              </Paragraph>
                <Paragraph>
                    目前就职于上海羿弓精密科技有限公司。具有非常丰富的工业产品的软件和结构设计经验，具有一年STEAM教育授课经验。
              </Paragraph>
                <Row className="contentLink" type="flex">
                    <div style={{display:'flex'}}>
                    <Icon style={{fontSize:'20px',marginRight:'10px'}} type="phone" theme="twoTone" />
                    <h3 style={{marginRight:'30px'}}>13817154883</h3></div>
                    <div style={{display:'flex'}}>
                    <Icon style={{fontSize:'20px',marginRight:'10px'}} type="mail" theme="twoTone" />
                    <h3>malichao@wingbow.com.cn</h3></div>
                </Row>
            </div>
        );

        const Content = ({ children, extraContent }) => {
            return (
                <Row className="content" type="flex">
                    <div className="main" style={{ flex: 1 }}>
                        {children}
                    </div>
                    <div
                        className="extra"
                        style={{
                            marginLeft: 80,
                        }}
                    >
                        {extraContent}
                    </div>
                </Row>
            );
        };

        return (
            <div>
                <PageHeader
                    title="马立超"
                    subTitle="工程师"
                    tags={<div><Tag color="blue">电气</Tag><Tag color="blue">软件</Tag></div>}
                    avatar={{ 
                        src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4',
                        size: 'large'
                    }}
                >
                    <Content>
                        {content}
                    </Content>
                </PageHeader>
            </div>
        )
    }
}

export default AboutUsPage;