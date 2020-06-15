import React from 'react';
import axios from 'axios';
import { HorizontalBar } from 'react-chartjs-2'


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: []
        }
    }

    componentDidMount() {
        axios.get('https://api.covid19api.com/summary').then(res => {
            console.log(res)
            this.setState({ countries: res.data.Countries })
        })
    }
    render() {
        return (<div>
            <HorizontalBar
                height={5000}
                data={{
                    labels: this.state.countries.map(info => info.Country),
                    datasets: [
                        {
                            label: 'New Deaths',
                            data: this.state.countries.map(info => info.NewDeaths),
                            backgroundColor: "rgba(240, 52, 52, 1)"
                        },

                        {
                            label: 'Total Deaths',
                            data: this.state.countries.map(info => info.TotalDeaths),
                            backgroundColor: "rgba(30, 139, 195, 1)"

                        }

                    ]

                }}
                options={{
                    maintainAspectRatio: false,
                    title: {
                        display: true,
                        text: 'COVID 19 Stats',
                        fontSize: 25
                    },
                    legend: {
                        display: true,
                        position: 'top',

                    }
                }}
            />
        </div>);
    }
}




export default Dashboard;