import { VStack, Text, Box } from "@chakra-ui/react"
import { Helmet } from 'react-helmet';
import ExperienceCard from '../components/ExperienceCard'
import { useEffect } from "react";

const Experience = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Helmet>
        <title>doctakim | Experience</title>
      </Helmet>
      <VStack
        spacing='3vh'
      >
        <Text className="page-title" fontSize='4rem' fontWeight={'medium'} pt={'6vh'} pb={{ base: '2vh', md: '4vh' }} >
          Experience
        </Text>

        <ExperienceCard
          website='https://cornellh4i.org/'
          title='hack4impact'
          role='Full Stack Software Engineer'
          image={"images/logos/hack4impact.jpeg"}
          alt='hack4impact Logo'
          date='09/2022 - Present'
          description='Building a platform for the homeless population of 
          Tompkins County to browse for available and affordable housing using 
          MongoDB, Express.js, React, and Node.js'
        />

        <ExperienceCard
          website='https://wazzle.app'
          title='Wazzle'
          role='Mobile Development Intern'
          image={"images/logos/wazzle.jpeg"}
          alt='Wazzle Logo'
          date='04/2022 - 08/2022'
          description='Implemented new features and design changes for an iOS 
          application that allows for more meaningful contact management for over 5000 users
          using Swift and SwiftUI'
        />

      </VStack>
      <Box pb='6vh'></Box>
    </div>

  )
}

export default Experience