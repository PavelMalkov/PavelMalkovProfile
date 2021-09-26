import './defoult.css';
import './grid.css';
import Sidebar from './Sidebar';
import Search from './Search';
import Acount from './Acount';
import Person from './Person';
import AboutPerson from './AboutPerson';
import Content from './Content';

function App() {
  return (
    <div className="App">
      <div className="box">
        <div className="container">
            <div className="header">
                <Search />
                <div className="notificationn"> 
                  <div className = "top">
                    <span className= "icon"><i class="bi bi-bell"></i> </span>
                  </div>
                </div>
                <Acount />
            </div>
            <div className="nav"><Sidebar /></div>
            <div className="about"><h1>Мой профиль</h1></div>
            <div className="person"><Person /></div>
            <div className="nav-back"><h1><i class="bi bi-arrow-left-short"></i> Редактировать</h1></div>
            <AboutPerson />
            <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
