import styled from 'styled-components';

const CategoryWrapper = styled.div`
    position: absolute;
    z-index: 10;
    line-height: 1;
    width: 190px;
    height: 120px;
    left: 10px;
    top: 10px;
    border: 2px solid black;
    line-height: 116px;
    font-size: 80px;
    font-weight: bold;
    color: white;
    background-color: ${props => colours[props.index]};
    opacity: 0.8;
    text-align: center;
    transform: ${props => props.transform} ${props => props.isExpanded? (props.isMobile? 'scale(1.8)' : 'scale(3)') : ''};
    opacity: ${props => props.opacity}
    cursor: pointer;
    transition: transform 1s, opacity 1s;

    .text {
      width: 100%;
      height: 100%;
      font-size: 18px;
      text-transform: uppercase;
    }

    .joke-text {
      line-height: 1;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-size: 8px;
      text-transform: uppercase;
    }

`

export default CategoryWrapper

const colours = [
"#4286f4",
"#5041f4",
"#7f41f4",
"#b541f4",
"#d341f4",
"#952999",
"#992968",
"#99293f",
"#992929",
"#994a29",
"#994a29",
"#877421",
"#748721",
"#4b8721",
"#218754",
"#21877c",
"#216a87",
]