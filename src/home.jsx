import React from 'react';
import { Layout, Menu, Rate, Carousel, Modal, Descriptions} from 'antd';
import 'antd/dist/antd.css';
import gameico from './assets/game.png';
import gameico2 from './assets/youxi.png';
import shareico from './assets/fenxiang.png';
import './home.css';

const { Header, Content, Footer } = Layout;

class HomePage extends React.Component {
    state = {
        pageindex : "home"
    };

    render() {
        return (
            <Layout className="layout">
                <Header style={{height:'50px'}}>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={["home"]}
                        style={{ lineHeight: '50px' }}
                        onSelect={(props) => {
                            console.log(props.key)
                            this.setState(
                                {
                                    pageindex: props.key
                                }
                                );
                        }}
                    >
                        <Menu.Item key="home">首页</Menu.Item>
                        <Menu.Item key="smartdevice">智能硬件</Menu.Item>
                        <Menu.Item key="3">联系我们</Menu.Item>
                    </Menu>
                </Header>
                <SubPage pageindex={this.state.pageindex} />
                <Footer style={{textAlign: 'center' }}>Designed by Ma Lichao</Footer>
            </Layout>
        )
    }

    componentDidMount() {
        //document.getElementById('root').style.height = '900px';
    }
}

class SubPage extends React.Component{
    render(){
        if(this.props.pageindex === "home"){
            return(
                <Content style={{ padding: '30px 30px 0px 30px' }}>
                    <div style={{ background: '#fff', display: 'flex', height: '100%' }}>
                        {(() => { return <div></div> })()}
                        <BoxContainer amount = {5}/>
                    </div>
                </Content>
            )
        }
        else if(this.props.pageindex === "smartdevice"){
            return(
                <DisplayPage />
            )
        }
        else{
            return(
            <Content style={{ padding: '30px 30px 0px 30px' }}>
            </Content>
            )
        }
    }
}

class DisplayPage extends React.Component{
    render(){
        let boxList = [gameico,gameico2,shareico];
        return(
            <div>
                <Carousel>
                {boxList.map((item, index) => {
                    return <div onClick={()=>{console.log(index)}} key={index}><img src={item}/></div>
                 })}
                </Carousel>
            </div>
        )
    }
}

class BoxContainer extends React.Component{
    state = {
        modalVisible: false,
        selectedkey: 0
    }

    setModalVisible(val) {
        this.setState({ modalVisible: false});
    }

    render(){
        let boxList = [gameico,gameico2,shareico]
        let modalText = () => {
            if(this.state.selectedkey === 0){
                return(
                <Descriptions title="模块名称">
                    <Descriptions.Item label="适合年龄">5~10周岁</Descriptions.Item>
                    <Descriptions.Item label="难度等级"><Rate allowHalf disabled defaultValue={3.5} /></Descriptions.Item>
                    <Descriptions.Item label="知识点">if else, while</Descriptions.Item>
                    <Descriptions.Item label="简介">小车遇到障碍物会自动停止并调整角度继续行驶</Descriptions.Item>
                </Descriptions>
                )
            }
        }
        return(
            <div 
            style={{display:'flex',width:'100%',flexWrap:'wrap',alignContent:'flex-start',justifyContent:'center'}}
            >
                <div style={{display:'flex',height:'15px',width:'100%'}}/>
                {boxList.map((item, index) => {
                    return <Box onClick={()=>{this.setState({modalVisible:true,selectedkey:index})}} key={index} icon={item} size={'200px'}/>
                 })}
                 <div style={{display:'flex',height:'15px',width:'100%'}}/>
                 <Modal 
                        title="Details"
                        centered
                        visible={this.state.modalVisible}
                        onOk={() => {this.setModalVisible(false)}}
                        onCancel={() => this.setModalVisible(false)}
                >
                    {modalText()}
                </Modal>
            </div>
        )
    }
}

class Box extends React.Component{
    render(){
        return(
            <div onClick={this.props.onClick}
             style={{
                width: this.props.size,
                height:this.props.size,
                backgroundColor:'#FFFFFF',
                margin:'15px',
                borderRadius:'5px',
                border:'2px dashed',
                borderColor:'rgb(214,214,214)'
                }}>
            <div className={'btn bubble'}>
                <img style={{display:'flex',height:'100%'}} src={this.props.icon}/>
            </div>
            </div>
        )
    }
}

export default HomePage;