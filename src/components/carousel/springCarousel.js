import React from "react";
import { animated } from "react-spring";
import { Transition } from 'react-spring/renderprops'
import styled from 'styled-components'

const SliderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center center;
`;

const Container = styled.div`
    height: 400px;
    position: relative;
    width: 100%;
    cursor: pointer;
    & > div {
    will-change: transform, opacity;
    position: absolute;
    width: 100%;
    height: 100%;
    }
`

const getSlide = (slideImage) => {
    return <SliderContainer style={{backgroundImage: `url(${slideImage})`}}></SliderContainer>;
}

class Carousel extends React.Component {

    state = {
        index: 0,
        length: 1,
        slideImages: null
    };
    toggle = e =>
    this.setState(state => ({
        index: state.index === state.length - 1 ? 0 : state.index + 1
    }));

    componentDidMount() {
        const { imageData: { pools: images } } = this.props
        let toPreload = []
        images.forEach( image => {
            const img = new Image().src = `${image.full1920x1280.fields.file.url}?fm=jpg&w=800&fl=progressive`
            toPreload.push(img)
        })
        this.setState({
            length: images.length,
            slideImages: toPreload
        })
    }

    render() {
        const { index } = this.state;
        const { slideImages } = this.state
        return (
            <div style={{ backgroundColor: `${this.props.backgroundColor}`}}>
            <Container onClick={this.toggle}>
                <Transition
                native
                reset
                unique
                items={index}
                from={{ opacity: 0, transform: "translate3d(100%, 0 ,0)" }}
                enter={{ opacity: 1, transform: "translate3d(0%, 0, 0)" }}
                leave={{ opacity: 0, transform: "translate3d(-50%, 0, 0)" }}
                >
                {index => style => (
                    <animated.div style={{ ...style }}>
                    {getSlide(slideImages[index])}
                    </animated.div>
                )}
                </Transition>
            </Container>
            </div>
        );
    }
}

export default Carousel
