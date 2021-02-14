import Button from '@material-ui/core/Button'
import Nav from './components/Nav'
import Card from './components/Card'
import Inbox from './components/Inbox'
import Faq from './pages/Faq'
import About from './pages/About'
import Privacy from './pages/Privacy'

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blueGrey'
import pink from '@material-ui/core/colors/pink'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#14446E',
    },
    secondary: pink,
  },
})

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div
          style={{
            backgroundColor: 'rgb(200 204 228 / 50%)',
            paddingBottom: '10rem',
          }}
        >
          <Nav />
          <Switch>
            <Route exact path='/'>
              <Card />
              <Inbox />
            </Route>
            <Route exact path='/faq'>
              <Faq />
            </Route>
            <Route exact path='/about'>
              <About />
            </Route>
            <Route exact path='/privacypolicy'>
              <Privacy />
            </Route>
          </Switch>
        </div>
      </ThemeProvider>
    </Router>
  )
}

export default App
