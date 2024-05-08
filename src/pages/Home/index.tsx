import './index.scss'

const Home = () => {
  return (
    <div>
      <nav className='navbar'>
        <ul className="navbar-left">
          <li><a href="#home">Home</a></li>
        </ul>
        <ul className="navbar-right">
          <li><a href="#services">Services</a></li>
          <li><a href="#logout">Logout</a></li>
        </ul>
      </nav>
      <div className="main-layout">
        {/* 左側選單 */}
        <aside className="sidebar">
          <ul>
            <li><a href="#upload">上傳</a></li>
            <li><a href="#query">查詢</a></li>
            <li><a href="#logout">登出</a></li>
          </ul>
        </aside>

        {/* 中右區塊 */}
        <main className="content">
          <img src="https://via.placeholder.com/400x300" alt="示例圖案" />
        </main>
      </div>

    </div>
  )

}

export default Home