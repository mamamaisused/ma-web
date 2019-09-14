import React from 'react';
import { Layout, Icon, Timeline, Typography, Card, Radio, Button, Modal } from 'antd';
import 'antd/dist/antd.css';
import './exampage.css'
import mlc from './assets/mlc.png';
import logo from './assets/logo.png';
import Legopic from './assets/LEGO.png';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

const { Header, Content, Footer } = Layout;
const {Title} = Typography;


class ExamPage extends React.Component{
    state = {
        state0 : 0,
        state1 : 0
    }

    submit = () => {
        let stateret = Object.values(this.state);
        let unanswered = [];
        console.log(stateret);
        stateret.forEach(
            (value,index)=>{
                if(value === 0){unanswered.push(index+1)}
            }
        )
        console.log(unanswered);
        if(unanswered.length>0)
            alert('您有题目未回答')
        else
            subsuccess();
    }

    render(){
        const timeline = <Icon type="question-circle" style={{ fontSize: '16px' }}/>
        const timelineselected = <Icon type="check-circle" style={{ fontSize: '16px' }}/>
        let onChange =(index)=>{            
            return(
            e => {
            let _sv = e.target.value
            let _states = [{state0: _sv},{state1: _sv}]
            console.log('onChange',index);
            this.setState(
                _states[index]
                );
          })}
        return(
            <div>
                <Header style={{ height: '60px', padding: "0px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Link style={{display:'flex'}} to="/"><Icon style={{ fontSize: "30px",color:'white'}} type="left-circle"/></Link>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={logo} className={'logo head'} />
                        <img src={mlc} style={{ height: '50px' }} className={'logo head'} />
                    </div>
                </Header>
                <div className="exam body">
                    <Title level={2}>L0-入学测试</Title>
                    <br/>
                    <Timeline>
                        <Timeline.Item
                         dot={this.state.state0>0?timelineselected:timeline}
                         color={this.state.state0>0?"blue":"gray"}>
                            <Card title="您的年龄" style={{ marginLeft:"10px", width: 300 }}>
                                <Radio.Group onChange={onChange(0)}>
                                    <Radio value={1}>未上小学</Radio>
                                    <Radio value={2}>1~3年级</Radio>
                                    <Radio value={3}>4~6年级</Radio>
                                    <Radio value={4}>中学</Radio>
                                </Radio.Group>
                            </Card>
                        </Timeline.Item>
                        <Timeline.Item
                         dot={this.state.state1>0?timelineselected:timeline}
                         color={this.state.state1>0?"blue":"gray"}>
                            <Card title="您玩过乐高吗" 
                            style={{ marginLeft:"10px", width: 300 }}
                            cover={<img alt="example" src={Legopic}/>}
                            >
                                <Radio.Group onChange={onChange(1)}>
                                    <Radio value={1}>玩过大颗粒</Radio>
                                    <Radio value={2}>玩过小颗粒</Radio>
                                    <Radio value={3}>玩过wedo/EV3</Radio>
                                    <Radio value={4}>从未玩过</Radio>
                                </Radio.Group>
                            </Card>
                        </Timeline.Item>
                    </Timeline>
                    <Button size="large" type="primary" style={{display:'flex'}} onClick={this.submit}>提交</Button>
                </div>
            </div>
        )
    }
}

function subsuccess() {
    Modal.success({
      title: 'Confirm',
      content: 'Bla bla ...',
      okText: '确认',
      cancelText: '取消',
    });
  }
  

export default ExamPage;