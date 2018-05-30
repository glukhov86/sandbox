import React, {Component} from 'react'
import ArticleList from './ArticleList'
import articles from '../fixtures'

class App extends Component {
    state = {
        reverted: false
    }
    render() {
        return (
            <div className="container">
            <h1>
                App Name
                <button className="btn btn-primary" onClick={this.revert}>Revert</button>
            </h1>
            <ArticleList articles={this.state.reverted ? articles.reverse() : articles } />
            </div>
        )
    }

    revert = () => this.setState({
        reverted: !this.state.reverted
    })
}

export default App