
import Header from './Components/Header';
import Footer from './Components/Footer';
import body from './Components/MainPage';

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
