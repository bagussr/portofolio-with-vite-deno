import React from 'react';
import {
  VStack,
  Heading,
  HStack,
  Text,
  Link,
  Icon,
  Button,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { BsWhatsapp } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { LiaTelegram } from 'react-icons/lia';

export const PersonalInformation = () => {
  const downloadCv = () => {
    window.open('/docs/CV Bagus Syamsu R.pdf');
  };
  return (
    <>
      <VStack w='full' fontSize={'xs'} align={'start'}>
        <Heading fontSize={'lg'}>Personal Information</Heading>
        <HStack w='full' justifyContent={'space-between'}>
          <Text>place and date of birth</Text>
          <Text>Bandung, 2001 September 10</Text>
        </HStack>
        <HStack w='full' justifyContent={'space-between'}>
          <Text>Ethnicity and Nationality</Text>
          <Text>Sundanese, Indonesia</Text>
        </HStack>
        <HStack w='full' justifyContent={'space-between'}>
          <Text>Status</Text>
          <Text>Student</Text>
        </HStack>
        <HStack w='full' justifyContent={'space-between'} align={'start'}>
          <Text>Contact</Text>
          <HStack fontSize={'lg'}>
            <Link href='https://wa.me/6289614199751' target='blank'>
              <Icon as={BsWhatsapp} />
            </Link>
            <Link as={RouterLink} to='../contact'>
              <Icon as={HiOutlineMail} />
            </Link>
            <Link href='https://t.me/bagus_syr12' target='blank'>
              <Icon as={LiaTelegram} />
            </Link>
          </HStack>
        </HStack>
        <Button onClick={downloadCv} alignSelf={'center'}>
          Download CV
        </Button>
      </VStack>
    </>
  );
};
