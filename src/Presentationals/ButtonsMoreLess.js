import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

const ButtonsMoreLess = (props) => {
  const oneDone = (e) => {
    e.preventDefault();
    props.oneDone(props.orderId);
  };
  const oneMoreTodo = (e) => {
    e.preventDefault();
    props.oneMoreTodo(props.orderId);
  };
  const allDone = (e) => {
    e.preventDefault();
    props.allDone(props.orderId);
  };

  const done = props.orderDone;
  const toDo = props.orderToDo;

  const style = {
    margin: '12',
  };

  return (
    <div>
      <RaisedButton
        className="oneMoreToDoBtn"
        label={props.labelOneMoreToDo}
        disabled={done <= 0}
        onClick={oneMoreTodo}
        style={style}
      />
      {`${done}/${toDo}`}
      <RaisedButton
        className="oneDoneBtn"
        label={props.labelOneDone}
        disabled={done >= toDo}
        onClick={oneDone}
        style={style}
      />
      {props.children}
      <RaisedButton
        className="allDoneBtn"
        label={props.labelAllDone}
        disabled={done >= toDo}
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
  labelOneDone: PropTypes.string.isRequired,
  labelOneMoreToDo: PropTypes.string.isRequired,
  labelAllDone: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  orderDone: PropTypes.number.isRequired,
  orderToDo: PropTypes.number.isRequired,
};

export default ButtonsMoreLess;
