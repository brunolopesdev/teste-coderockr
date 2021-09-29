import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Post from './pages/Post'
import Home from './pages/Home'
import Header from './components/header/index'

function Routes() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/post/:id' exact component={Post} />
            </Switch>
        </Router>
    )
}

export default Routes
