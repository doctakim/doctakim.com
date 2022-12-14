import { Box, Image, Text } from "@chakra-ui/react"

const BlogImage = ({ src, alt, caption, caption2, maxW = '600px' }: { src: string, alt: string, caption?: string, caption2?: string, maxW?: string }) => {
  return (
    <Box pt='5vh' pb='2vh' maxWidth={maxW} alignSelf='center'>
      <Image src={src} alt={alt} borderRadius='xl' />
      <Box height='0.5rem'></Box>
      <Text as='i' fontSize={{ base: "md", md: "lg" }} paddingLeft='1.2rem'>{caption}</Text>
      <br></br>
      <Text as='i' fontSize={{ base: "md", md: "lg" }} paddingLeft='1.2rem'>{caption2}</Text>
    </Box >
  )
}

export default BlogImage