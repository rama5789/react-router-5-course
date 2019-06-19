import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function Contact() {
  return <h1>Contact Page</h1>
}

function Home() {
  return <h1>Home Page</h1>
}

const App = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('root'))
