import './App.css'
import Header from './components/Header'
import Instructions from './components/Instructions'

function App() {
  return (
    <>
      <div className="container">
        <Header title="< Polygot Coding />" />
      </div>
      <main>
        <Instructions />
      </main>
    </>
  )
}

export default App
