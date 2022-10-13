import styled, { keyframes } from 'styled-components'
import { fadeInUp } from 'react-animations';
import { headShake } from 'react-animations';

const AnimationShake = styled.div`animation: ${props => props.delay ? `${props.delay}s` : "1s"} ${keyframes`${headShake}`}`;
const AnimationFade = styled.div`animation: ${props => props.delay ? `${props.delay}s` : "1s"} ${keyframes`${fadeInUp}`}`;


export {AnimationShake, AnimationFade}