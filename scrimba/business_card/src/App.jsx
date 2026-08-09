import './App.css'
import Top from './components/Top.jsx'
import Middle from './components/Middle.jsx'
import Bottom from './components/Bottom.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="main">
      <div className="content">
        <Top />
        <Middle />
        <Bottom />
      </div>
      <Footer />
    </div>
  )
}
export default App