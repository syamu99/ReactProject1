
import Header from './Components/index.jsx';
import Footer from './Components/index.jsx';
import body from './Components/Body/MainPage';

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
