import { Box, Text } from '@chakra-ui/react'
import Typewriter from "typewriter-effect"
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="home-page">
            <Helmet>
                <title>doctakim | Home</title>
            </Helmet>
            <Box textAlign="center">
                <Text className="page-title" fontSize="4rem" pb={{ base: '2vh', md: '0' }}>Currently ...</Text>
                <Box className="home-page-typewriter" fontSize="2.5rem">
                    <Typewriter options={{ loop: true }}
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("Making a portfolio using React and TypeScript ⚛️")
                                .pauseFor(2000)
                                .deleteAll()
                                .typeString("Working on full stack development at Cornell hack4impact 💻 ")
                                .pauseFor(2000)
                                .deleteAll()
                                .typeString("Trying to get better at tennis 🎾 ")
                                .pauseFor(2000)
                                .start();
                        }}
                    />
                </Box>
            </Box>
        </div>
    )
}

export default Home