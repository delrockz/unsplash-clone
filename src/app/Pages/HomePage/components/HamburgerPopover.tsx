import React, { useState } from 'react'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Divider,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger
} from '@chakra-ui/react'
import MenuIcon from '@mui/icons-material/Menu'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import GroupsIcon from '@mui/icons-material/Groups'
import GridViewIcon from '@mui/icons-material/GridView'
import Twitter from '@mui/icons-material/Twitter'
import Facebook from '@mui/icons-material/Facebook'
import Instagram from '@mui/icons-material/Instagram'
import TranslateIcon from '@mui/icons-material/Translate'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import CheckIcon from '@mui/icons-material/Check'
import ArticleIcon from '@mui/icons-material/Article'
import UnsplashButton from '../../../components/UnsplashButton'

const HamburgerPopover = () => {
  const companyLinks = ['About', 'History', 'Join the team', 'Blog', 'Press', 'Contact us', 'Help Center']
  const productLinks = ['Developers/API', 'Unsplash Dataset', 'Unsplash for iOS', 'Apps & Plugins']
  const communityLinks = ['Become a Contributor', 'Topics', 'Collections', 'Trends', 'Unsplash Awards', 'Stats']
  const footerLinks = ['License', 'Privacy Policy', 'Terms', 'Security']
  const languages = ['English', 'Español', 'Français', 'Italiano', '日本語']
  const [selectedLanguage, setSelectedLanguage] = useState('English')

  const Socials = () => (
    <div className='col-span-5 flex items-center gap-x-4'>
      <Box cursor='pointer' color={'gray.500'} _hover={{ color: 'gray.700' }} height={8}>
        <Twitter style={{ fontSize: '20px' }} />
      </Box>
      <Box cursor='pointer' color={'gray.500'} _hover={{ color: 'gray.700' }} height={8}>
        <Facebook style={{ fontSize: '20px' }} />
      </Box>
      <Box cursor='pointer' color={'gray.500'} _hover={{ color: 'gray.700' }} height={8}>
        <Instagram style={{ fontSize: '20px' }} />
      </Box>
    </div>
  )

  return (
    <Popover arrowSize={12} closeOnBlur closeOnEsc>
      <PopoverTrigger>
        <Box mt={1} cursor='pointer' color={'gray.500'} _hover={{ color: 'gray.700' }} height={8}>
          <MenuIcon />
        </Box>
      </PopoverTrigger>
      <PopoverContent width={'98.5%'} bg='white'>
        <PopoverArrow />
        <PopoverBody paddingX={[2, 2, 4, 8, 8]} paddingY={4}>
          <div className='hidden sm:block'>
            <div className='w-full bg-white grid grid-cols-1 sm:grid-cols-3 gap-2 items-start mb-4'>
              <div className='grid grid-cols-6 gap-4 items-center'>
                <BusinessCenterIcon className='col-span-1 text-gray-700' style={{ fontSize: '20px' }} />
                <p className='col-span-5'>Company</p>
                {companyLinks.map((link) => (
                  <>
                    <div className='col-span-1'></div>
                    <p className='col-span-5 text-gray-500 hover:text-gray-700 cursor-pointer text-sm'>{link}</p>
                  </>
                ))}
              </div>
              <div className='grid grid-cols-6 gap-4 items-center'>
                <GridViewIcon className='col-span-1 text-gray-700' style={{ fontSize: '20px' }} />
                <p className='col-span-5'>Product</p>
                {productLinks.map((link) => (
                  <>
                    <div className='col-span-1'></div>
                    <p className='col-span-5 text-gray-500 hover:text-gray-700 cursor-pointer text-sm'>{link}</p>
                  </>
                ))}
              </div>
              <div className='grid grid-cols-6 gap-4 items-center'>
                <GroupsIcon className='col-span-1 text-gray-700' style={{ fontSize: '20px' }} />
                <p className='col-span-5'>Community</p>
                {communityLinks.map((link) => (
                  <>
                    <div className='col-span-1'></div>
                    <p className='col-span-5 text-gray-500 hover:text-gray-700 cursor-pointer text-sm'>{link}</p>
                  </>
                ))}
                <div className='col-span-1'></div>
                <Socials />
              </div>
            </div>
            <Divider orientation='horizontal' className='my-4' />
            <div className='flex justify-between items-center'>
              <div className='flex items-center gap-x-3'>
                {footerLinks.map((link) => (
                  <>
                    <div className='col-span-1'></div>
                    <p className='col-span-5 text-gray-500 hover:text-gray-700 cursor-pointer text-sm'>{link}</p>
                  </>
                ))}
              </div>
              <Menu>
                <MenuButton fontSize={14}>
                  <TranslateIcon style={{ fontSize: '18px' }} className='text-gray-300 mb-1' /> &nbsp;{' '}
                  {selectedLanguage}
                  <ArrowDropDownIcon style={{ fontSize: '20px' }} className='text-gray-300 mb-1' />
                </MenuButton>
                <MenuList>
                  <MenuItem fontSize={14}>
                    <span className='w-5'></span>Select your language
                  </MenuItem>
                  {languages.map((lang) => (
                    <MenuItem
                      color={selectedLanguage === lang ? 'gray.700' : 'gray.500'}
                      _hover={{ color: 'gray.700' }}
                      onClick={() => setSelectedLanguage(lang)}
                      fontSize={14}
                    >
                      {selectedLanguage === lang ? (
                        <CheckIcon className='mt-1 mr-1' style={{ fontSize: '15px' }} />
                      ) : (
                        <span className='w-5'></span>
                      )}
                      {lang}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
            </div>
          </div>
          <div className='block sm:hidden'>
            <Accordion allowMultiple>
              <AccordionItem border={'none'}>
                <AccordionButton justifyContent={'space-between'} width={250}>
                  <Box as='span' flex='1' textAlign='left'>
                    <div className='flex gap-4 items-center'>
                      <BusinessCenterIcon className='col-span-1 text-gray-700' style={{ fontSize: '20px' }} />
                      <p className='col-span-5'>Company</p>
                    </div>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel py={0}>
                  <div className='grid-cols-1 ml-9'>
                    <p className='col-span-1 my-2 text-gray-500 hover:text-gray-700 cursor-pointer text-sm'>
                      Advertise
                    </p>
                    {companyLinks.map((link) => (
                      <>
                        <p className='col-span-1 my-2 text-gray-500 hover:text-gray-700 cursor-pointer text-sm'>
                          {link}
                        </p>
                      </>
                    ))}
                    <Socials />
                  </div>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem border={'none'}>
                <AccordionButton justifyContent={'space-between'} width={250}>
                  <Box as='span' flex='1' textAlign='left'>
                    <div className='flex gap-4 items-center'>
                      <GridViewIcon className='col-span-1 text-gray-700' style={{ fontSize: '20px' }} />
                      <p className='col-span-5'>Product</p>
                    </div>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel py={0}>
                  <div className='grid-cols-1 ml-9'>
                    {productLinks.map((link) => (
                      <>
                        <p className='col-span-1 my-2 text-gray-500 hover:text-gray-700 cursor-pointer text-sm'>
                          {link}
                        </p>
                      </>
                    ))}
                  </div>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem border={'none'}>
                <AccordionButton justifyContent={'space-between'} width={250}>
                  <Box as='span' flex='1' textAlign='left'>
                    <div className='flex gap-4 items-center'>
                      <GroupsIcon className='col-span-1 text-gray-700' style={{ fontSize: '20px' }} />
                      <p className='col-span-5'>Community</p>
                    </div>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel py={0}>
                  <div className='grid-cols-1 ml-9'>
                    {communityLinks.map((link) => (
                      <>
                        <p className='col-span-1 my-2 text-gray-500 hover:text-gray-700 cursor-pointer text-sm'>
                          {link}
                        </p>
                      </>
                    ))}
                  </div>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem border={'none'}>
                <AccordionButton justifyContent={'space-between'} width={250}>
                  <Box as='span' flex='1' textAlign='left'>
                    <div className='flex gap-4 items-center'>
                      <ArticleIcon className='col-span-1 text-gray-700' style={{ fontSize: '20px' }} />
                      <p className='col-span-5'>Legal</p>
                    </div>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel py={0}>
                  <div className='grid-cols-1 ml-9'>
                    {footerLinks.map((link) => (
                      <>
                        <p className='col-span-1 my-2 text-gray-500 hover:text-gray-700 cursor-pointer text-sm'>
                          {link}
                        </p>
                      </>
                    ))}
                  </div>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem border={'none'}>
                <AccordionButton justifyContent={'space-between'} width={250}>
                  <Box as='span' flex='1' textAlign='left'>
                    <div className='flex gap-4 items-center'>
                      <TranslateIcon className='col-span-1 text-gray-700' style={{ fontSize: '20px' }} />
                      <p className='col-span-5'>{selectedLanguage}</p>
                    </div>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel py={0}>
                  <div className='grid-cols-1 ml-9'>
                    {languages.map((language) => (
                      <>
                        <p className='col-span-1 my-2 text-gray-500 hover:text-gray-700 cursor-pointer text-sm'>
                          {language}
                        </p>
                      </>
                    ))}
                  </div>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Divider orientation='horizontal' className='my-4' />
            <div className='flex justify-evenly my-2'>
              <UnsplashButton>Submit a photo</UnsplashButton>
              <UnsplashButton>Login</UnsplashButton>
            </div>
            <p className='mt-3 text-center text-sm'>
              New to Unsplash? <span className='underline text-gray-500 hover:text-gray-700'>Sign up for free</span>
            </p>
          </div>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default HamburgerPopover
