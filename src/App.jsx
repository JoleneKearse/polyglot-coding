import './App.css'
import Header from './components/Header'
import Instructions from './components/Instructions'
import Project from './components/Project'

function App() {
  return (
    <>
      <div className="container">
        <Header title="< Polyglot Coding />" />
        <main>
          <Instructions />
          
        </main>
      </div>
      <div>
        <Project projectKey="ticTacToe" />
        <Project projectKey="passwordStrengthChecker" />
      </div>
    </>
  )
}

export default App
