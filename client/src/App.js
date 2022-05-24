import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import Detail from './pages/Detail';
import Create from './pages/Create';
import Person from './pages/Person';
import NotFound from './pages/NotFound';
import { Link } from "react-router-dom"
import { Layout, Menu, Row, Col } from 'antd';



const { Header, Content, Footer } = Layout;

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
          >
            <Menu.Item key="1"><Link to="/">首页</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/detail">详细</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/create">创建</Link></Menu.Item>
            <Menu.Item key="4"><Link to="/person">个人</Link></Menu.Item>
          </Menu>
        </Header>
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
          <Row>
            <Col span={12} offset={6}>
              <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/detail" element={<Detail />} />
                  <Route path="/create" element={<Create />} />
                  <Route path="/person" element={<Person />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </Col>
          </Row>

        </Content>
        <Footer style={{ textAlign: 'center' }}>cacacai</Footer>
      </Layout>
    </BrowserRouter>
  )
}




export default App;