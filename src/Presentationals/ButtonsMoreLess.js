import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

const ButtonsMoreLess = (props) => {
  const oneDone = () => {
    props.oneDone(props.orderId);
  };
  const oneMoreTodo = () => {
    props.oneMoreTodo(props.orderId);
  };
  const allDone = () => {
    props.allDone(props.orderId);
  };

  const done = props.orderDone;
  const toDo = props.orderToDo;

  const style = {
    margin: 12,
  };

  return (
    <div>
      <RaisedButton
        label="+"
        disable={done >= toDo}
        onClick={oneDone}
        style={style}
      />
      {`${done}/${toDo}`}
      <span>
        <RaisedButton
          label="-"
          disable={done <= 0}
          onClick={oneMoreTodo}
          style={style}
        />
        {props.children}
      </span>
      <RaisedButton
        label="fini"
        disable={done >= toDo}
        onClick={allDone}
        style={style}
      />
    </div>);
};

ButtonsMoreLess.propTypes = {
  orderId: PropTypes.string.isRequired,
  oneDone: PropTypes.func.isRequired,
  oneMoreTodo: PropTypes.func.isRequired,
  allDone: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  orderDone: PropTypes.number.isRequired,
  orderToDo: PropTypes.number.isRequired,
};

export default ButtonsMoreLess;
