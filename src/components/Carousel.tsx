import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const HelloWorld = () => {
  return (
    <>
      <div className="hello-world"></div>
      <div className="container">
        <div className="mb-10 flex flex-col items-center gap-12 rounded-xl p-12 md:p-24">
          <h2 className="text-center text-3xl uppercase md:text-5xl">FEATURED SPONSORS & DONORS</h2>
          <div>
            <Carousel
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              className=""
              containerClass="container"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1080,
                  },
                  items: 3,
                  partialVisibilityGutter: 40,
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0,
                  },
                  items: 1,
                  partialVisibilityGutter: 30,
                },
                tablet: {
                  breakpoint: {
                    max: 1080,
                    min: 464,
                  },
                  items: 1,
                  partialVisibilityGutter: 30,
                },
              }}
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              <div>Item 1</div>
              <div>Item 2</div>
              <div>Item 3</div>
              <div>Item 4</div>
            </Carousel>
            <p>put stuf here</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default HelloWorld
