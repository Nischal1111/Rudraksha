"use client"
import SharedTitle from '@/shared/SharedTitle/SharedTitle'
import { generateStars } from '@/utils/generateStars';
import { Avatar, Button } from '@nextui-org/react';
import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Slider, { CustomArrowProps } from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewModal from './ReviewModal';


interface CustomArrowComponentProps extends CustomArrowProps {
    onClick?: () => void;
}

const CustomPrevArrow: React.FC<CustomArrowComponentProps> = ({ onClick }) => (
    <Button
        isIconOnly
        onClick={onClick}
        className="absolute -left-8 top-1/2 text-white -translate-y-1/2 z-10 bg-primary/50 hover:bg-opacity-100 rounded-full p-2 transition-all duration-300"
    >
        <FaChevronLeft />
    </Button>
)

const CustomNextArrow: React.FC<CustomArrowComponentProps> = ({ onClick }) => (
    <Button
        isIconOnly
        onClick={onClick}
        className="absolute -right-8 top-1/2 text-white -translate-y-1/2 z-10 bg-primary/50 hover:bg-opacity-100 rounded-full p-2 transition-all duration-300"
    >
        <FaChevronRight/>
    </Button>
)

const Reviews = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        centerPadding: '0px',
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        autoplay: true,
        cssEase: 'linear',
        pauseOnHover: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = (): void => setIsModalOpen(true);
    const handleCloseModal = (): void => setIsModalOpen(false);

    const reviews = [
            {
                id: 1,
                name: "Anjali Sharma",
                stars: 5,
                date: "2024-12-15",
                caption: "Life-Changing Experience",
                desc: "The rudraksha beads I purchased have truly transformed my spiritual practice. The quality is unmatched, and I can feel the positive energy every day. Highly recommend!"
            },
            {
                id: 2,
                name: "Rajesh Gupta",
                stars: 4,
                date: "2024-11-20",
                caption: "Good Quality Beads",
                desc: "The beads are authentic and of great quality. The only reason I gave 4 stars is because of the slight delay in delivery. Overall, very satisfied!"
            },
            {
                id: 3,
                name: "Priya Koirala",
                stars: 5,
                date: "2024-12-10",
                caption: "Exceptional Customer Service",
                desc: "The team guided me in selecting the right bead for my needs. The delivery was fast, and the packaging was beautiful. Great experience!"
            },
            {
                id: 4,
                name: "Deepak Thapa",
                stars: 4,
                date: "2024-11-18",
                caption: "Positive Energy",
                desc: "I feel calmer and more focused since I started wearing the rudraksha. Excellent quality, but I wish there were more size options available."
            },
            {
                id: 5,
                name: "Meera Das",
                stars: 5,
                date: "2024-12-01",
                caption: "Authenticity Guaranteed",
                desc: "It’s hard to find genuine rudraksha beads, but this site exceeded my expectations. The beads are authentic, and their energy is truly powerful."
            },
            {
                id: 6,
                name: "Arjun Mishra",
                stars: 3,
                date: "2024-11-30",
                caption: "Average Experience",
                desc: "The beads are decent, but I was expecting better clarity in the mukhi lines. Still, the customer support team was helpful."
            },
            {
                id: 7,
                name: "Kiran Rai",
                stars: 5,
                date: "2024-12-05",
                caption: "Highly Satisfied",
                desc: "The rudraksha beads are amazing. They have brought peace and positivity to my life. Thank you for this wonderful product!"
            },
            {
                id: 8,
                name: "Suman Joshi",
                stars: 4,
                date: "2024-12-12",
                caption: "Great Value for Money",
                desc: "I was impressed with the pricing and the quality. The beads are genuine, and the spiritual benefits are noticeable."
            },
            {
                id: 9,
                name: "Rita Pandey",
                stars: 5,
                date: "2024-11-25",
                caption: "Beautiful and Powerful",
                desc: "The beads are beautifully crafted and radiate positive energy. I couldn’t be happier with my purchase."
            },
            {
                id: 10,
                name: "Amit Chaudhary",
                stars: 4,
                date: "2024-11-22",
                caption: "Good Product",
                desc: "The product quality is excellent, but the delivery took longer than expected. Will definitely buy again."
            },
            {
                id: 11,
                name: "Nisha Adhikari",
                stars: 5,
                date: "2024-12-08",
                caption: "Highly Recommend",
                desc: "The rudraksha beads have helped me focus and find inner peace. Thank you for offering such high-quality products!"
            },
            {
                id: 12,
                name: "Binod Shrestha",
                stars: 3,
                date: "2024-11-27",
                caption: "Decent Purchase",
                desc: "While the beads seem authentic, the size was smaller than expected. Still, I appreciate the fast response from the customer support team."
            }
        ];

    return (
        <div className="w-full">
            <ReviewModal isOpen={isModalOpen} onClose={handleCloseModal} />
            <div className="px-4 md:px-16 mb-12">
                <SharedTitle title="Reviews" />
                <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center justify-between">
                    <div>
                        <h1 className="font-semibold text-3xl text-primary">Share Your Experience with Us</h1>
                        <p className="text-gray-500 text-sm text-justify my-4">
                            We value your journey with our authentic rudraksha beads and would love to hear about your experience. 
                            Share your review and let your voice guide others in discovering the power of rudraksha.
                        </p>
                    </div>
                    <Button onPress={handleOpenModal} className="px-12 rounded-sm bg-primary text-white hover:bg-primary/90">
                        Leave a review
                    </Button>
                </div>
            </div>

            <div className="w-full bg-gray-100 py-12 overflow-hidden relative px-20">
                <Slider {...settings}>
                    {reviews.map((item, index) => (
                            <div className='px-8 w-full relative min-h-[300px]' key={index}>
                                <div className="bg-white rounded-lg shadow-md h-auto px-10 py-8 hover:shadow-lg transition-shadow duration-300">
                                    <div className='flex gap-4 items-center mb-6'>
                                        <Avatar
                                            color='warning'
                                            as="button"
                                            size="md"
                                            src={`https://ui-avatars.com/api/?name=${item?.name}&background=E4C087&color=ffff`}
                                        />
                                        <div className='font-medium'>
                                            <h1 className='leading-5 '>{item.name}</h1>
                                            <p className='text-xs text-gray-400'>{item.date}</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-2 mt-4'>
                                        <div className='flex gap-1 text-primary text-xl'>{generateStars(item.stars)}</div>
                                        <div className='flex flex-col gap-1 mt-4'>
                                            <h1 className='text-lg font-light'>{item.caption}</h1>
                                            <p className='text-sm text-gray-500 text-justify'>{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </Slider>
            </div>
        </div>
    );
    };

export default Reviews;