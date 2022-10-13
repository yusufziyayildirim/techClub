import styled, { keyframes } from 'styled-components'
import { fadeInUp } from 'react-animations';
import { bounceIn } from 'react-animations';
import { fadeInDownBig } from 'react-animations';

const AnimationShake = styled.div`animation: ${props => props.delay ? `${props.delay}s` : "1s"} ${keyframes`${bounceIn}`}`;
const AnimationFade = styled.div`animation: ${props => props.delay ? `${props.delay}s` : "1s"} ${keyframes`${fadeInUp}`}`;
const AnimationSlide = styled.div`animation: ${props => props.delay ? `${props.delay}s` : "1s"} ${keyframes`${fadeInDownBig}`}`;


export {AnimationShake, AnimationFade, AnimationSlide}