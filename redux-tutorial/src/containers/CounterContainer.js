import React, { Component } from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increment, decrement } from '../store/modules/counter';

class CounterContainer extends Component {
  handleIncrement = () => {
    this.props.increment();
  };
  handleDecrement = () => {
    this.props.decrement();
  };
  render() {
    const { number } = this.props;
    return (
      <Counter
        value={number}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
      />
    );
  }
}
// mapStateToProps는 redux store의 state를 조회해서 어떤 것을 props으로 넣어줄지 정의한다
const mapStateToProps = ({ counter }) => ({
  number: counter.number,
});

// mapDispatchToProps는 action을 dispatch 함수를 만들어서 prop로 넣어준다.
const mapDispatchToProps = { increment, decrement };

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
