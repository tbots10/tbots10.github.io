import React from 'react';
import ReactDOM from 'react-dom';
import MainContainer from './MainContainer.jsx';
let sass = require ('../sass/style.scss');


document.addEventListener('DOMContentLoaded', function(){

    class App extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                teamsData: [],
                newsData: []
            }
        }

        getData = () => {
            
            let teamsBaseURL = "https://api.fantasydata.net/v3/nba/scores/JSON/teams";
            let keyURL = "b6098a2ffbe14e6ea478123779c4cb6d";
            
            fetch(teamsBaseURL, {
                headers: {
                    "Ocp-Apim-Subscription-Key": keyURL
                }
            }).then(response => {
                return response.json()
            }).then(data => {
                this.setState({
                    teamsData: data
                })
            }).catch(error => {
                console.log(error)
            })
        }
    
        componentWillMount() {
            this.getData();
        }

        render() {
            return(
                <MainContainer teamsData={this.state.teamsData} />
            )
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});