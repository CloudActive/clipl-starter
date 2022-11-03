import React, { useRef } from 'react';
import { Carousel } from '@mantine/carousel';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import SwiperCore, { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Switch } from '@mantine/core';

SwiperCore.use([EffectCoverflow, Pagination]);
function HomePage() {
  return (
    <>
      <div style={{ backgroundColor: '#faede3', display: 'flex' }}>
        <div style={{ padding: '20px' }}>
          <h1 style={{ fontFamily: 'Chivo,sans-serif', fontWeight: '1500', fontSize: '75px' }}>
            We are <span style={{ color: '#006d77' }}>awesome team</span> for your business dream
          </h1>
          <p
            style={{
              color: '#667085',
              fontSize: '24px',
              lineHeight: '32px',
              fontFamily: 'Noto Sans,sans-serif',
              fontWeight: '400',
            }}
          >
            Integrated workflow designed for product teams. We create world-class development and
            branding
          </p>
          <div>
            <button
              style={{
                height: '70px',
                width: '150px',
                color: 'white',
                backgroundColor: '#101828',
                fontFamily: 'Noto Sans,sans-serif',
                fontSize: '20px',
                fontWeight: '600',
                borderRadius: '50px',
              }}
            >
              Get Start
            </button>
            <button
              style={{
                height: '70px',
                width: '150px',
                color: 'Black',
                backgroundColor: 'transparent',
                fontFamily: 'Noto Sans,sans-serif',
                fontSize: '20px',
                fontWeight: '600',
                borderRadius: '50px',
                borderWidth: '0px',
              }}
            >
              Learn More
            </button>
          </div>
        </div>
        <div
          style={{
            backgroundColor: '#006d77',
            color: 'white',
            fontWeight: '700',
            fontSize: '30px',
            height: '200px',
            width: '500px',
            fontFamily: 'Chivo,sans-serif',
            letterSpacing: '0px',
            padding: '20px',
            marginTop: '300px',
          }}
        >
          Watch <br />
          intro <br />
          video
        </div>
        <img
          src="https://agon-nextjs.vercel.app/assets/imgs/page/homepage1/banner.png"
          style={{ height: '500px', width: '500px', marginTop: '180px' }}
        />
      </div>
      <div style={{ display: 'flex', marginTop: '20px', margin: '50px' }}>
        <div>
          <a>
            <img
              src="https://agon-nextjs.vercel.app/assets/imgs/slider/logo/sample-logo-1.svg"
              style={{ height: '40px', width: '200px' }}
            />
          </a>
        </div>
        <div>
          <a>
            <img
              src="https://agon-nextjs.vercel.app/assets/imgs/slider/logo/sample-logo-2.svg"
              style={{ height: '40px', width: '200px' }}
            />
          </a>
        </div>
        <div>
          <a>
            <img
              src="https://agon-nextjs.vercel.app/assets/imgs/slider/logo/sample-logo-3.svg"
              style={{ height: '40px', width: '200px' }}
            />
          </a>
        </div>
        <div>
          <a>
            <img
              src="https://agon-nextjs.vercel.app/assets/imgs/slider/logo/sample-logo-4.svg"
              style={{ height: '40px', width: '200px' }}
            />
          </a>
        </div>
        <div>
          <a>
            <img
              src="https://agon-nextjs.vercel.app/assets/imgs/slider/logo/sample-logo-5.svg"
              style={{ height: '40px', width: '200px' }}
            />
          </a>
        </div>
        <div>
          <a>
            <img
              src="https://agon-nextjs.vercel.app/assets/imgs/slider/logo/sample-logo-6.svg"
              style={{ height: '40px', width: '200px' }}
            />
          </a>
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <h1
          style={{
            fontFamily: 'Chivo,sans-serif',
            fontSize: '56px',
            fontWeight: '700',
            lineHeight: '64px',
          }}
        >
          See why we are trusted <br />
          the world over
        </h1>
        <p
          style={{
            color: '#475467',
            fontFamily: 'Noto Sans,sans-serif',
            fontWeight: '400',
            fontSize: '24px',
            lineHeight: '32px',
          }}
        >
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui <br />
          officia deserunt mollit laborum — semper quis lectus nulla.
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
          <button
            style={{
              height: '60px',
              width: '150px',
              fontSize: '20px',
              lineHeight: '22px',
              fontWeight: '700',
              fontFamily: 'Chivo,sans-serif',
              backgroundColor: '#f2f4f7',
              color: '#101828',
              borderWidth: '0px',
              borderRadius: '50px',
            }}
          >
            Branding
          </button>
          <button
            style={{
              height: '60px',
              width: '200px',
              fontSize: '20px',
              lineHeight: '22px',
              fontWeight: '700',
              fontFamily: 'Chivo,sans-serif',
              backgroundColor: '#f2f4f7',
              color: '#101828',
              borderWidth: '0px',
              borderRadius: '50px',
            }}
          >
            Development
          </button>
          <button
            style={{
              height: '60px',
              width: '200px',
              fontSize: '20px',
              lineHeight: '22px',
              fontWeight: '700',
              fontFamily: 'Chivo,sans-serif',
              backgroundColor: '#f2f4f7',
              color: '#101828',
              borderWidth: '0px',
              borderRadius: '50px',
            }}
          >
            Animation
          </button>
          <button
            style={{
              height: '60px',
              width: '250px',
              fontSize: '20px',
              lineHeight: '22px',
              fontWeight: '700',
              fontFamily: 'Chivo,sans-serif',
              backgroundColor: '#f2f4f7',
              color: '#101828',
              borderWidth: '0px',
              borderRadius: '50px',
            }}
          >
            User Experience
          </button>
          <button
            style={{
              height: '60px',
              width: '250px',
              fontSize: '20px',
              lineHeight: '22px',
              fontWeight: '700',
              fontFamily: 'Chivo,sans-serif',
              backgroundColor: '#f2f4f7',
              color: '#101828',
              borderWidth: '0px',
              borderRadius: '50px',
            }}
          >
            Social Network
          </button>
          <button
            style={{
              height: '60px',
              width: '180px',
              fontSize: '20px',
              lineHeight: '22px',
              fontWeight: '700',
              fontFamily: 'Chivo,sans-serif',
              backgroundColor: '#f2f4f7',
              color: '#101828',
              borderWidth: '0px',
              borderRadius: '50px',
            }}
          >
            Marketing
          </button>
        </div>
      </div>
      <div style={{ display: 'flex', backgroundColor: '#faede3', margin: '60px' }}>
        <div style={{ padding: '40px' }}>
          <h1
            style={{
              fontFamily: 'Chivo,sans-serif',
              fontWeight: '700',
              fontSize: '42px',
              lineHeight: '42px',
            }}
          >
            Design Studios That Everyone Should Know
          </h1>
          <p style={{ fontFamily: 'Noto Sans,sans-serif', fontWeight: '400', fontSize: '18px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <button
            style={{
              height: '50px',
              width: '200px',
              color: 'black',
              backgroundColor: 'white',
              borderWidth: '0px',
              fontWeight: '600',
              fontSize: '20px',
              borderRadius: '50px',
            }}
          >
            Learn More
          </button>
        </div>
        <img
          src="https://agon-nextjs.vercel.app/assets/imgs/page/homepage1/img-1.png"
          style={{ height: '500px', width: '600px' }}
        />
      </div>
      <div style={{ textAlign: 'center' }}>
        <h1
          style={{
            fontFamily: 'Chivo,sans-serif',
            fontSize: '56px',
            fontWeight: '700',
            lineHeight: '64px',
          }}
        >
          We facilitate the creation of
          <br />
          strategy and design
        </h1>
        <p
          style={{
            color: '#475467',
            fontFamily: 'Noto Sans,sans-serif',
            fontWeight: '400',
            fontSize: '24px',
            lineHeight: '32px',
          }}
        >
          Interactively transform magnetic growth strategies whereas
          <br />
          prospective "outside the box" thinking.
        </p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', padding: '60px' }}>
        <div
          style={{
            backgroundColor: '#dbece5',
            padding: '60px',
            borderRadius: '25px',
            marginRight: '15px',
          }}
        >
          <img src="https://agon-nextjs.vercel.app/assets/imgs/page/homepage1/business-strategy.svg" />
          <h1
            style={{
              fontFamily: 'Chivo,sans-serif',
              fontSize: '30px',
              fontWeight: '700',
              lineHeight: '24px',
            }}
          >
            Business Strategy
          </h1>
          <p
            style={{
              color: '#475467',
              fontFamily: 'Noto Sans,sans-serif',
              fontWeight: '400',
              fontSize: '18px',
              lineHeight: '32px',
            }}
          >
            You are always welcome to visit our little den. Professional in teir craft! All products
            were super amazing with strong attension to details, comps and overall vibe.
          </p>
          <button
            style={{
              height: '50px',
              width: '200px',
              color: 'black',
              backgroundColor: 'white',
              borderWidth: '0px',
              fontWeight: '600',
              fontSize: '20px',
              borderRadius: '50px',
            }}
          >
            Learn More
          </button>
        </div>
        <div
          style={{
            backgroundColor: '#d1ecfd',
            padding: '60px',
            borderRadius: '25px',
            marginRight: '15px',
          }}
        >
          <img src="https://agon-nextjs.vercel.app/assets/imgs/page/homepage1/local.svg" />
          <h1
            style={{
              fontFamily: 'Chivo,sans-serif',
              fontSize: '30px',
              fontWeight: '700',
              lineHeight: '24px',
            }}
          >
            Local Marketing
          </h1>
          <p
            style={{
              color: '#475467',
              fontFamily: 'Noto Sans,sans-serif',
              fontWeight: '400',
              fontSize: '18px',
              lineHeight: '32px',
            }}
          >
            You are always welcome to visit our little den. Professional in teir craft! All products
            were super amazing with strong attension to details, comps and overall vibe.
          </p>
          <button
            style={{
              height: '50px',
              width: '200px',
              color: 'black',
              backgroundColor: 'white',
              borderWidth: '0px',
              fontWeight: '600',
              fontSize: '20px',
              borderRadius: '50px',
            }}
          >
            Learn More
          </button>
        </div>
        <div
          style={{
            backgroundColor: '#fff3ea',
            padding: '60px',
            borderRadius: '25px',
            marginRight: '15px',
          }}
        >
          <img src="https://agon-nextjs.vercel.app/assets/imgs/page/homepage1/social.svg" />
          <h1
            style={{
              fontFamily: 'Chivo,sans-serif',
              fontSize: '30px',
              fontWeight: '700',
              lineHeight: '24px',
            }}
          >
            Social media
          </h1>
          <p
            style={{
              color: '#475467',
              fontFamily: 'Noto Sans,sans-serif',
              fontWeight: '400',
              fontSize: '18px',
              lineHeight: '32px',
            }}
          >
            You are always welcome to visit our little den. Professional in teir craft! All products
            were super amazing with strong attension to details, comps and overall vibe.
          </p>
          <button
            style={{
              height: '50px',
              width: '200px',
              color: 'black',
              backgroundColor: 'white',
              borderWidth: '0px',
              fontWeight: '600',
              fontSize: '20px',
              borderRadius: '50px',
            }}
          >
            Learn More
          </button>
        </div>
      </div>
      <div style={{ display: 'flex', padding: '60px' }}>
        <img
          src="https://agon-nextjs.vercel.app/assets/imgs/page/homepage1/img-2.png"
          style={{ height: '600px', width: '600px', borderRadius: '20px' }}
        />
        <div style={{ padding: '30px' }}>
          <span
            style={{
              backgroundColor: '#fff3ea',
              borderRadius: '50px',
              padding: '14px 28px',
              color: '#e29578',
              fontSize: '14px',
              lineHeight: '14px',
              fontFamily: 'Chivo,sans-serif',
            }}
          >
            What We Do, what You Get
          </span>
          <h1
            style={{
              fontFamily: 'Chivo,sans-serif',
              fontSize: '56px',
              color: '#101828',
              fontWeight: '700',
            }}
          >
            We believe that our works can contribute to a better world.
          </h1>
          <p
            style={{
              color: '#475467',
              fontFamily: 'Noto Sans,sans-serif',
              fontWeight: '400',
              fontSize: '25px',
              lineHeight: '32px',
            }}
          >
            Necessary to deliver white glove, fully managed campaigns that surpass industry
            benchmarks.Take your career to next level.
          </p>
          <div style={{ border: '1px dashed #006d77' }}></div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div className="icons-leaf">
                <h4
                  style={{
                    fontFamily: 'Chivo,sans-serif',
                    fontSize: '18px',
                    color: '#101828',
                    fontWeight: '700',
                    marginTop: '0px',
                  }}
                >
                  Boost your sale
                </h4>
                <p
                  style={{
                    color: '#475467',
                    fontFamily: 'Noto Sans,sans-serif',
                    fontWeight: '400',
                    fontSize: '18px',
                    lineHeight: '25px',
                  }}
                >
                  The latest design trends meet hand-crafted templates
                </p>
              </div>
              <div className="icons-leaf">
                <h4
                  style={{
                    fontFamily: 'Chivo,sans-serif',
                    fontSize: '18px',
                    color: '#101828',
                    fontWeight: '700',
                    marginTop: '0px',
                  }}
                >
                  Smart Installation Tools
                </h4>
                <p
                  style={{
                    color: '#475467',
                    fontFamily: 'Noto Sans,sans-serif',
                    fontWeight: '400',
                    fontSize: '18px',
                    lineHeight: '25px',
                  }}
                >
                  The latest design trends meet hand-crafted templates
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div className="icons-leaf">
                <h4
                  style={{
                    fontFamily: 'Chivo,sans-serif',
                    fontSize: '18px',
                    color: '#101828',
                    fontWeight: '700',
                    marginTop: '0px',
                  }}
                >
                  Introducing New Features
                </h4>
                <p
                  style={{
                    color: '#475467',
                    fontFamily: 'Noto Sans,sans-serif',
                    fontWeight: '400',
                    fontSize: '18px',
                    lineHeight: '25px',
                  }}
                >
                  The latest design trends meet hand-crafted templates
                </p>
              </div>
              <div className="icons-leaf">
                <h4
                  style={{
                    fontFamily: 'Chivo,sans-serif',
                    fontSize: '18px',
                    color: '#101828',
                    fontWeight: '700',
                    marginTop: '0px',
                  }}
                >
                  Dynamic Boosting
                </h4>
                <p
                  style={{
                    color: '#475467',
                    fontFamily: 'Noto Sans,sans-serif',
                    fontWeight: '400',
                    fontSize: '18px',
                    lineHeight: '25px',
                  }}
                >
                  The latest design trends meet hand-crafted templates
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: '#fff3ea', padding: '80px', margin: '120px' }}>
        <div style={{ textAlign: 'center' }}>
          <h1
            style={{
              color: '#101828',
              fontFamily: 'Chivo,sans-serif',
              fontSize: '56px',
              fontWeight: '700',
              lineHeight: '64px',
            }}
          >
            What We Offer
          </h1>
          <p
            style={{
              color: '#475467',
              fontFamily: 'Noto Sans,sans-serif',
              fontWeight: '400',
              fontSize: '24px',
              lineHeight: '32px',
            }}
          >
            What makes us different from others? We give <br />
            holistic solutions with strategy, design & technology.
          </p>
        </div>
        {/* <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '120px',
          }}
        > */}
        <Swiper
          effect={'coverflow'}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={false}
          className="mySwiper"
        >
          <SwiperSlide>
            <div
              style={{
                backgroundColor: 'white',
                height: '300px',
                width: '300px',
                padding: '20px',
                borderRadius: '20px',
                marginRight: '30px',
              }}
            >
              <img src="https://agon-nextjs.vercel.app/assets/imgs/page/homepage1/consulting.svg" />
              <h4
                style={{
                  fontWeight: '600',
                  fontSize: '22px',
                  lineHeight: '24px',
                  fontFamily: 'Chivo,sans-serif',
                  color: '#101828',
                }}
              >
                Stragetic <br />
                Consulating
              </h4>
              <p
                style={{
                  color: '#475467',
                  fontFamily: 'Noto Sans,sans-serif',
                  fontSize: '18px',
                  lineHeight: '25px',
                }}
              >
                One make creepeth, <br />
                man bearing theira <br />
                firmament.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                backgroundColor: 'white',
                height: '300px',
                width: '300px',
                padding: '20px',
                borderRadius: '20px',
                marginRight: '30px',
              }}
            >
              <img src="https://agon-nextjs.vercel.app/assets/imgs/page/homepage1/consulting.svg" />
              <h4
                style={{
                  fontWeight: '600',
                  fontSize: '22px',
                  lineHeight: '24px',
                  fontFamily: 'Chivo,sans-serif',
                  color: '#101828',
                }}
              >
                Stragetic <br />
                Consulating
              </h4>
              <p
                style={{
                  color: '#475467',
                  fontFamily: 'Noto Sans,sans-serif',
                  fontSize: '18px',
                  lineHeight: '25px',
                }}
              >
                One make creepeth, <br />
                man bearing theira <br />
                firmament.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                backgroundColor: 'white',
                height: '300px',
                width: '300px',
                padding: '20px',
                borderRadius: '20px',
                marginRight: '30px',
              }}
            >
              <img src="https://agon-nextjs.vercel.app/assets/imgs/page/homepage1/consulting.svg" />
              <h4
                style={{
                  fontWeight: '600',
                  fontSize: '22px',
                  lineHeight: '24px',
                  fontFamily: 'Chivo,sans-serif',
                  color: '#101828',
                }}
              >
                Stragetic <br />
                Consulating
              </h4>
              <p
                style={{
                  color: '#475467',
                  fontFamily: 'Noto Sans,sans-serif',
                  fontSize: '18px',
                  lineHeight: '25px',
                }}
              >
                One make creepeth, <br />
                man bearing theira <br />
                firmament.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                backgroundColor: 'white',
                height: '300px',
                width: '300px',
                padding: '20px',
                borderRadius: '20px',
                marginRight: '30px',
              }}
            >
              <img src="https://agon-nextjs.vercel.app/assets/imgs/page/homepage1/consulting.svg" />
              <h4
                style={{
                  fontWeight: '600',
                  fontSize: '22px',
                  lineHeight: '24px',
                  fontFamily: 'Chivo,sans-serif',
                  color: '#101828',
                }}
              >
                Stragetic <br />
                Consulating
              </h4>
              <p
                style={{
                  color: '#475467',
                  fontFamily: 'Noto Sans,sans-serif',
                  fontSize: '18px',
                  lineHeight: '25px',
                }}
              >
                One make creepeth, <br />
                man bearing theira <br />
                firmament.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
        {/* </div> */}
      </div>
      <div style={{ padding: '25px' }}>
        <h1
          style={{
            color: '#101828',
            fontFamily: 'Chivo,sans-serif',
            fontSize: '56px',
            fontWeight: '700',
            lineHeight: '64px',
          }}
        >
          Our Happy Customers
        </h1>
        <p
          style={{
            color: '#667085',
            fontSize: '24px',
            lineHeight: '32px',
            fontFamily: 'Noto Sans,sans-serif',
            fontWeight: '400',
          }}
        >
          Know about our clients, we are a woldwide corporate brand
        </p>
        <div style={{ display: 'flex' }}>
          <div
            style={{
              border: '10px solid #fad2e1',
              width: '250px',
              padding: '25px',
              marginRight: '25px',
            }}
          >
            <img
              src="https://agon-nextjs.vercel.app/assets/imgs/page/homepage1/user-3.png"
              style={{ height: '50px', width: '50px', borderRadius: '50px' }}
            />
            <h5
              style={{
                color: '#101828',
                fontFamily: 'Chivo,sans-serif',
                fontSize: '18px',
                fontWeight: '700',
                lineHeight: '24px',
              }}
            >
              Jenny Wilson
            </h5>
            <p
              style={{
                color: '#667085',
                fontSize: '13px',
                lineHeight: '16px',
                fontFamily: 'Noto Sans,sans-serif',
                fontWeight: '500',
              }}
            >
              Starbucks
            </p>
            <p
              style={{
                color: '#667085',
                fontSize: '19px',
                lineHeight: '28px',
                fontFamily: 'Noto Sans,sans-serif',
                fontWeight: '500',
              }}
            >
              So yes, the alcohol (ethanol) <br />
              in hand sanitizers <br />
              can be absorbed through the <br />
              skin, but no, it would <br />
              not cause intoxication
            </p>
          </div>
          <div
            style={{
              border: '10px solid #fad2e1',
              width: '250px',
              padding: '25px',
              marginRight: '25px',
              borderColor: '#bee1e6',
            }}
          >
            <img
              src="https://agon-nextjs.vercel.app/assets/imgs/page/homepage1/user-3.png"
              style={{ height: '50px', width: '50px', borderRadius: '50px' }}
            />
            <h5
              style={{
                color: '#101828',
                fontFamily: 'Chivo,sans-serif',
                fontSize: '18px',
                fontWeight: '700',
                lineHeight: '24px',
              }}
            >
              Jenny Wilson
            </h5>
            <p
              style={{
                color: '#667085',
                fontSize: '13px',
                lineHeight: '16px',
                fontFamily: 'Noto Sans,sans-serif',
                fontWeight: '500',
              }}
            >
              Starbucks
            </p>
            <p
              style={{
                color: '#667085',
                fontSize: '19px',
                lineHeight: '28px',
                fontFamily: 'Noto Sans,sans-serif',
                fontWeight: '500',
              }}
            >
              So yes, the alcohol (ethanol) <br />
              in hand sanitizers <br />
              can be absorbed through the <br />
              skin, but no, it would <br />
              not cause intoxication
            </p>
          </div>
          <div
            style={{
              border: '10px solid #fad2e1',
              width: '250px',
              padding: '25px',
              marginRight: '25px',
              borderColor: '#ddd3fa',
            }}
          >
            <img
              src="https://agon-nextjs.vercel.app/assets/imgs/page/homepage1/user-3.png"
              style={{ height: '50px', width: '50px', borderRadius: '50px' }}
            />
            <h5
              style={{
                color: '#101828',
                fontFamily: 'Chivo,sans-serif',
                fontSize: '18px',
                fontWeight: '700',
                lineHeight: '24px',
              }}
            >
              Jenny Wilson
            </h5>
            <p
              style={{
                color: '#667085',
                fontSize: '13px',
                lineHeight: '16px',
                fontFamily: 'Noto Sans,sans-serif',
                fontWeight: '500',
              }}
            >
              Starbucks
            </p>
            <p
              style={{
                color: '#667085',
                fontSize: '19px',
                lineHeight: '28px',
                fontFamily: 'Noto Sans,sans-serif',
                fontWeight: '500',
              }}
            >
              So yes, the alcohol (ethanol) <br />
              in hand sanitizers <br />
              can be absorbed through the <br />
              skin, but no, it would <br />
              not cause intoxication
            </p>
          </div>
          <div
            style={{
              border: '10px solid #fad2e1',
              width: '250px',
              padding: '25px',
              marginRight: '25px',
            }}
          >
            <img
              src="https://agon-nextjs.vercel.app/assets/imgs/page/homepage1/user-3.png"
              style={{ height: '50px', width: '50px', borderRadius: '50px' }}
            />
            <h5
              style={{
                color: '#101828',
                fontFamily: 'Chivo,sans-serif',
                fontSize: '18px',
                fontWeight: '700',
                lineHeight: '24px',
              }}
            >
              Jenny Wilson
            </h5>
            <p
              style={{
                color: '#667085',
                fontSize: '13px',
                lineHeight: '16px',
                fontFamily: 'Noto Sans,sans-serif',
                fontWeight: '500',
              }}
            >
              Starbucks
            </p>
            <p
              style={{
                color: '#667085',
                fontSize: '19px',
                lineHeight: '28px',
                fontFamily: 'Noto Sans,sans-serif',
                fontWeight: '500',
              }}
            >
              So yes, the alcohol (ethanol) <br />
              in hand sanitizers <br />
              can be absorbed through the <br />
              skin, but no, it would <br />
              not cause intoxication
            </p>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        <div>
          <h1
            style={{
              color: '#101828',
              fontFamily: 'Chivo,sans-serif',
              fontSize: '56px',
              fontWeight: '700',
              lineHeight: '64px',
            }}
          >
            Latest News
          </h1>
          <p
            style={{
              color: '#667085',
              fontSize: '24px',
              lineHeight: '32px',
              fontFamily: 'Noto Sans,sans-serif',
              fontWeight: '400',
            }}
          >
            From Our blog and Event fanpage
          </p>
        </div>
        <button
          style={{
            color: 'white',
            backgroundColor: 'black',
            height: '80px',
            width: '200px',
            fontSize: '20px',
            fontFamily: 'Noto Sans,sans-serif',
            fontWeight: '600',
            borderRadius: '50px',
            marginTop: '70px',
          }}
        >
          View More
        </button>
      </div>
      <div style={{ display: 'flex', padding: '20px' }}>
        <div>
          <span className="tag-dot">Company</span>
          <h1
            style={{
              color: '#101828',
              fontFamily: 'Chivo,sans-serif',
              fontSize: '28px',
              fontWeight: '700',
              lineHeight: '32px',
            }}
          >
            We can blend colors multiple ways, <br />
            the most common
          </h1>
          <img
            src="https://agon-nextjs.vercel.app/assets/imgs/page/homepage1/img-news-1.png"
            style={{ height: '300px', width: '380px', borderRadius: '20px' }}
          />
        </div>
        <div>
          <span className="tag-dot">MARKETING EVENT</span>
          <h1
            style={{
              color: '#101828',
              fontFamily: 'Chivo,sans-serif',
              fontSize: '28px',
              fontWeight: '700',
              lineHeight: '32px',
            }}
          >
            How To Blow Through Capital At <br />
            An Incredible Rate
          </h1>
          <img
            src="https://agon-nextjs.vercel.app/assets/imgs/page/homepage1/img-news-2.png"
            style={{ height: '300px', width: '350px', borderRadius: '20px' }}
          />
        </div>
        <div>
          <span className="tag-dot">CUSTOMER SERVICES</span>
          <h1
            style={{
              color: '#101828',
              fontFamily: 'Chivo,sans-serif',
              fontSize: '28px',
              fontWeight: '700',
              lineHeight: '32px',
            }}
          >
            Design Studios That <br />
            Everyone Should Know About?
          </h1>
          <img
            src="https://agon-nextjs.vercel.app/assets/imgs/page/homepage1/img-news-3.png"
            style={{ height: '300px', width: '350px', borderRadius: '20px' }}
          />
        </div>
      </div>
      <div style={{ backgroundColor: '#006d77', textAlign: 'center', padding: '20px' }}>
        <h1
          style={{
            color: 'white',
            fontFamily: 'Chivo,sans-serif',
            fontSize: '44px',
            fontWeight: '700',
            lineHeight: '54px',
            letterSpacing: '1%',
          }}
        >
          Choose The Best Plan
          <br />
          That's For You
        </h1>
        <p
          style={{
            color: 'white',
            fontSize: '16px',
            lineHeight: '28px',
            fontFamily: 'Noto Sans,sans-serif',
            fontWeight: '500',
          }}
        >
          Billed Monthly <Switch />
          Billed Annually
        </p>

        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div
            style={{
              backgroundColor: 'white',
              padding: '10px',
              width: '280px',
              borderRadius: '20px',
            }}
          >
            <p
              style={{
                color: '#667085',
                fontSize: '16px',
                lineHeight: '28px',
                fontFamily: 'Noto Sans,sans-serif',
                fontWeight: '500',
                letterSpacing: '1%',
              }}
            >
              <span
                style={{
                  color: '#101828',
                  fontFamily: 'Chivo,sans-serif',
                  fontSize: '35px',
                  fontWeight: '700',
                  lineHeight: '38px',
                }}
              >
                $50
              </span>
              /Month
            </p>
            <h1
              style={{
                color: '#101828',
                fontFamily: 'Chivo,sans-serif',
                fontSize: '28px',
                fontWeight: '700',
                lineHeight: '34px',
              }}
            >
              Standard
            </h1>
            <p
              style={{
                color: '#667085',
                fontSize: '16px',
                lineHeight: '28px',
                fontFamily: 'Noto Sans,sans-serif',
                fontWeight: '500',
                letterSpacing: '1%',
              }}
            >
              All the basics for businesses that are just getting started.
            </p>
            <hr />
            <ul className="list-package-feature">
              <li
                style={{
                  color: '#667085',
                  fontSize: '16px',
                  lineHeight: '28px',
                  fontFamily: 'Noto Sans,sans-serif',
                  fontWeight: '500',
                  letterSpacing: '1%',
                }}
              >
                Unlimited updates
              </li>
              <li
                style={{
                  color: '#667085',
                  fontSize: '16px',
                  lineHeight: '28px',
                  fontFamily: 'Noto Sans,sans-serif',
                  fontWeight: '500',
                  letterSpacing: '1%',
                }}
              >
                Custom permissions
              </li>
              <li
                className="uncheck"
                style={{
                  color: '#667085',
                  fontSize: '16px',
                  lineHeight: '28px',
                  fontFamily: 'Noto Sans,sans-serif',
                  fontWeight: '500',
                  letterSpacing: '1%',
                }}
              >
                Custom designs &amp; features
              </li>
              <li
                className="uncheck"
                style={{
                  color: '#667085',
                  fontSize: '16px',
                  lineHeight: '28px',
                  fontFamily: 'Noto Sans,sans-serif',
                  fontWeight: '500',
                  letterSpacing: '1%',
                }}
              >
                Custom hashtags
              </li>
            </ul>
            <button
              style={{
                backgroundColor: 'transparent',
                height: '60px',
                width: '200px',
                borderWidth: '2px',
                borderRadius: '20px',
              }}
            >
              Get Started
            </button>
          </div>
          <div
            style={{
              backgroundColor: 'white',
              padding: '10px',
              width: '280px',
              borderRadius: '20px',
            }}
          >
            <p
              style={{
                color: '#667085',
                fontSize: '16px',
                lineHeight: '28px',
                fontFamily: 'Noto Sans,sans-serif',
                fontWeight: '500',
                letterSpacing: '1%',
              }}
            >
              <span
                style={{
                  color: '#101828',
                  fontFamily: 'Chivo,sans-serif',
                  fontSize: '35px',
                  fontWeight: '700',
                  lineHeight: '38px',
                }}
              >
                $50
              </span>
              /Month
            </p>
            <h1
              style={{
                color: '#101828',
                fontFamily: 'Chivo,sans-serif',
                fontSize: '28px',
                fontWeight: '700',
                lineHeight: '34px',
              }}
            >
              Standard
            </h1>
            <p
              style={{
                color: '#667085',
                fontSize: '16px',
                lineHeight: '28px',
                fontFamily: 'Noto Sans,sans-serif',
                fontWeight: '500',
                letterSpacing: '1%',
              }}
            >
              All the basics for businesses that are just getting started.
            </p>
            <hr />
            <ul className="list-package-feature">
              <li
                style={{
                  color: '#667085',
                  fontSize: '16px',
                  lineHeight: '28px',
                  fontFamily: 'Noto Sans,sans-serif',
                  fontWeight: '500',
                  letterSpacing: '1%',
                }}
              >
                Unlimited updates
              </li>
              <li
                style={{
                  color: '#667085',
                  fontSize: '16px',
                  lineHeight: '28px',
                  fontFamily: 'Noto Sans,sans-serif',
                  fontWeight: '500',
                  letterSpacing: '1%',
                }}
              >
                Custom permissions
              </li>
              <li
                
                style={{
                  color: '#667085',
                  fontSize: '16px',
                  lineHeight: '28px',
                  fontFamily: 'Noto Sans,sans-serif',
                  fontWeight: '500',
                  letterSpacing: '1%',
                }}
              >
                Custom designs &amp; features
              </li>
              <li
                className="uncheck"
                style={{
                  color: '#667085',
                  fontSize: '16px',
                  lineHeight: '28px',
                  fontFamily: 'Noto Sans,sans-serif',
                  fontWeight: '500',
                  letterSpacing: '1%',
                }}
              >
                Custom hashtags
              </li>
            </ul>
            <button
              style={{
                backgroundColor: 'transparent',
                height: '60px',
                width: '200px',
                borderWidth: '2px',
                borderRadius: '20px',
              }}
            >
              Get Started
            </button>
          </div>
          <div
            style={{
              backgroundColor: 'white',
              padding: '10px',
              width: '280px',
              borderRadius: '20px',
            }}
          >
            <p
              style={{
                color: '#667085',
                fontSize: '16px',
                lineHeight: '28px',
                fontFamily: 'Noto Sans,sans-serif',
                fontWeight: '500',
                letterSpacing: '1%',
              }}
            >
              <span
                style={{
                  color: '#101828',
                  fontFamily: 'Chivo,sans-serif',
                  fontSize: '35px',
                  fontWeight: '700',
                  lineHeight: '38px',
                }}
              >
                $50
              </span>
              /Month
            </p>
            <h1
              style={{
                color: '#101828',
                fontFamily: 'Chivo,sans-serif',
                fontSize: '28px',
                fontWeight: '700',
                lineHeight: '34px',
              }}
            >
              Standard
            </h1>
            <p
              style={{
                color: '#667085',
                fontSize: '16px',
                lineHeight: '28px',
                fontFamily: 'Noto Sans,sans-serif',
                fontWeight: '500',
                letterSpacing: '1%',
              }}
            >
              All the basics for businesses that are just getting started.
            </p>
            <hr />
            <ul className="list-package-feature">
              <li
                style={{
                  color: '#667085',
                  fontSize: '16px',
                  lineHeight: '28px',
                  fontFamily: 'Noto Sans,sans-serif',
                  fontWeight: '500',
                  letterSpacing: '1%',
                }}
              >
                Unlimited updates
              </li>
              <li
                style={{
                  color: '#667085',
                  fontSize: '16px',
                  lineHeight: '28px',
                  fontFamily: 'Noto Sans,sans-serif',
                  fontWeight: '500',
                  letterSpacing: '1%',
                }}
              >
                Custom permissions
              </li>
              <li
                
                style={{
                  color: '#667085',
                  fontSize: '16px',
                  lineHeight: '28px',
                  fontFamily: 'Noto Sans,sans-serif',
                  fontWeight: '500',
                  letterSpacing: '1%',
                }}
              >
                Custom designs &amp; features
              </li>
              <li
                
                style={{
                  color: '#667085',
                  fontSize: '16px',
                  lineHeight: '28px',
                  fontFamily: 'Noto Sans,sans-serif',
                  fontWeight: '500',
                  letterSpacing: '1%',
                }}
              >
                Custom hashtags
              </li>
            </ul>
            <button
              style={{
                backgroundColor: 'transparent',
                height: '60px',
                width: '200px',
                borderWidth: '2px',
                borderRadius: '20px',
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: '#fff3ea',
          padding: '80px',
          margin: '140px',
          display: 'flex',
          justifyContent: 'space-between',
          height: '400px',
        }}
      >
        <div>
          <p
            style={{
              fontFamily: 'Noto Sans,sans-serif',
              fontWeight: '400',
              fontSize: '14px',
              lineHeight: '19px',
              letterSpacing: '2px',
            }}
          >
            NEWSLETTER
          </p>
          <h1
            style={{
              color: '#101828',
              fontFamily: 'Chivo,sans-serif',
              fontSize: '42px',
              fontWeight: '700',
              lineHeight: '44px',
            }}
          >
            Subscribe our newsletter
          </h1>
          <p
            style={{
              fontFamily: 'Noto Sans,sans-serif',
              fontWeight: '400',
              fontSize: '18px',
              lineHeight: '28px',
              letterSpacing: '0px',
            }}
          >
            By clicking the button, you are agreeing with our
          </p>
          <a
            style={{
              fontFamily: 'Noto Sans,sans-serif',
              fontWeight: '400',
              fontSize: '18px',
              lineHeight: '28px',
              letterSpacing: '0px',
              color: '#006d77',
            }}
          >
            {' '}
            Term & Conditions
          </a>
          <form>
            <div style={{ display: 'flex', marginTop: '40px' }}>
              <input
                placeholder="Enter you mail ..."
                style={{
                  background: '#fff',
                  width: '300px',
                  height: '50px',
                  borderRadius: '0px',
                  borderWidth: '0px',
                  marginBottom: '50px',
                  padding: '20px',
                  borderBottomLeftRadius: '40px',
                  borderTopLeftRadius: '40px',
                }}
              />
              <button className="btn-send"></button>
            </div>
          </form>
        </div>
        {/* <img src="https://agon-nextjs.vercel.app/assets/imgs/template/chart.png" style={{height:"200px",width:"200px",position:"absolute",bottom:"0",left:"0",zIndex:"2"}} /> */}
        <img
          src="https://agon-nextjs.vercel.app/assets/imgs/template/img-newsletter.png"
          style={{ width: '400px', height: '500px', borderRadius: '20px' }}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        <img src="https://agon-nextjs.vercel.app/assets/imgs/template/logo.svg" />
        <div style={{ display: 'flex' }}>
          <h1
            style={{
              color: '#101828',
              fontFamily: 'Chivo,sans-serif',
              fontSize: '18px',
              fontWeight: '700',
              lineHeight: '24px',
              marginRight: '15px',
            }}
          >
            Ready to get started ?
          </h1>
          <button
            style={{
              color: 'white',
              backgroundColor: 'black',
              height: '40px',
              width: '150px',
              fontSize: '15px',
              fontFamily: 'Noto Sans,sans-serif',
              fontWeight: '600',
              borderRadius: '10px',
            }}
          >
            View More
          </button>
        </div>
      </div>
      <hr />
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        <div>
          <h1
            style={{
              color: '#101828',
              fontFamily: 'Chivo,sans-serif',
              fontSize: '22px',
              fontWeight: '700',
              lineHeight: '24px',
              marginRight: '15px',
            }}
          >
            Contacts
          </h1>
          <p
            style={{
              color: '#667085',
              fontSize: '18px',
              lineHeight: '20px',
              fontFamily: 'Noto Sans,sans-serif',
              fontWeight: '400',
            }}
          >
            4517 Washington Ave.
            <br />
            Manchester, Kentucky 39495
          </p>
          <p
            style={{
              color: '#667085',
              fontSize: '18px',
              lineHeight: '20px',
              fontFamily: 'Noto Sans,sans-serif',
              fontWeight: '400',
            }}
          >
            (239) 555-0108
            <br />
            contact@agon.com
          </p>
        </div>
        <div>
          <h1
            style={{
              color: '#101828',
              fontFamily: 'Chivo,sans-serif',
              fontSize: '22px',
              fontWeight: '700',
              lineHeight: '24px',
              marginRight: '15px',
            }}
          >
            About Us
          </h1>
          <p
            style={{
              color: '#667085',
              fontSize: '18px',
              lineHeight: '20px',
              fontFamily: 'Noto Sans,sans-serif',
              fontWeight: '400',
            }}
          >
            Mission & Vision
          </p>
          <p
            style={{
              color: '#667085',
              fontSize: '18px',
              lineHeight: '20px',
              fontFamily: 'Noto Sans,sans-serif',
              fontWeight: '400',
            }}
          >
            Our Teams
          </p>
          <p
            style={{
              color: '#667085',
              fontSize: '18px',
              lineHeight: '20px',
              fontFamily: 'Noto Sans,sans-serif',
              fontWeight: '400',
            }}
          >
            Carrers
          </p>
          <p
            style={{
              color: '#667085',
              fontSize: '18px',
              lineHeight: '20px',
              fontFamily: 'Noto Sans,sans-serif',
              fontWeight: '400',
            }}
          >
            Press Media
          </p>
          <p
            style={{
              color: '#667085',
              fontSize: '18px',
              lineHeight: '20px',
              fontFamily: 'Noto Sans,sans-serif',
              fontWeight: '400',
            }}
          >
            Advertising
          </p>
          <p
            style={{
              color: '#667085',
              fontSize: '18px',
              lineHeight: '20px',
              fontFamily: 'Noto Sans,sans-serif',
              fontWeight: '400',
            }}
          >
            Testimonials
          </p>
        </div>
        <div>
          <h1
            style={{
              color: '#101828',
              fontFamily: 'Chivo,sans-serif',
              fontSize: '22px',
              fontWeight: '700',
              lineHeight: '24px',
              marginRight: '15px',
            }}
          >
            Discovers
          </h1>
          <p
            style={{
              color: '#667085',
              fontSize: '18px',
              lineHeight: '20px',
              fontFamily: 'Noto Sans,sans-serif',
              fontWeight: '400',
            }}
          >
            Our Blog
          </p>
          <p
            style={{
              color: '#667085',
              fontSize: '18px',
              lineHeight: '20px',
              fontFamily: 'Noto Sans,sans-serif',
              fontWeight: '400',
            }}
          >
            Plans & Pricing
          </p>
          <p
            style={{
              color: '#667085',
              fontSize: '18px',
              lineHeight: '20px',
              fontFamily: 'Noto Sans,sans-serif',
              fontWeight: '400',
            }}
          >
            Knowledge Base
          </p>
          <p
            style={{
              color: '#667085',
              fontSize: '18px',
              lineHeight: '20px',
              fontFamily: 'Noto Sans,sans-serif',
              fontWeight: '400',
            }}
          >
            Cookie Policy
          </p>
          <p
            style={{
              color: '#667085',
              fontSize: '18px',
              lineHeight: '20px',
              fontFamily: 'Noto Sans,sans-serif',
              fontWeight: '400',
            }}
          >
            Office Center
          </p>
          <p
            style={{
              color: '#667085',
              fontSize: '18px',
              lineHeight: '20px',
              fontFamily: 'Noto Sans,sans-serif',
              fontWeight: '400',
            }}
          >
            News & Events
          </p>
        </div>
        <div>
          <h1
            style={{
              color: '#101828',
              fontFamily: 'Chivo,sans-serif',
              fontSize: '22px',
              fontWeight: '700',
              lineHeight: '24px',
              marginRight: '15px',
            }}
          >
            Supports
          </h1>
          <p
            style={{
              color: '#667085',
              fontSize: '18px',
              lineHeight: '20px',
              fontFamily: 'Noto Sans,sans-serif',
              fontWeight: '400',
            }}
          >
            Mission & Vision
          </p>
          <p
            style={{
              color: '#667085',
              fontSize: '18px',
              lineHeight: '20px',
              fontFamily: 'Noto Sans,sans-serif',
              fontWeight: '400',
            }}
          >
            FAQs
          </p>
          <p
            style={{
              color: '#667085',
              fontSize: '18px',
              lineHeight: '20px',
              fontFamily: 'Noto Sans,sans-serif',
              fontWeight: '400',
            }}
          >
            Editior Help
          </p>
          <p
            style={{
              color: '#667085',
              fontSize: '18px',
              lineHeight: '20px',
              fontFamily: 'Noto Sans,sans-serif',
              fontWeight: '400',
            }}
          >
            Community
          </p>
          <p
            style={{
              color: '#667085',
              fontSize: '18px',
              lineHeight: '20px',
              fontFamily: 'Noto Sans,sans-serif',
              fontWeight: '400',
            }}
          >
            Live Chatting
          </p>
          <p
            style={{
              color: '#667085',
              fontSize: '18px',
              lineHeight: '20px',
              fontFamily: 'Noto Sans,sans-serif',
              fontWeight: '400',
            }}
          >
            Contact Us
          </p>
          <p
            style={{
              color: '#667085',
              fontSize: '18px',
              lineHeight: '20px',
              fontFamily: 'Noto Sans,sans-serif',
              fontWeight: '400',
            }}
          >
            Support Center
          </p>
        </div>
        <div>
          <h1
            style={{
              color: '#101828',
              fontFamily: 'Chivo,sans-serif',
              fontSize: '22px',
              fontWeight: '700',
              lineHeight: '24px',
              marginRight: '15px',
            }}
          >
            Useful links
          </h1>
          <p
            style={{
              color: '#667085',
              fontSize: '18px',
              lineHeight: '20px',
              fontFamily: 'Noto Sans,sans-serif',
              fontWeight: '400',
            }}
          >
            Request an offer
          </p>
          <p
            style={{
              color: '#667085',
              fontSize: '18px',
              lineHeight: '20px',
              fontFamily: 'Noto Sans,sans-serif',
              fontWeight: '400',
            }}
          >
            How it works
          </p>
          <p
            style={{
              color: '#667085',
              fontSize: '18px',
              lineHeight: '20px',
              fontFamily: 'Noto Sans,sans-serif',
              fontWeight: '400',
            }}
          >
            Pricing
          </p>
          <p
            style={{
              color: '#667085',
              fontSize: '18px',
              lineHeight: '20px',
              fontFamily: 'Noto Sans,sans-serif',
              fontWeight: '400',
            }}
          >
            Reviews
          </p>
          <p
            style={{
              color: '#667085',
              fontSize: '18px',
              lineHeight: '20px',
              fontFamily: 'Noto Sans,sans-serif',
              fontWeight: '400',
            }}
          >
            Stories
          </p>
        </div>
      </div>
    </>
  );
}

export default HomePage;
