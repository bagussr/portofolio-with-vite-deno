import React from 'react';
import { staticData } from '../../assets/static';
import { Heading, Image, Flex } from '@chakra-ui/react';

const techList = [
  {
    name: 'Dart',
    link: 'https://dart.dev/',
    image: staticData.dart,
  },
  {
    name: 'Flask',
    link: 'https://flask.palletsprojects.com/en/2.3.x/',
    image: staticData.flask,
  },
  {
    name: 'Flutter',
    link: 'https://flutter.dev/',
    image: staticData.flutter,
  },
  {
    name: 'Javascript',
    link: 'https://developer.mozilla.org/en-US/docs/Web/javascript',
    image: staticData.javascript,
  },
  {
    name: 'Python',
    link: 'https://www.python.org/',
    image: staticData.python,
  },
  {
    name: 'React',
    link: 'https://reactjs.org/',
    image: staticData.react,
  },
  {
    name: 'Vite',
    link: 'https://vitejs.dev/',
    image: staticData.vite,
  },
  {
    name: 'Deno',
    link: 'https://deno.dev/',
    image: staticData.deno,
  },
  {
    name: 'Typescript',
    link: 'https://www.typescriptlang.org/',
    image: staticData.typescript,
  },
  {
    name: 'Nodejs',
    link: 'https://nodejs.org/en/',
    image: staticData.node,
  },
  {
    name: 'MongoDB',
    link: 'https://www.mongodb.com/',
    image: staticData.mongodb,
  },
  {
    name: 'Django',
    link: 'https://www.djangoproject.com/',
    image: staticData.django,
  },
  {
    name: 'Fresh',
    link: 'https://fresh.deno.dev/',
    image: staticData.fresh,
  },
  {
    name: 'Golang',
    link: 'https://golang.org/',
    image: staticData.golang,
  },
  {
    name: 'Matplotlib',
    link: 'https://matplotlib.org/',
    image: staticData.matplotlib,
  },
  {
    name: 'Pandas',
    link: 'https://pandas.pydata.org/',
    image: staticData.pandas,
  },
  {
    name: 'Nextjs',
    link: 'https://nextjs.org/',
    image: staticData.nextjs,
  },
  {
    name: 'Postgresql',
    link: 'https://www.postgresql.org/',
    image: staticData.postgres,
  },
  {
    name: 'Mysql',
    link: 'https://www.mysql.com/',
    image: staticData.mysql,
  },
  {
    name: 'Laravel',
    link: 'https://laravel.com/',
    image: staticData.laravel,
  },
  {
    name: 'Fastapi',
    link: 'https://fastapi.tiangolo.com',
    image: staticData.fastapi,
  },
  {
    name: 'Prisma',
    link: 'https://www.prisma.io/',
    image: staticData.prisma,
  },
  {
    name: 'Tailwindcss',
    link: 'https://tailwindcss.com/',
    image: staticData.tailwindcss,
  },
  {
    name: 'Chakra-ui',
    link: 'https://chakra-ui.com/',
    image: staticData.chakraUi,
  },
];

export const TechStackSection: React.FC = () => {
  const height = 12;
  const heightMobile = 8;
  return (
    <>
      <Heading fontSize={{ sm: '2xl', base: 'lg' }}>Technology Stack</Heading>
      <Flex flexWrap={'wrap'} gap={{ sm: 4, base: 2 }}>
        {techList.map((item, index) => (
          <a href={item.link} key={index} target='black'>
            <Image
              sx={{
                filter:
                  'drop-shadow(2px 5px 6px  rgba(0,0,0,0.3)) grayscale(0.3)',
              }}
              _hover={{
                filter:
                  'drop-shadow(2px 5px 6px  rgba(100,100,100,0.3)) brightness(1.1)',
              }}
              src={item.image}
              h={{ sm: height, base: heightMobile }}
              alt={item.name}
            />
          </a>
        ))}
      </Flex>
    </>
  );
};
