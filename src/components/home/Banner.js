
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import "./banner.css"

const data = [
    "https://assets.mspimages.in/wp-content/uploads/2021/10/Amazon-Great-Indian-Festival-main.jpg",
    "https://images.indianexpress.com/2022/08/Amazon-Great-Freedom-Sale-2022.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC3ZXtWyE9OnxYXcASoUzGYdaTRcHXfUChAHCkph8-lomSF18-XVamS3iHTTKBwIjsSX4&usqp=CAU",
    "https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2021/10/29/164320-amazon-india-twitter.jpg?itok=r1Zr8Bv9"
]


const Banner = () => {
    return (
        <Carousel
            className="carousel"
            autoPlay={true}
            animation='slide'
            indicators={false}
            navButtonsAlwaysInvisible={true}
            cycleNavigation={true}
            navButtonsProps={{
                style: {
                    backgroundColor: "#fff",
                    color: "#49494",
                    borderRadius: 0,
                    marginTop: -22,
                    height: "104px"

                }
            }

            }
        >
            {
                data.map((imag, i) => {
                    return (
                        <>
                            <img src={imag} alt="" className='banner_img' />

                        </>
                    )
                })
            }
        </Carousel>
    )
}
export default Banner