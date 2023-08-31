import React, { FC } from 'react';
import { InterestButton } from '../button/InterestButton';
import { Flex, Heading } from '@chakra-ui/react';

const interest = [
  {
    name: 'Data Analyst',
    hex: 'brand.primary',
  },
  {
    name: 'Web Development',
    hex: 'brand.secondary',
  },
  {
    name: 'Mobile Development',
    hex: 'brand.background',
  },
  {
    name: 'Machine Learning',
    hex: 'brand.brown',
  },
  {
    name: 'UI/UX Design',
    hex: 'brand.blue',
  },
  {
    name: 'Web Security',
    hex: 'brand.green',
  },
  {
    name: 'Artificial Intelligence',
    hex: 'brand.black',
  },
  {
    name: 'Web Assembly',
    hex: 'brand.sky',
  },
  {
    name: 'Blockchain',
    hex: 'teal.400',
  },
];

export const InterestSection: FC = () => {
  return (
    <>
      <Heading fontSize={{ sm: '2xl', base: 'lg' }}>Interest</Heading>
      <Flex flexWrap={'wrap'} gap={5}>
        {interest.map((item, index) => (
          <InterestButton text={item.name} color={item.hex} key={index} />
        ))}
      </Flex>
    </>
  );
};
