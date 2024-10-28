import './App.css'
import Header from './components/Header'
import Instructions from './components/Instructions'
import Project from './components/Project'

function App() {
  return (
    <>
      <div className="container">
        <Header title="< Polygot Coding />" />
        <main>
          <Instructions />
          
        </main>
      </div>
      <div>
      <Project title="Password Strength Checker" />
      </div>
    </>
  )
}

export default App
