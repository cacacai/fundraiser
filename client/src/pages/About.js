import { useLocation } from 'react-router-dom'





function About() {
    // 使用 hook，获得 location 对象
    const location = useLocation();
    // location 对象中含有 pathname，即为当前路径(仅路径部分 不含域名)
    const { pathname } = location
    return <>
        <div>这是卡拉云的首页 你当前在 {pathname}</div>
    </>
}

export default About;