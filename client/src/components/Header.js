import {Link } from "react-router-dom"
function Header () {
  return <ul>
    <li>
      <Link to="/">
        首页
      </Link>
    </li>
    <li>
      <Link to="/about">
        关于
      </Link>
    </li>
    <li>
      <Link to="/dashboard">
        仪表盘
      </Link>
    </li>

  </ul>
}

export default Header;