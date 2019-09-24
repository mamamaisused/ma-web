import React from 'react';
import 'antd/dist/antd.css';
import './home.css';
import majpg from './assets/ma.jpg';
import zcjpg from './assets/zc.jpg';
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

        const content2 = (
            <div className="content">
                <Paragraph>
                2017年毕业于同济大学机械与能源工程学院，获工学学士学位。在校期间对科技比赛有着极大的兴趣，曾获得校内机器人比赛冠军，全国大学生头脑奥林匹克冠军，并在大学生智能车竞赛及智能制造全国赛中取得了优异成绩。
              </Paragraph>
                <Paragraph>
                从2015年起开始STEAM课程的教学及开发工作，曾担任华东师范大学科技夏令营主讲教练，SMG哈哈炫动全能脑力王现场裁判，有丰富的STEAM教学经验。现担任国内某教育咨询机构硬件产品经理，负责STEAM课程的硬件及相关课程开发。
              </Paragraph>
                <Row className="contentLink" type="flex">
                    <div style={{display:'flex'}}>
                    <Icon style={{fontSize:'20px',marginRight:'10px'}} type="phone" theme="twoTone" />
                    <h3 style={{marginRight:'30px'}}>15221511915</h3></div>
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
                        src: majpg,
                        size: 'large'
                    }}
                >
                    <Content>
                        {content}
                    </Content>
                </PageHeader>
                <PageHeader
                    title="张成"
                    subTitle="工程师"
                    tags={<div><Tag color="blue">机械</Tag><Tag color="blue">硬件</Tag></div>}
                    avatar={{ 
                        src: zcjpg,
                        size: 'large'
                    }}
                >
                    <Content>
                        {content2}
                    </Content>
                </PageHeader>
            </div>
        )
    }
}

export default AboutUsPage;