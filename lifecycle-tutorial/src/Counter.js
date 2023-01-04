import React from 'react'

//commented out code is mostly things that do not work the same as the tutorial because of differences in react versions (video is 4 years old)
//const ErrorComponent = () => <div>{props.ignore}</div>

export default class Counter extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: 0
        }
        this.increment = () => this.setState({ counter: this.state.counter + 1 })
        this.decrement = () => this.setState({ counter: this.state.counter - 1 })

    }
    static getDerivedStateFromProps(props, state) {
        if (props.seed && state.seed !== props.seed) {
            return {
                seed: props.seed,
                counter: props.seed
            }
        }
        return null;
    }

    componentDidMount() {
        console.log('Component Did Mount');
        console.log('---------------------------');
    }
    shouldComponentUpdate(nextProps, nextState) {

        if (nextProps.ignoreProp && this.props.ignoreProp !== nextProps.ignoreProp) {
            console.log('Should Component Update - DO NOT RENDER');
            console.log('---------------------------');
            return false;
        }
        console.log('Should Component Update - RENDER');
        console.log('---------------------------');
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Get Snapshot Before Update')
        return null
    }
    render() {
        console.log('Render', this.state.error);

       /* if (this.state.error) {
            return <div>We Have Encountered An Error! {this.state.error.message}</div>

        } */
        return (

            <div id='counter'>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>


                <div className='counter'>
                    Counter: {this.state.counter}
                </div>
            </div>
        )
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Component Did Update');
        console.log('---------------------------');
    }
    componentWillUnmount() {
        console.log('Component Will Unmount');
        console.log('---------------------------');
    }
   /* componentDidCatch(error, info) {
        console.log('Component Did Catch');
        this.setState({ error, info })
    }*/
}