import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from './Home';
import ProductDetails from './ProductDescription';
import './index.css';
import data from './data.json';

class App extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			cards: [],
			loading: false
		}
    }
    
    componentWillMount() {
        this.setState({
          cards: data,
        });
      }

	
    render() {
		return (
			<Router>
			<div>
                    
				
			<Switch>
            <Route exact path="/" render={(props) => (
              <Home cards={this.state.cards} />
            )} />
				<Route exact path="/product/:id" render={(props) => {
					let cardPosition = props.location.pathname.replace('/product/', '');
					console.log(this.state.cards[cardPosition])
					return (
						<ProductDetails
                  card={this.state.cards[cardPosition]}
                />
					)
					}} 
				/>
	        </Switch>

			</div>
			</Router>
		)
	}
}

export default App