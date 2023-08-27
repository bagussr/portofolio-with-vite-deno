// @deno-types=types.ts

import React, { FC, useState } from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import { Link, Box, IconButton } from '@chakra-ui/react';
import { CgMenu } from 'react-icons/cg';
import { motion } from 'framer-motion';

import { type HandleOpen } from '../types';

import { SideBar } from './SideBar';
import { glowAnimation } from '../styles/animations';

const listMenu: String[] = ['About', 'Gallery', 'Project', 'Contact'];

export const NavBar: FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpen: HandleOpen = () => {
    setOpen(!open);
    console.log(open);
  };
  return (
    <>
      <Box maxW={'100vw'} color={'white'} position={'relative'}>
        <LinkRouter to='/'>
          <Box
            as={motion.div}
            animation={`${glowAnimation}  2s ease-in-out infinite`}
            className='custom-pattern'></Box>
        </LinkRouter>
        <Box
          display={{
            sm: 'block',
            base: 'none',
          }}
          as='svg'
          position={'absolute'}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 50 1440 320'>
          <path
            fill='#003459'
            d='M0,160L60,138.7C120,117,240,75,360,90.7C480,107,600,181,720,197.3C840,213,960,171,1080,165.3C1200,160,1320,192,1380,208L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z'></path>
        </Box>
        <Box
          position={'relative'}
          as='nav'
          display='flex'
          justifyContent={'center'}
          h={{
            base: '12',
            sm: '16',
          }}
          py={{
            base: '4',
          }}
          px={{
            base: '5',
            sm: '20',
          }}
          backgroundColor={{
            sm: 'transparent',
            base: 'brand.background',
          }}>
          <Box
            as='span'
            h='fit-content'
            display={{
              base: 'hidden',
              sm: 'flex',
            }}
            columnGap={{
              xl: '10',
              sm: '6',
              base: '5',
            }}>
            {listMenu.map((menu: String, index: number) => (
              <Link
                display={{
                  base: 'none',
                  sm: 'block',
                }}
                as={LinkRouter}
                to={`/${menu}`}
                key={index}
                textDecoration={'none'}
                position={'relative'}
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
          {open == false ? (
            <Box
              onClick={() => {
                handleOpen();
              }}
              position={'absolute'}
              right={3}
              top={3}
              cursor={'pointer'}
              fontSize={24}
              as={CgMenu}
              zIndex={100}
              display={{
                sm: 'none',
                base: 'block',
              }}></Box>
          ) : (
            <SideBar title={listMenu} openMenu={handleOpen} />
          )}
        </Box>
      </Box>
    </>
  );
};
