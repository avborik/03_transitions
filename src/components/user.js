import React, { Component } from 'react';
import UserTemplate from './user_template';

class user extends Component {

    state = {
        name:'Boris',
        lastname:'Avdeev',
        age:28,
        hobbies:['run','jump'],
        russian:false,
        message(){console.log('hey')},
        car:{brand:{brand:"Ford",model:"Focus"}},
        mother:'Martha'
    }

    render() {
        return (
            <div>
                <UserTemplate {...this.state}/>
            </div>
        );
    }
}

export default user;