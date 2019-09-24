import React from 'react';
import { Layout, Menu, Rate, Carousel, Modal, Descriptions, Icon, Drawer, PageHeader, Tag, Typography} from 'antd';
import 'antd/dist/antd.css';
import gameico from './assets/game.png';
import gameico2 from './assets/youxi.png';
import shareico from './assets/fenxiang.png';
import mlc from './assets/mlc.png';
import logo from './assets/logo.png';
import level0logo from './assets/fenzhijiedian.png';
import level1logo from './assets/block.png';
import './home.css';
import SubMenu from 'antd/lib/menu/SubMenu';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AboutUsPage from './aboutus';
import FeedBackPage from './feedbackpage';

const { Header, Content, Footer } = Layout;

class HomePage extends React.Component {
    state = {
        pageindex : "home",
        menuvisible : false
    };

    showMenu = ()=>{
        this.setState(
            {
                menuvisible: true
            }
        )
    }

    hideMenu = () => {
        this.setState({
            menuvisible: false,
        });
      };
    

    render() {
        return (
            <Layout className="layout">
                <Header style={{height:'60px',padding:"0px 20px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                    <Icon type="menu" style={{fontSize:"30px",color:"white"}} onClick={this.showMenu}/>
                    <div style={{display:'flex',alignItems:'center'}}>
                    <img src={logo} className={'logo head'}/>
                    <img src={mlc} style={{height:'50px'}}  className={'logo head'}/>
                    </div>
                </Header>
                <Drawer
                    title="目录"
                    placement="left"
                    closable={false}
                    onClose={this.hideMenu}
                    getContainer={false}
                    visible={this.state.menuvisible}
                    bodyStyle={{padding:'0px 0px 0px 20px'}}
                    style={{fontWeight:'bold'}}
                    width={200}
                >
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={["home"]}
                        defaultOpenKeys={["levels"]}
                        style={{}}
                        inlineIndent={1}
                        onSelect={(props) => {
                            console.log(props.key)
                            this.setState(
                                {
                                    pageindex: props.key,
                                    menuvisible: false
                                }
                                );
                        }}
                    >
                        <Menu.Item key="home">首页</Menu.Item>
                        <SubMenu 
                            key="levels"
                            title={
                            <span>
                                <Icon type="setting" />
                                <span>课程内容</span>
                            </span>}
                            >
                            <Menu.Item style={{marginLeft:'30px'}} key="smartdevice">智能硬件</Menu.Item>
                            <Menu.Item style={{marginLeft:'30px'}} key="feedback">课后反馈</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="aboutus">
                            <Icon type="mail" />
                            联系我们
                        </Menu.Item>
                    </Menu>
                </Drawer>
                <SubPage pageindex={this.state.pageindex} isMenuShown={this.state.menuvisible}>
                </SubPage>
                <Footer style={{textAlign: 'center',padding:'10px',fontWeight:'bold'}}>Designed by Ma Lichao</Footer>
            </Layout>
        )
    }

    componentDidMount() {
        //document.getElementById('root').style.height = '900px';
    }
}

class SubPage extends React.Component{
    render(){
        const menushownstlye={
            padding: '0px 30px 0px 30px',filter:'blur(10px)',backgroundColor:'rgb(102,102,102)'
        }
        const menuhidestlye={
            padding: '0px 30px 0px 30px',backgroundColor:'rgb(102,102,102)'
        }
        if(this.props.pageindex === "home"){
            return(
                <Content style={this.props.isMenuShown ? menushownstlye : menuhidestlye}>
                    <div className={'logo label'}>
                        <div>Scratch/Python/</div>
                        <div>Intelligent Device</div>
                    </div>
                    <div style={{ background: 'rgb(102,102,102)', display: 'flex', height: '100%' }}>
                        {(() => { return <div></div> })()}
                        <BoxContainer amount={5} />
                    </div>
                </Content>
            )
        }
        else if(this.props.pageindex === "smartdevice"){
            return(
                <DisplayPage />
            )
        }
        else if(this.props.pageindex === "aboutus"){
            return(
                <AboutUsPage />
            )
        }
        else if(this.props.pageindex === "feedback"){
            return(
                <FeedBackPage />
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
        //方块的索引
        let boxList = [1,2];
        //方块的背景色
        let boxColor = ['rgb(249,236,239)','rgb(237,197,206)','rgb(237,218,197)'];
        //方块的内容
        let boxContent = [EnterExam,ScratchBase];
        //测试模态框，后来加了Router，所以不触发模态框了
        let modalText = () => {
            if(this.state.selectedkey === 1){
                return(
                <Descriptions title="模块名称">
                    <Descriptions.Item label="适合年龄">5~10周岁</Descriptions.Item>
                    <Descriptions.Item label="难度等级"><Rate allowHalf disabled defaultValue={2} /></Descriptions.Item>
                    <Descriptions.Item label="知识点">运动,外观,声音,事件,控制</Descriptions.Item>
                    <Descriptions.Item label="简介">Scratch的基础部分，具体内容可以看马老师的朋友圈~</Descriptions.Item>
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
                    return( 
                        <Box 
                            onClick={()=>{this.setState({modalVisible:true,selectedkey:index})}} 
                            key={index}
                            size={'265px'}
                            backgroundColor={boxColor[index]}
                            boxContent={boxContent[index]}/>
                        )
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
                backgroundColor:this.props.backgroundColor,
                margin:'15px',
                borderRadius:'10px',
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
                // border:'2px dashed',
                }}>
                <div>
                    {this.props.boxContent()}
                </div>
            </div>
        )
    }

    static defaultProps={
        backgroundColor:'white'
    }
}

//第一个box的内容
function EnterExam(){
        return(
            <Link to="/exam">
                <PageHeader
                    title="Level 0"
                    subTitle="入学测试"
                    avatar={{ src: level0logo }}
                >
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <img src={shareico} style={{ height: '100px' }} />
                    </div>
                    <Typography>
                        做一些问卷调查，查看您的孩子适合什么等级的课程。
                    </Typography>
                </PageHeader>
            </Link>
        )
    }

function ScratchBase(){
    return(
        <PageHeader
            title="Level 1"
            subTitle="Scratch基础"
            avatar={{src: level1logo}}
        >
            <div style={{
                display:'flex',
                justifyContent:'center',
                flexDirection:'column',
                alignItems:'center'
            }}>
                <img src={gameico} style={{height:'100px'}}/>
            </div>            
            <Typography>
                    学习模块编程的基础，带您走进奇妙的编程世界。
            </Typography>
        </PageHeader>
    )
}

export default HomePage;