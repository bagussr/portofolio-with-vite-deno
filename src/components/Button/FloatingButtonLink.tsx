'use client';
import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

interface Props {
  image: any;
  text: string;
  link: string;
}

export const FloatingButton: React.FC<Props> = ({
  image,
  text,
  link,
}): Props => {
  return (
    <>
      <Box as={'a'} href={`https:/${link}`} target='blank'>
        <Box
          bg={'brand.background'}
          as='span'
          px={{ sm: 8, base: 4 }}
          py={{ sm: 3, base: 1 }}
          color={'white'}
          borderRadius={'lg'}
          fontWeight={'semibold'}
          fontSize={{ sm: 'md', base: 'xs' }}
          position={'relative'}
          cursor={'pointer'}
          display={'flex'}
          gap={'3'}
          alignItems={'center'}
          justifyContent={'center'}
          _hover={{
            bg: '#004F87',
          }}>
          <Text fontWeight={'bold'}>{text}</Text>
          <Image
            src={image}
            alt='Image'
            transform={{ base: 'scale(0.6)', sm: 'scale(1)' }}
          />
        </Box>
      </Box>
    </>
  );
};
