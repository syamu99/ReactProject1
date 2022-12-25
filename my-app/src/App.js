
import Header from './Components/Header/index.jsx';
import Footer from './Components/Footer/index.jsx';
import MainPage from './Components/Body/MainPage.jsx';

function App() {
  return (
    <div className='App'>
    <header className='head'><Header></Header></header>
    <body className='App-body'><MainPage></MainPage></body>
    <footer className='footer'><Footer></Footer></footer>
    
    </div>
  );
  
}

export default App;
