// @ts-check
import React, { type FC } from 'react';
import { CgMenuRight } from 'react-icons/cg';
import { Link as LinkRouter } from 'react-router-dom';
import { Box, Link } from '@chakra-ui/react';

import { type HandleOpen } from '../types';

interface Props {
  title: string[];
  openMenu: HandleOpen;
}

export const SideBar: FC<Props> = ({ openMenu, title }: Props) => {
  return (
    <>
      <Box
        overflowX={'hidden'}
        display={'flex'}
        flexDir={'column'}
        position={'absolute'}
        bg={'brand.background'}
        w={32}
        right={0}
        zIndex={200}>
        <Box
          position={'relative'}
          top={-1}
          onClick={openMenu}
          cursor={'pointer'}
          right={3}
          as={CgMenuRight}
          display={'flex'}
          alignSelf={'end'}
          fontSize={'24'}></Box>
        <Box
          as={'span'}
          display={'flex'}
          flexDir={'column'}
          py='4'
          rowGap={3}
          px='3'>
          {title.map((menu: string, index: number) => (
            <Link
              as={LinkRouter}
              to={`/${menu}`}
              key={index}
              textDecoration={'none'}
              position={'relative'}
              w={'fit-content'}
              _before={{
                content: '""',
                position: 'absolute',
                bottom: '0',
                display: 'block',
                width: '0',
                borderBottom: '2px solid #fff',
                transition: 'all 0.3s ease',
              }}
              _hover={{
                _before: {
                  width: '100%',
                },
              }}>
              {menu}
            </Link>
          ))}
        </Box>
      </Box>
      <Box
        top='0'
        aria-label='overlay'
        maxW={'100%'}
        maxH={'100%'}
        overflow={'hidden'}
        minH={'100vh'}
        minW={'100vw'}
        w='100%'
        h='100%'
        position={'absolute'}
        onClick={openMenu}></Box>
    </>
  );
};
