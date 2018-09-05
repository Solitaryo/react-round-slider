import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ReactRoundSlider extends Component {
  state = { isPinching: false, value: 0.1 };

  componentDidMount = () => {
    this.x = 0;
    this.y = 0;

    document.addEventListener('mousemove', this.handleMouseMove);
    document.addEventListener('mouseup', this.handleMouseUp);
    if (this.props.value) {
      this.setState({ value: this.props.value });
    }
  };

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('mouseup', this.handleMouseUp);
  }

  handleChange = (x, y) => {
    this.setState({ value: y });
    if (this.props.getValue) {
      this.props.getValue(Math.round(y * 100));
    }
  };

  handleMouseUp = () => {
    this.setState({ isPinching: false });
  };

  handleMouseDown = e => {
    e.preventDefault();

    const { left, top, width, height } = this.potar.getBoundingClientRect();

    this.x = e.pageX - (left + width / 2);
    this.y = top + height / 2 - e.pageY;

    this.setState({ isPinching: true });
  };

  handleMouseMove = e => {
    if (this.state.isPinching) {
      const { left, top, width, height } = this.potar.getBoundingClientRect();

      const x = e.pageX - (left + width / 2);
      const y = top + height / 2 - e.pageY;

      const dx = (x - this.x) / 100;
      const dy = (y - this.y) / 100;

      this.x = x;
      this.y = y;

      if (this.handleChange) {
        let xValue = this.state.value + dx;
        let yValue = this.state.value + dy;

        if (xValue < 0) {
          xValue = 0;
        }

        if (xValue > 1) {
          xValue = 1;
        }

        if (yValue < 0) {
          yValue = 0;
        }

        if (yValue > 1) {
          yValue = 1;
        }

        this.handleChange(xValue, yValue);
      }
    }
  };

  render() {
    const border = this.props.border ? this.props.border : 15;
    const radius = this.props.radius ? this.props.radius : 140;
    const subtitle = this.props.subtitle ? this.props.subtitle : '';
    const size = this.props.size ? this.props.size : 25;
    const { value } = this.state;
    const p = 2 * Math.PI * (radius - border / 2);
    const strokeWidth = border;
    const strokeDashoffset = p * (1 - value);
    const strokeDasharray = p;

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          width: size ? `${size}em` : '25em',
          height: size ? `${size}em` : '25em'
        }}
      >
        <svg
          style={{
            display: 'block',
            width: size ? `${size}em` : '25em',
            height: size ? `${size}em` : '25em',
            transform: 'rotate(-90deg)',
            cursor: 'ns-resize'
          }}
          ref={potar => (this.potar = potar)}
          viewBox={`0 0 ${radius * 2} ${radius * 2}`}
          onMouseDown={this.handleMouseDown}
        >
          <circle
            style={{
              strokeWidth,
              fill: 'transparent',
              stroke: this.props.inactiveColor ? this.props.inactiveColor : '#727375'
            }}
            r={radius - border / 2}
            cx={radius}
            cy={radius}
          />
          <circle
            stroke="url(#gradient)"
            style={{
              fill: 'transparent',
              stroke: this.props.activeColor ? this.props.activeColor : '#f3bb00',
              strokeWidth,
              strokeDashoffset,
              strokeDasharray
            }}
            r={radius - border / 2}
            cx={radius}
            cy={radius}
          />
        </svg>
        <span
          style={{
            color: 'white',
            marginTop: this.props.size ? `-${this.props.size * 0.2}em` : `-${25 * 0.2}em`,
            fontSize: '3em'
          }}
        >
          {Math.round(this.state.value * 100)}%
        </span>
        <span style={{ color: 'white' }}>{subtitle}</span>
      </div>
    );
  }
}

ReactRoundSlider.propTypes = {
  radius: PropTypes.number,
  border: PropTypes.number,
  subtitle: PropTypes.string,
  size: PropTypes.number,
  value: PropTypes.number,
  getValue: PropTypes.func
};

export default ReactRoundSlider;
