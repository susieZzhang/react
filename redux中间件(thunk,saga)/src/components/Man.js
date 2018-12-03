import React, {Component} from 'react';
import People from './People';

export default class Man extends Component {

  render(){

    let {eyes, hand, peopleName, children} = this.props;

    return (
      <div className="man">
        <h2>我是 Man</h2>
        <p> 我有{hand} 只手</p>
        <p> 我有{eyes} 只眼睛</p>
        {children}

        <People name={peopleName} age={20} isSelf={true}/>
      </div>
    );
  }
}

Man.defaultProps = {
  hand: 4999
}
