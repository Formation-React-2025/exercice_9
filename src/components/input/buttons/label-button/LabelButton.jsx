import * as React from 'react';
import PropTypes from 'prop-types';
import './LabelButton.css';

const createRipple = (event) => {
  const button = event.currentTarget;

  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - (button.offsetLeft + radius)}px`;
  circle.style.top = `${event.clientY - (button.offsetTop + radius)}px`;
  circle.classList.add("button-ripple");

  Array.prototype.forEach.call(
    button?.getElementsByClassName("button-ripple"),
    (r) => r.remove()
  );

  button.appendChild(circle);
};

const LabelButton = ({
  label,
  type = 'button',
  onClick = undefined,
  disabled = false,
}) => (
  <button
    className="label-button"
    onClick={(e) => {
      createRipple(e);
      onClick?.(e);
    }}
    type={type}
    disabled={disabled}
  >
    {label}
    </button>
);

LabelButton.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default LabelButton;
