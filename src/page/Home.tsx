/// @ts-nocheck
import { Box, Heading, Image } from '@chakra-ui/react';
import React, { FC } from 'react';
import { CustomBox } from '../components/CustomBox';

import image from '../assets/images/profile2.png';
import image2 from '../assets/images/profile3.png';

import github from '../assets/svg/Vector.svg';
import linkedin from '../assets/svg/linkedin.svg';
import instagram from '../assets/svg/instagram.svg';
import { FloatingButton } from '../components/Button/FloatingButtonLink';

interface SocialMedia {
  image: ImageBitmap;
  text: string;
  link: string;
}

const socialMedia: SocialMedia[] = [
  {
    image: github,
    text: 'Github',
    link: 'github.com/bagussr',
  },
  {
    image: linkedin,
    text: 'Linkedin',
    link: 'linkedin.com/in/bagus-syamsu-rahmattullah/',
  },
  {
    image: instagram,
    text: 'Instagram',
    link: 'instagram.com/bagus_syr',
  },
];

export const Home: FC = () => {
  return (
    <>
      <Box w='100%'>
        <Box
          w='100%'
          p={{ sm: '20', base: '14' }}
          py={{ sm: '20', base: '10' }}
          rowGap={10}
          display={'flex'}
          flexDir={{ sm: 'row-reverse', base: 'column' }}
          alignItems={'center'}
          justifyContent={'space-between'}>
          <CustomBox
            w={{ base: 48, sm: '24rem' }}
            h={{ base: 64, sm: '28rem' }}
            display={'flex'}
            flexWrap={'wrap'}
            position={'relative'}
            overflow={'hidden'}
            borderRadius={'lg'}
            shadow={'md'}
            variant='shadow-pattern'>
            <Image
              transform={{ lg: 'scale(1.2)', sm: 'scale(1.5)' }}
              src={image2}
            />
          </CustomBox>
          <Heading
            fontSize={{ sm: '4.2rem', base: '3xl' }}
            display={'flex'}
            fontWeight={'bold'}
            px={{ xl: 0, sm: 10 }}
            flex='1'
            textAlign={'center'}
            letterSpacing={'wider'}
            sx={{
              wordSpacing: '50px',
            }}>
            Bagus Syamsu Rahmatullah
          </Heading>
          <CustomBox
            w={{ base: 48, sm: '24rem' }}
            h={{ base: 64, sm: '28rem' }}
            display={{ sm: 'flex', base: 'none' }}
            flexWrap={'wrap'}
            position={'relative'}
            overflow={'hidden'}
            borderRadius={'lg'}
            shadow={'md'}
            variant='shadow-pattern'>
            <Image
              transform={{ xl: 'scale(1.2)', sm: 'scale(1.5)' }}
              src={image}
            />
          </CustomBox>
        </Box>
        <Box
          display={'flex'}
          justifyContent={'center'}
          gap={'5'}
          flexWrap={'wrap'}>
          {socialMedia.map((item: SocialMedia, index: number) => (
            <FloatingButton
              text={item.text}
              image={item.image}
              key={index}
              link={item.link}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};
