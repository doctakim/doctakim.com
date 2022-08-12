import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as CarouselTemp } from 'react-responsive-carousel';
import About1 from "../images/pictures/about1.jpeg"
import About2 from "../images/pictures/about2.jpeg"
import About3 from "../images/pictures/about3.jpeg"
import About4 from "../images/pictures/about4.jpeg"
import { Image } from "@chakra-ui/react";

const Carousel = () => {
  return (
    <CarouselTemp 
      infiniteLoop 
      useKeyboardArrows 
      autoPlay 
      transitionTime={250} 
      stopOnHover 
      showStatus={false} 
      showThumbs={false}
    >
        <div>
          <Image
            borderRadius='2xl'
            src={About1} 
            alt='Me In Winter'
          />
        </div>
        <div>
          <Image
            borderRadius='2xl'
            src={About2}
            alt='Me and Bro in AZ'
          />
        </div>
        <div>
          <Image
            borderRadius='2xl'
            src={About3}
            alt='Me Playing Tennis'
          />
        </div>
        <div>
          <Image
            borderRadius='2xl'
            src={About4}
            alt='AAIV boys'
          />
        </div>
    </CarouselTemp>
  )
}

export default Carousel