import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Posts from './components/posts/Posts'

function App() {
  return (
    <div className="app">
      <div className="main-container">
        <Header />
        <Posts />
      </div>
    </div>
  );
}

export default App;
