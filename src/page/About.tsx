import React, { FC } from 'react';
import {
  Box,
  Divider,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';

// @ts-ignore
import image from '../assets/images/illustrator.png';
import { EducationSection } from '../components/DetailAbout/EducationSection';
import { ExperienceSection } from '../components/DetailAbout/ExperienceSeciton';
import { TechStackSection } from '../components/detailAbout/TechStackSection';
import { InterestSection } from '../components/detailAbout/InterestSection';
import { PersonalInformation } from '../components/detailAbout/PersonalInformation';

export const About: FC = () => {
  return (
    <>
      <Box
        w='100%'
        p={{ sm: '16', xl: '28', base: '0' }}
        py={{ base: '4', sm: 'auto' }}>
        <Grid
          templateRows='repeat(1, 1fr)'
          templateColumns={{ sm: 'repeat(6, 1fr)', base: 'repeat(4, 1fr)' }}
          gap={4}>
          <GridItem
            rowSpan={2}
            colSpan={2}
            display={{
              sm: 'block',
              base: 'none',
            }}>
            <VStack w='full' spacing={10}>
              <Image
                src={image}
                sx={{
                  filter:
                    'drop-shadow(2px 5px 6px  rgba(0,0,0,0.6)) grayscale(0.5)',
                }}
              />
              <PersonalInformation />
            </VStack>
          </GridItem>
          <GridItem
            colSpan={4}
            wordBreak={'break-word'}
            px={{ sm: 2, base: 5 }}>
            <Heading
              fontSize={{ sm: '7xl', base: '3xl' }}
              letterSpacing={'widest'}
              textAlign={{ sm: 'start', base: 'center' }}>
              Bagus Syamsu Rahmatullah
            </Heading>
            <Divider
              borderColor={'brand.background'}
              border={'2px'}
              borderRadius={'sm'}
              outline={0}
            />
            <Divider
              width={'30%'}
              borderColor={'brand.background'}
              border={'1px'}
              borderRadius={'sm'}
              outline={0}
            />
            <VStack mt='3' spacing={{ sm: '8', base: '4' }} align={'start'}>
              <Text
                letterSpacing={'widest'}
                fontSize={{ sm: 'sm', base: 'xs' }}
                mt={'3'}
                fontWeight={'light'}>
                Hy, I am from Bandung and i'm 22 years old,I am a student at the
                Universitas Pendidikan Indonesia with a Bachelor's degree with a
                major in Software Rekaya. Creative thinker, has a high curiosity
                and is adaptable. I have an interest in software development and
                data science
              </Text>
              <VStack align={'start'} w='full' spacing={{ sm: '4', base: '2' }}>
                <EducationSection />
                <ExperienceSection />
                <TechStackSection />
                <InterestSection />
              </VStack>
            </VStack>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};
