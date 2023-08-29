import { keyframes } from '@chakra-ui/react';

export const glowAnimation = keyframes`
0% { transform: scale(1) rotate(0); border-radius: 50%; }
40% { transform: scale(1) rotate(180deg); border-radius: 50%; }
60% { transform: scale(1) rotate(360deg); border-radius: 50%; }
100% { transform: scale(1) rotate(-180deg); border-radius: 50%; }
`;
