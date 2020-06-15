import React from 'react';
import axios from 'axios';


class Dashboard extends React.Component {
    constructor() {
        super(props)
        this.state = {

        }
    }
    state = {
        countries: []
    }

    componentDidMount() {
        axios.get('https://api.covid19api.com/summary').then(res => {
            console.log(res)
            this.setState({ countries: res.data.Countries })

            var countries_array = this.state.countries.map(info => info.Country)
            console.log(countries_array)
        })
    }
    render() {
        return (
            <ul>
                {this.state.countries.map(info => <li>{info.Country}</li>)}
            </ul>
        );
    }
}

export default Dashboard;