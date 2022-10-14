import styled, { keyframes } from 'styled-components'
import { fadeInUp } from 'react-animations';
import { bounceIn } from 'react-animations';
import { fadeInDown } from 'react-animations';

const AnimationShake = styled.div`animation: ${props => props.delay ? `${props.delay}s` : "1s"} ${keyframes`${bounceIn}`}`;
const AnimationFade = styled.div`animation: ${props => props.delay ? `${props.delay}s` : "1s"} ${keyframes`${fadeInUp}`}`;

export {AnimationShake, AnimationFade}