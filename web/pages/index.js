<<<<<<< HEAD
import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import HamburgerIcon from '@chakra-ui/icons';
import CloseIcon from '@chakra-ui/icons';

const Links = ['Home', 'Forum', 'Courses', 'Jobs', 'Housing', 'RateMyProfessor'];

const NavLink = ({ children }, { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function withAction() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>Logo</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
              bgColor={'gray.100'}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>My Profile</MenuItem>
                <MenuItem>Account Settings</MenuItem>
                <MenuDivider />
                <MenuItem>Log Out</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}>Main Content Here</Box>
    </>
  );
}
=======
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Homepage</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,600,700,800,900" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlinkLight.js/9.12.0/styles/railscasts.min.css" />
      </Head>
        <nav>
          <div className={`${styles.logo} ${styles.link} ${styles.linkLight}`}><strong>Student-Net</strong></div>
          <ul className={styles.menu}>
            <div className={`${styles.menu__item} ${styles.toggle}`}><span /></div>
            <li className={styles.menu__item}><Link href="#"><a className={`${styles.link}`}>Home</a></Link></li>
            <li className={styles.menu__item}><Link href="#"><a className={`${styles.link}`}>Forum</a></Link></li>
            <li className={styles.menu__item}><Link href="#"><a className={`${styles.link}`}>Courses</a></Link></li>
            <li className={styles.menu__item}><Link href="#"><a className={`${styles.link}`}>Housing</a></Link></li>
            <li className={styles.menu__item}><Link href="#"><a className={`${styles.link}`}>Jobs</a></Link></li>
            <li className={styles.menu__item}><Link href="#"><a className={`${styles.link}`}>RateMyProf</a></Link></li>
          </ul>
        </nav>
      </div>
  )
}
>>>>>>> upstream/main
