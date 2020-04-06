import React from 'react';
import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

function App() {
  const input = React.createRef();
  const handle = () => {
    window.open('https://www.baidu.com/s?wd='+input.current.value,'_blank')
  }
  return (
    <>
    <nav className='navbar navbar-expand-sm bg-light navbar-light p-0'>
      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#nav'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div id='nav' className='collapse navbar-collapse justify-content-between p-3 p-sm-0'>
        <div>

        </div>
        <div className='d-flex justify-content-sm-between align-items-center'>
          <ul className='navbar-nav flex-fill' role='navigation'>
            <li className='nav-itme'>
              <a className='nav-link' href='#'>抗击肺炎</a>
            </li>
            <li className='nav-itme'>
              <a className='nav-link' href='#'>新闻</a>
            </li>
            <li className='nav-itme'>
              <a className='nav-link' href='#'>hao123</a>
            </li>
            <li className='nav-itme'>
              <a className='nav-link' href='#'>地图</a>
            </li>
            <li className='nav-itme'>
              <a className='nav-link' href='#'>视频</a>
            </li>
            <li className='nav-itme'>
              <a className='nav-link' href='#'>贴吧</a>
            </li>
            <li className='nav-itme'>
              <a className='nav-link' href='#'>学术</a>
            </li>
            <li className='nav-itme'>
              <a className='nav-link' href='#'>登陆</a>
            </li>
            <li className='nav-itme'>
              <a className='nav-link' href='#'>设置</a>
            </li>
          </ul>
          <button className='btn btn-primary text-white flex-fill rounded-0'>更多产品</button>
        </div>
      </div>
      </nav>
      <div className='container'>
      <div className='row'>
        <div class='col-sm-11 col-md-10 col-lg-9 col-xl-8 mx-auto'>
          <form className='p-md-5'>
            <img className='d-block mx-auto' src='https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1-2885cdb57f.png' width='300'/>
            <div className='input-group'>
              <input className='form-control' type='text' ref={input}/>
              <div className='input-group-append'>
                <button className='input-group-text bg-primary text-white'
                  onClick={handle}>
                    百度一下
                </button>
              </div>
            </div>
          </form>
          </div>
      </div>
    </div>
    </>
  );
}

export default App;
