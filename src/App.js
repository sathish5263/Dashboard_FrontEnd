//import './App.css';
import './style.scss';
import AppFooter from './Components/AppFooter';
import AppHeader from './Components/AppHeader';
import PageContent from './Components/PageContent';
import SideMenu from './Components/SideMenu';
// import 'chartjs-adapter-date-fns';
// import 'chartjs-adapter-date-fns/dist/chartjs-adapter-date-fns.esm.js';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className='SideMenuAndPageContent'>
        <SideMenu />
        <PageContent />
      </div>
      <AppFooter />
    </div>
  );
}

export default App;
