import React, { FC } from 'react';
import { Box } from '@chakra-ui/react';

interface Props {
  text: string;
  color: string;
}

export const InterestButton: FC<Props> = ({ text, color }): Props => {
  return (
    <>
      <Box
        border={'2px'}
        borderRadius={'lg'}
        outline={'none'}
        bg={'gray.50'}
        borderColor={color}
        color={color}
        shadow={'1px 1px 15px #0000004f'}
        cursor={'auto'}
        fontWeight={'semibold'}
        fontSize={{ sm: 'sm', base: 'xs' }}
        px={{ sm: 4, base: 2 }}
        py={{ sm: 2, base: 1 }}>
        {text}
      </Box>
    </>
  );
};
