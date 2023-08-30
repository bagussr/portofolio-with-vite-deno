import React, { FC } from 'react';
import {
  Heading,
  HStack,
  VStack,
  Text,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';

export const ExperienceSection: FC = () => {
  return (
    <>
      <Heading fontSize={{ sm: '2xl', base: 'lg' }}>Experience</Heading>
      <HStack justifyContent={'space-between'} w='full' align={'start'}>
        <VStack align={'start'} spacing={'0'}>
          <Text fontSize={{ base: 'xs', sm: 'md' }}>
            Inter at PT. Mitra Solusi Aktual Integrasi
          </Text>
          <Text fontSize={{ sm: 'xs', base: 'x-small' }} opacity={'.75'}>
            Software Development
          </Text>
        </VStack>
        <Text
          fontWeight={'thin'}
          fontSize={{ sm: 'sm', base: 'xs' }}
          w='36'
          textAlign={'end'}>
          2023 - Present
        </Text>
      </HStack>
      <HStack justifyContent={'space-between'} w='full' align={'start'}>
        <VStack align={'start'} spacing={'0'}>
          <Text fontSize={{ base: 'xs', sm: 'md' }}>
            PT. ByPulsa Digital Indonesia
          </Text>
          <Text fontSize={{ sm: 'xs', base: 'x-small' }} opacity={'.75'}>
            Software Development
          </Text>
          <UnorderedList fontSize={{ sm: 'sm', base: 'xs' }} ps='5'>
            <ListItem>Creating User Interfaces for Apps Mobiile</ListItem>
            <ListItem>
              Developing the interface that has been created using Flutter
            </ListItem>
            <ListItem>
              Implementing the API into the developed application developed
            </ListItem>
            <ListItem>
              CI / CD for the application that has been developed and maintance
              or update the application
            </ListItem>
          </UnorderedList>
        </VStack>
        <Text
          fontWeight={'thin'}
          fontSize={{ sm: 'sm', base: 'xs' }}
          w={{ sm: '36', base: '52' }}
          textAlign={'end'}>
          2023 - Present
        </Text>
      </HStack>
      <HStack justifyContent={'space-between'} w='full' align={'start'}>
        <VStack align={'start'} spacing={'0'}>
          <Text fontSize={{ base: 'xs', sm: 'md' }}>
            Intern at PT. ByPulsa Digital Indonesia
          </Text>
          <Text fontSize={{ sm: 'xs', base: 'x-small' }} opacity={'.75'}>
            Mobile Developer
          </Text>
          <UnorderedList fontSize={{ sm: 'sm', base: 'xs' }} ps='5'>
            <ListItem>Creating User Interfaces for Apps Mobiile</ListItem>
            <ListItem>
              Developing the interface that has been created using Flutter
            </ListItem>
            <ListItem>
              Implementing the API into the developed application developed
            </ListItem>
          </UnorderedList>
        </VStack>
        <Text
          fontWeight={'thin'}
          fontSize={{ sm: 'sm', base: 'xs' }}
          w={{ sm: '36', base: '52' }}
          textAlign={'end'}>
          2023 - 2023
        </Text>
      </HStack>
      <HStack justifyContent={'space-between'} w='full' align={'start'}>
        <VStack align={'start'} spacing={'0'}>
          <Text fontSize={{ base: 'xs', sm: 'md' }}>Freelance</Text>
          <Text fontSize={{ sm: 'xs', base: 'x-small' }} opacity={'.75'}>
            Fullstack Developer
          </Text>
          <UnorderedList fontSize={{ sm: 'sm', base: 'xs' }} ps='5'>
            <ListItem>
              PT. Krepuskular Teknologi Indonesia - Support Backend
            </ListItem>
            <UnorderedList styleType={'circle'}>
              <ListItem>Faccia (Django)</ListItem>
            </UnorderedList>
          </UnorderedList>
        </VStack>
        <Text
          fontWeight={'thin'}
          fontSize={{ sm: 'sm', base: 'xs' }}
          w='36'
          textAlign={'end'}>
          2023 - 2023
        </Text>
      </HStack>
    </>
  );
};
