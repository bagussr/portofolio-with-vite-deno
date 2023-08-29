import { HStack, Heading, VStack, Text } from '@chakra-ui/react';
import React from 'react';
export const EducationSection: React.FC = () => {
  return (
    <>
      <Heading fontSize={{ sm: '2xl', base: 'lg' }}>Education</Heading>
      <HStack justifyContent={'space-between'} w='full' align={'start'}>
        <VStack align={'start'} spacing={'0'}>
          <Text fontSize={{ base: 'xs', sm: 'md' }}>
            Universitas Pendidikan Indonesia
          </Text>
          <Text fontSize={{ sm: 'xs', base: 'x-small' }} opacity={'.75'}>
            S1 Rekayasa Perangkat Lunak
          </Text>
        </VStack>
        <Text
          fontWeight={'thin'}
          fontSize={{ sm: 'sm', base: 'xs' }}
          w='36'
          textAlign={'end'}>
          2020 - Present
        </Text>
      </HStack>
      <HStack justifyContent={'space-between'} w='full' align={'start'}>
        <VStack align={'start'} spacing={'0'}>
          <Text fontSize={{ base: 'xs', sm: 'md' }}>SMA Negeri 6 Bandung</Text>
          <Text fontSize={{ sm: 'xs', base: 'x-small' }} opacity={'.75'}>
            Mathematics and Natural Science
          </Text>
        </VStack>
        <Text
          fontWeight={'thin'}
          fontSize={{ sm: 'sm', base: 'xs' }}
          w='36'
          textAlign={'end'}>
          2017 - 2020
        </Text>
      </HStack>
      <HStack justifyContent={'space-between'} w='full' align={'start'}>
        <Text fontSize={{ base: 'xs', sm: 'md' }}>SMP Negeri 6 Bandung</Text>
        <Text
          fontWeight={'thin'}
          fontSize={{ sm: 'sm', base: 'xs' }}
          w='36'
          textAlign={'end'}>
          2017 - 2020
        </Text>
      </HStack>
    </>
  );
};
