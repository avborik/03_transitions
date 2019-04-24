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
        mother:'Martha',
        color:'red'
    }

    changeColor(){
        // this.setState({
        //     color:'blue'
        // })
        this.refs.myColor.style.color = 'blue'
    }

    render() {
        const style = {
            color: this.state.color
        }
        return (
            <div>
                <h4 style={style} ref="myColor">{this.state.mother}</h4>
                <div onClick={()=>this.changeColor()}>Change color</div>
                <UserTemplate {...this.state}/>
            </div>
        );
    }
}

export default user;