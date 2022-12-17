import { Text, Box, Tabs, TabList, Tab, TabPanels, TabPanel, useColorModeValue } from "@chakra-ui/react"
import Employment from "./Employment"
import Projects from "./Projects"
import Coursework from "./Coursework"
import { useEffect } from "react"

const Experience = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Box>
      <Text className="page-title" align='center' fontSize='4rem' fontWeight={'medium'} pt={'6vh'} pb={{ base: '2vh', md: '4vh' }} >
        Experience
      </Text>
      <Tabs variant='soft-rounded' colorScheme='green' align='center'>
        <TabList>
          <Tab color={useColorModeValue('gray.600', 'white')} >Employment</Tab>
          <Tab color={useColorModeValue('gray.600', 'white')}>Projects</Tab>
          <Tab color={useColorModeValue('gray.600', 'white')}>Coursework</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Employment />
          </TabPanel>
          <TabPanel>
            <Projects />
          </TabPanel>
          <TabPanel>
            <Coursework />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default Experience