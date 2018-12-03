import React from 'react';
import PT from 'prop-types';

export default function People(props) {
  // console.log(props);
  return (
    <div className="people">
      <h2>我是 people</h2>
      <p> 我的名字是: {props.name}</p>
      <p> 我的年龄是: {props.age}</p>
      <p> 是本人吗: {props.isSelf? '是': '不是'}</p>
      <p>{props.renderProp}</p>
      {props.children}
      {['jjj', 'kkk', <div key="9"> 你一</div>]}
    </div>
  );
}

People.defaultProps = {
  name: '----',
  age: 20,
  // renderProp: number
}

People.propTypes = {
  name: PT.string,
  renderProp: PT.func,
  age: PT.number.isRequired,
  renderProp: PT.node
}
