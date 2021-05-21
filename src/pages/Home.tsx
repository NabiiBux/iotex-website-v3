import React from 'react';
import { observer, useLocalStore } from 'mobx-react-lite';
import { useStore } from '../store/index';
import { Flex, Box, Text, Image, Modal,
  ModalOverlay,
  ModalContent,
  ModalBody
} from '@chakra-ui/react';
import BasicLayout from '../Layouts/BasicLayout'
import {Banner} from '@/components/Banner/index'
import {DropCard} from '@/components/DropCardItem/index'
import {AwardWinning} from '@/components/AwardWinning/index'
import {NextGen} from '@/components/NextGen/index'
import {BuildOnIotex} from '@/components/BuildOnIotex/index'
import {IotexToken} from '@/components/IotexToken/index'
import {JoinRevolution} from '@/components/JoinRevolution/index'
import CountTo from 'react-count-to';

export const Home = observer(() => {
  const { lang } = useStore();
  const analysis = [
    {name: lang.t("devices"), amount: 5000, coin: '+' },
    {name: lang.t("dapps"), amount: 150, coin: '+' },
    {name: lang.t("users"), amount: 200, coin: 'K+' },
    {name: lang.t("delegates"), amount: 300, coin: '+' },
  ]

  const advantages = [
    {title: lang.t("advantage1"), icon: "/images/evm-icon.png", desc: lang.t("advantage1.tips")},
    {title: lang.t("advantage2"), icon: "/images/cross.png", desc: lang.t("advantage2.tips")},
    {title: lang.t("advantage3"), icon: "/images/roll.png", desc: lang.t("advantage3.tips")},
    {title: lang.t("advantage4"), icon: "/images/scalable.png", desc: lang.t("advantage4.tips")},
  ]

  const store = useLocalStore(() => ({
    isOpen: false,
    hoverIndex: 0,
    open() {
      store.isOpen = true
    },
    onClose() {
      store.isOpen = false
    },
  }));
  
  return (
    <BasicLayout>
      <Box css={{
        backgroundImage: 'url(/images/banner_left_bg.png),url(/images/banner_r_bg.png) ',
        backgroundSize: '100%, 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '0 0, 100% 0'
      }}>
        <Banner />
        <Flex color="white" flexWrap="wrap" justifyContent="space-between" alignItems="center" w={{base: "80%", md: "80%", "2xl": "1554px"}} mx="auto" mt={{base: "5rem", md: '2rem'}}>
          {
            analysis.map(item => {
              return <Box key={item.name}   textAlign="center" w={{base: "45%", md: "25%"}} mb={{base: "3rem", md: "0"}}>
                <Text fontWeight="medium" fontSize={{base: "2rem", md: "1.5rem", lg: "2rem", xl: "3rem", "2xl": "4rem"}} mb={{base: "0.5rem", md: "1rem"}}>
                  <CountTo from={0} to={item.amount} speed={5000}  />{item.coin}
                </Text>
                <Text fontSize={{base: "1rem",  lg: "0.875rem", xl: "1rem", "2xl": "1.25rem"}} color="#CCCCCC" fontWeight="semibold">{item.name}</Text>
              </Box>
            })
          }
        </Flex>
        <Box mt={{base: "1rem", md: "2rem", lg: "2.5rem", xl: "4rem"}} maxWidth={{base: "90%", md: "80%", "2xl": "1554px"}} mx="auto" position="relative">
        <Image
          boxSize={{base: "2rem", md:"4rem", xl: "5.25rem"}}
          objectFit="cover"
          src="/images/img_circular3.png"
          alt="img_circular3"
          mx={{base: "5%", md: "5%", lg: "8%", xl: "10%"}}
        />
      </Box>
        <Box mt={{base: "1rem", md: "2rem", lg: "2.5rem", xl: "3.3rem"}} mx="auto" maxWidth={{base: "90%", md: "80%", "2xl": "1554px"}}>
          <Text fontSize={{base: "1.5rem", sm: "1.875rem", lg: "2.5rem", xl: "4rem"}}  fontWeight="bold" width={{base: "70%", sm: "90%"}} mx="auto" textAlign="center" mb={{base: "1rem", md: "1.75rem"}}>
            {lang.t("title2")}
          </Text>
          <Text fontSize={{base: "0.875rem", md: "1rem", lg: "1.25rem", xl: "1.5rem"}} opacity="0.85" fontWeight="medium" textAlign="center" mb={{base: "1rem", md: "4.1875rem" }}whiteSpace="pre-line">
            {lang.t("subtitle2")}
          </Text>
        </Box>
        <Box pb="4.5rem" maxWidth={{base: '90%',md: "80%",  "2xl": "1554px"}} mx="auto" backgroundPosition={{base: "30% 12%", xl: "30% 90%"}} css={{
          backgroundImage: 'url(/images/award_wing_bg.png)',
          backgroundSize: '80%',
          backgroundRepeat: 'no-repeat',
        }}>
          <Box mx="auto" position="relative">
            <Box onClick={store.open}>
              <img src="/images/video.png" alt="" />
              <Flex w="100%" h="100%" justifyContent="center" alignItems="center" position="absolute" top="0" left="0">
                <Image
                  boxSize={{base: "40px", md: "80px"}}
                  objectFit="cover"
                  src="/images/play-icon.png"
                  alt="img_circular3"
                  mx="10%"
                />
              </Flex>
            </Box>
              <Modal isOpen={store.isOpen} onClose={store.onClose} size="6xl">
                <ModalOverlay />
                <ModalContent w="80%" h={{base: "50vh", md: "70vh"}}> 
                  <ModalBody  p="0.5rem" bg="bgColor" border="1px" borderColor="borderColor">
                    <iframe 
                      width="100%" height="100%" 
                      src="https://www.youtube.com/embed/gIVskvgzG9M?rel=0&amp&autoplay=1" 
                      title="YouTube video player" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                  </ModalBody>
                </ModalContent>
              </Modal>
          </Box>
          <Flex h={{base: "280px", md: "399px", xl: "337px"}} mb={{base: "2rem", xl: "8.56rem"}}>
            {
              advantages.map((item, index) => {
                return <Box key={item.title}>
                  <DropCard 
                    hoverIndex={store.hoverIndex} 
                    index={index} title={item.title} 
                    icon={item.icon} desc={item.desc}
                    changeHoverIndex={() => store.hoverIndex = -1}
                  />
                </Box>
              })
            }
          </Flex>
          <AwardWinning />
        </Box>
      </Box>
      
      <NextGen />
      <BuildOnIotex />
      <IotexToken />
      <JoinRevolution />
    </BasicLayout>
  );
});
