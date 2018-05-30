import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'

class Article extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: props.defaultOpen
        }
        
        const {article} = this.props
        console.log(article.header, 'init')
    }

    componentWillMount(){
        const {article} = this.props
        console.log(article.header, 'will mount')
    }
    
    componentDidMount(){
        const {article} = this.props
        console.log(article.header, 'did mount')
    }


    componentWillReceiveProps(nextProps) {
        const {article} = this.props
        console.log(article.header, 'will receive props')

        // if (nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
        //     isOpen: nextProps.defaultOpen
        // })
    }

    shouldComponentUpdate(nextProps, nextState) {
        const {article} = this.props
        console.log(article.header, 'should component update')
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        const {article} = this.props
        console.log(article.header, 'component will update')
    }

    componentDidUpdate(prevProps, prevState) {
        const {article} = this.props
        console.log(article.header, 'component did update')
    }

    componentWillUnmount() {
        const {article} = this.props
        console.log(article.header, 'component will unmount')
    }

    render() {
        const {article} = this.props
        console.log(article.header,'render')

        const body = this.state.isOpen && <p>{article.content}</p>
        return (
            <div className="card" style={{marginBottom: '20px'}}>
                <div className="card-header">
                    <h2>
                        {article.header}
                        <button className="btn btn-primary" onClick={this.handleClick}>{this.state.isOpen ? 'Скрыть' : 'Показать' }</button>
                    </h2>
                </div>
                <div className="card-body">
                    {body}
                                        
                </div>
                <div className="card-footer">
                    <sub>Updated date: {article.date}</sub>
                </div>  
            </div>
        )
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

 export default Article