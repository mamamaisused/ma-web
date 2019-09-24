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
    //代表每个选择题的选择内容，0表示未选择
    state = {
        state0 : 0,
        state1 : 0,
        state2 : 0,
        state3 : 0,
        state4 : 0,
        state5 : 0,
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
            let _states = [{state0: _sv},{state1: _sv},{state2: _sv},{state3: _sv},{state4: _sv},{state5: _sv}]
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
                                    <Radio value={1}>学龄前</Radio>
                                    <Radio value={2}>1~2年级</Radio>
                                    <Radio value={3}>3~4年级</Radio>
                                    <Radio value={4}>5~6年级</Radio>
                                </Radio.Group>
                            </Card>
                        </Timeline.Item>
                        <Timeline.Item
                         dot={this.state.state1>0?timelineselected:timeline}
                         color={this.state.state1>0?"blue":"gray"}>
                            <Card title="您接触过积木类玩具吗" 
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
                        <Timeline.Item
                         dot={this.state.state2>0?timelineselected:timeline}
                         color={this.state.state2>0?"blue":"gray"}>
                            <Card title="您有编程经验吗" 
                            style={{ marginLeft:"10px", width: 300 }}
                            >
                                <Radio.Group onChange={onChange(2)}>
                                    <Radio value={1}>没有</Radio>
                                    <Radio value={2}>学过Scratch</Radio>
                                    <Radio value={3}>学过C语言</Radio>
                                    <Radio value={4}>学过Python</Radio>
                                </Radio.Group>
                            </Card>
                        </Timeline.Item>
                        <Timeline.Item
                         dot={this.state.state3>0?timelineselected:timeline}
                         color={this.state.state3>0?"blue":"gray"}>
                            <Card title="与他人合作完成过项目吗" 
                            style={{ marginLeft:"10px", width: 300 }}
                            >
                                <Radio.Group onChange={onChange(3)}>
                                    <Radio value={1}>是</Radio>
                                    <Radio value={2}>否</Radio>
                                </Radio.Group>
                            </Card>
                        </Timeline.Item>
                        <Timeline.Item
                         dot={this.state.state4>0?timelineselected:timeline}
                         color={this.state.state4>0?"blue":"gray"}>
                            <Card title="更倾向于实用还是美观" 
                            style={{ marginLeft:"10px", width: 300 }}
                            >
                                <Radio.Group onChange={onChange(4)}>
                                    <Radio value={1}>实用</Radio>
                                    <Radio value={2}>美观</Radio>
                                </Radio.Group>
                            </Card>
                        </Timeline.Item>
                        <Timeline.Item
                         dot={this.state.state5>0?timelineselected:timeline}
                         color={this.state.state5>0?"blue":"gray"}>
                            <Card title="遇到问题您倾向于怎么解决" 
                            style={{ marginLeft:"10px", width: 300 }}
                            >
                                <Radio.Group onChange={onChange(5)}>
                                    <Radio value={1}>自己解决</Radio>
                                    <Radio value={2}>和小伙伴商量</Radio>
                                    <Radio value={3}>问老师</Radio>
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