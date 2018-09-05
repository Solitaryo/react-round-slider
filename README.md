# React Arc Slider

> This component is meant to be used on web, using React.

> React Round Slider gives you round slider, which can be used for any of you slider needs, very easy to use and configurable, the API is very straight forward. No properties are required to render the componet.

install npm

```bash
npm install -save react-round-slider
```

install yarn
```
yarn add react-round-slider
```

![react-round-slider](https://i.imgur.com/zKto0Og.png)

## Use Example:
```javascript
  import React from 'react';
  import ReactRoundSlider from 'ReactRoundSlider';

  class SliderTest extends React.Component {
    handleGetValue = value => {
      console.log('VALUE', value);
    };
    render() {
      return (
        <div>
          <ReactRoundSlider
            radius={140}
            border={15}
            subtitle={'Brightness'} 
            size={25}
            value={0.1}
            getValue={this.handleGetValue}/>
        </div>
      )
    }
  }
```

## API Options

```javascript
propTypes = {
  radius: PropTypes.number,
  border: PropTypes.number,
  subtitle: PropTypes.string,
  size: PropTypes.number,
  value: PropTypes.number,
  getValue: PropTypes.func
};
```

## API Options explanation

## radius
> Radius of the Slider, you can play with this radius and border to make to change the form. **Default Value: 140**

## border
> Changes the Width of the slider, higher values means wider slider, lower values means thinner slider. **Default Value: 15**

## subtitle
> String to show under the number

## size
> Actual size of the Slider, it uses **em** values. **Default Value: 25**

## value
> Initual value, it receives numbers greater than 0 and less than 1, example: 0.1, 0.2, 0.3,  **Default value 0.1**

## getValue
> When React Round Slider detects a change, it returns the value.
Example:
``` javascript
  handleValue = value => {
    console.log(value);
  }

  render() {
    return (
      <ReactRoundSlider getValue={this.handleValue}>
    )
  }
```