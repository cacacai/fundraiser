import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import Detail from './pages/Detail';
import Create from './pages/Create';
import Person from './pages/Person';
import NotFound from './pages/NotFound';
import { Link } from "react-router-dom"
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

function App() {

  return <BrowserRouter>
      
    <Layout className="layout">
    <Header>
      <div className="logo" />
      <Link to="/"> 首页 </Link>
      <Link to="/detail"> 新闻页 </Link>
      <Link to="/create"> 介绍页 </Link>
    </Header>
    <Content className="site-layout-content" style={{ padding: '0 50px' }}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/create" element={<Create />} />
      <Route path="/person" element={<Person />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </Content>
    <Footer style={{ textAlign: 'center' }}>cacacai</Footer>
  </Layout>
     
    
  </BrowserRouter>
}




export default App;