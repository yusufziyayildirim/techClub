import styled, { keyframes } from 'styled-components'
import { fadeInUp } from 'react-animations';

const AnimationFade = styled.div`animation: ${props => props.delay ? `${props.delay}s` : "1s"} ${keyframes`${fadeInUp}`}`;

export {AnimationFade}