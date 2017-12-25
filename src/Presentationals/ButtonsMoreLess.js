import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

const ButtonsMoreLess = (props) => {
  const oneDoneClick = (e) => {
    e.preventDefault();
    props.oneDoneClick(props.orderId);
  };
  const oneMoreTodoClick = (e) => {
    e.preventDefault();
    props.oneMoreTodoClick(props.orderId);
  };
  const allDoneClick = (e) => {
    e.preventDefault();
    props.allDoneClick(props.orderId);
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
        onClick={oneMoreTodoClick}
        style={style}
      />
      {`${done}/${toDo}`}
      <RaisedButton
        className="oneDoneBtn"
        label={props.labelOneDone}
        disabled={done >= toDo}
        onClick={oneDoneClick}
        style={style}
      />
      {props.children}
      <RaisedButton
        className="allDoneBtn"
        label={props.labelAllDone}
        disabled={done >= toDo}
        onClick={allDoneClick}
        style={style}
      />
    </div>);
};

ButtonsMoreLess.propTypes = {
  orderId: PropTypes.string.isRequired,
  oneDoneClick: PropTypes.func.isRequired,
  oneMoreTodoClick: PropTypes.func.isRequired,
  allDoneClick: PropTypes.func.isRequired,
  labelOneDone: PropTypes.string.isRequired,
  labelOneMoreToDo: PropTypes.string.isRequired,
  labelAllDone: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  orderDone: PropTypes.number.isRequired,
  orderToDo: PropTypes.number.isRequired,
};

export default ButtonsMoreLess;
