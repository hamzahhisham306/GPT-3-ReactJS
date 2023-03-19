import './App.css';
import Article from './components/article/Article';
import Brand from './components/brand/Brand';
import Cta from './components/cta/CTA.jsx';
import Navbar from './components/navbar/Navbar';
import Feature from './components/feature/Feature';
import Header from './containers/header/Header';
import Whatgpt3 from './containers/whatGPT3/Whatgpt3';
import Features from './containers/features/Features';
import Possiblitiy from './containers/possiblitiy/possiblitiy';
import Blog from './containers/blog/Blog';
import Footer from './containers/footer/Footer';
function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Whatgpt3 />
      <Features />
      <Possiblitiy />
      <Cta />
      <Blog />
      <Footer />

    </div>
  );
}
// sadasdasd
export default App;
