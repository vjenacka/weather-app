import React, { Component } from 'react';
import './HourlyForcast.css';

class NewHourlyForcast extends Component {
    state = {
        day: {}
    }
    componentDidMount() {
        setTimeout(() => {
            let id = Number(this.props.match.params.day_id);
            let day = this.props.forcast.find(days => {
                return days.id === id
            })
            console.log(day);
            this.setState({
                day
            })
        }, 2000)
    }
    
    render() {
        const { hours, temps, icons } = this.state.day;
        console.log(hours)
        const list = hours.map((hour, index) => {
            return <li key={Math.floor(Math.random() * 5000)}>
                <p>{hour}</p>
                <p className='hr-Temp'>{temps[index]}&deg;</p>
                <img src={'http://openweathermap.org/img/w/' + icons[index] + '.png'} alt="weather-img" />
            </li>
        })
        return (
            <div className='hourly-forcast'>
                <ul>
                    
                </ul>
            </div>
        )
    }
}

export default NewHourlyForcast;