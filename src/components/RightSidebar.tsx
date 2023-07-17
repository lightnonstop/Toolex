import { BiSupport } from "react-icons/bi";
import { BsAirplaneEngines, BsFillGiftFill } from 'react-icons/bs';
import { FaMoneyBill } from 'react-icons/fa'
import { bandSaw, blockHeadHammer, blueDrill, catRightBanner1, catRightBanner2, clawHammer, drillingMachine, heatGun1, heatGun2, machineDriver, measuringTape, piercingDrill, powerHandSaw, screwDriver, yellowHandDrill } from "../assets"
import ReactStars from 'react-rating-stars-component';
import { AiFillCaretLeft, AiFillCaretRight, AiFillEye, AiFillHeart } from "react-icons/ai";
import { MdCompare } from "react-icons/md";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { MouseEventHandler, useEffect, useState } from "react";
const bestSellerProduct = [
  {
    name: "power drill",
    price: "122",
    priceAfterDiscount: "",
    rating: "5",
    mainImage: heatGun1,
    hoverImage: powerHandSaw,

  },
  {
    name: "brandsaws",
    price: "242",
    priceAfterDiscount: "98",
    rating: "4",
    mainImage: bandSaw,
    hoverImage: drillingMachine,
  },
  {
    name: "circular saw",
    price: "122",
    priceAfterDiscount: "",
    rating: "4",
    mainImage: piercingDrill,
    hoverImage: yellowHandDrill,
  },
  {
    name: "heat guns",
    price: "98",
    priceAfterDiscount: "86",
    rating: "4",
    mainImage: screwDriver,
    hoverImage: yellowHandDrill,
  },
]
const services = [
  {
    title: "free worldwide shipping",
    benefit: "on order over $150",
    icon: <BsAirplaneEngines />,
  },
  {
    title: "money back guarantee",
    benefit: "cash on delivery",
    icon: <FaMoneyBill />,
  },
  {
    title: "special gift card",
    benefit: "offer special bonuses",
    icon: <BsFillGiftFill />,
  },
  {
    title: "professional support",
    benefit: "online support 24/7",
    icon: <BiSupport />,
  },
]

const dealOfTheday = [
  {
    name: "lathes",
    price: "110",
    priceAfterDiscount: "112",
    rating: "5",
    mainImage: clawHammer,
    hoverImage: drillingMachine,

  },
  {
    name: "circular saw",
    price: "98",
    priceAfterDiscount: "86",
    rating: "4",
    mainImage: screwDriver,
    hoverImage: yellowHandDrill,
  },
  {
    name: "bandsaws",
    price: "98",
    priceAfterDiscount: "242",
    rating: "4",
    mainImage: screwDriver,
    hoverImage: yellowHandDrill,
  },
  {
    name: "heat guns",
    price: "122",
    priceAfterDiscount: "116",
    rating: "3",
    mainImage: heatGun2,
    hoverImage: heatGun1,
  },
  {
    name: "lathes",
    price: "122",
    priceAfterDiscount: "110",
    rating: "5",
    mainImage: clawHammer,
    hoverImage: blueDrill,
  },
  {
    name: "mini circular saw",
    price: "122",
    priceAfterDiscount: "98",
    rating: "5",
    mainImage: machineDriver,
    hoverImage: measuringTape,
  },
  {
    name: "power sanders",
    price: "122",
    priceAfterDiscount: "86",
    rating: "5",
    mainImage: blockHeadHammer,
    hoverImage: powerHandSaw,
  },
]
function RightSidebar() {
  const [sliderRef, setSliderRef] = useState<{ slickPrev: MouseEventHandler<HTMLButtonElement>; slickNext: MouseEventHandler<HTMLButtonElement>; } | null>(null);
  const [seconds, setSeconds] = useState<number>(10);
  const [minutes, setMinutes] = useState<number>(1);
  const [hours, setHours] = useState<number>(1);
  const [days, setDays] = useState<number>(100);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)
    return (): void => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  const sliderSettings = {
    // infinite: true,
    arrows: false,
    slidesToShow: windowWidth < 991 && windowWidth > 600 ? 3 : 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
  }

  const time = [
    {
      timePeriod: "days",
      timeValue: days,
    },
    {
      timePeriod: "hours",
      timeValue: hours,
    },
    {
      timePeriod: "mins",
      timeValue: minutes,
    },
    {
      timePeriod: "secs",
      timeValue: seconds,
    },

  ]

  useEffect(() => {
    setTimeout(() => {
      setSeconds(seconds - 1);
      if (days !== 0) {
        setSeconds(seconds - 1);
        if (seconds <= 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        }

        if (minutes < 0) {
          setMinutes(59);
        }
        if (minutes === 0 && seconds === 0) {
          setHours(hours - 1);
        }
        if (hours < 0) {
          setHours(23);
        }
        if (minutes === 0 && seconds === 0 && hours === 0) {
          setDays(days - 1);
        }
      }
    }, 1000)
  }, [seconds])


  return (
    <section className="py-5 pr-12 max-tablet:px-16 max-mobile:px-4 max-desktop:pr-4 flex flex-col w-64 max-tablet:w-full gap-8">
      <div className={`border border-t-dimGrey bg-white rounded p-1 w-full duration-500 transition-all z-20 hover:
       flex flex-col gap-3 pb-2`}>
        <div className="flex flex-row items-center justify-between bg-primary p-2 rounded">
          <p className="capitalize text-white font-semibold">bestseller products</p>
        </div>
        {bestSellerProduct.map((product, index) => (
          <div key={index} className={`best-seller-product-img-container flex flex-row justify-between mx-2 ${index + 1 !== bestSellerProduct.length
            ? "border-b border-b-dimGrey"
            : ""} pb-1`}>
            <div className="flex flex-row items-center relative flex-[0.7] 
            max-tablet:flex-[0.4]
            justify-center">
              <img src={product.mainImage} alt={product.name} className={`cursor-pointer object-contain ${product.hoverImage ?
                "first-image w-24"
                : "w-28"} duration-300 transition-all absolute`} />
              {product.hoverImage && <img src={product.hoverImage !== ""
                ? product.hoverImage : ""} alt={product.name} className="cursor-pointer second-image duration-300 transition-all w-32" />}
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <p className="capitalize text-md">{product.name}</p>
              <p className="flex flex-col gap-1">
                <span className="capitalize font-semibold">{`$${product.priceAfterDiscount
                  ? product.priceAfterDiscount
                  : product.price}.00`}</span>
                <del className="text-grey text-sm">{`${product.priceAfterDiscount
                  ? `$${product.price}.00`
                  : ""}`}</del>
              </p>
              <ReactStars
                count={5}
                value={product.rating}
                size={18}
                edit={false}
                activeColor="#ffd700"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="overflow-hidden rounded cursor-pointer max-tablet:hidden">
        <img className="w-full" src={catRightBanner1} alt="right-banner" />
      </div>

      <div className={`border border-t-dimGrey bg-white rounded p-1 w-full duration-500 transition-all z-20 hover:
       flex flex-col gap-3 pb-2`}>
        <div className="flex flex-row items-center justify-between bg-primary p-2 rounded">
          <p className="capitalize text-white font-semibold">our services</p>
        </div>
        <div className="max-tablet:flex flex-row  
        justify-between items-center flex-wrap max-[350px]:flex-col max-[350px]:py-3">
          {services.map((service, index) => (
            <div key={index} className={`flex flex-row items-center justify-between gap-4 secondary-container max-tablet:w-[44.5%] 
          max-[350px]:w-10/12
          max-tablet:flex-col ${index + 1 !== services.length ? "tablet:border-b border-dimGrey max-[350px]:border-b max-[350px]:border-dimGrey"
                : ""} py-2 px-1 mx-2`}>
              <div className="text-4xl max-mobile:text-xl text-primary secondary-container-hover">
                {service.icon}
              </div>
              <div className="flex-1 max-tablet:text-center">
                <h3 className="capitalize text-[0.8rem] font-medium text-secondary">{service.title}</h3>
                <p className="capitalize text-[0.87rem] text-grey">{service.benefit}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={`border-2 border-primary bg-white rounded p-1 w-full duration-500 transition-all z-20 hover:
       flex flex-col h-[34rem]`}>
        <div className="flex flex-row items-center justify-between bg-primary p-2 rounded">
          <p className="capitalize text-white font-semibold">deal of the day</p>
          <div className="flex flex-row items-center justify-between gap-2">
            <button type="button" onClick={sliderRef?.slickPrev}>
              <AiFillCaretLeft className="text-white hover:text-veryDimGrey" />
            </button>
            <button type="button" onClick={sliderRef?.slickNext}>
              <AiFillCaretRight className="text-white hover:text-veryDimGrey" />
            </button>
          </div>
        </div>
        <Slider ref={setSliderRef} {...sliderSettings}>
          {dealOfTheday.map((product, index) => (
            <div key={index} className="deal-product-img-container">
              <div className="flex flex-row items-center justify-center mb-4 relative">
                <span className="capitalize absolute top-3 text-secondary text-sm font-semibold right-2 z-20">on sale!</span>
                <img className="cursor-pointer first-image absolute z-0 duration-300 transition-all" src={product.mainImage} alt={product.name} />
                <img className="cursor-pointer second-image" src={product.hoverImage} alt={product.name} />
                <div className="absolute flex flex-row -bottom-2 gap-3 btns-container">
                  <button className="bg-secondary p-3 rounded-full duration-500 transition-all hover:bg-primary">
                    <AiFillHeart className="text-white rounded-full text-xl" />
                  </button>
                  <button className="bg-secondary p-3 rounded-full duration-500 transition-all hover:bg-primary">
                    <AiFillEye className="text-white rounded-full text-xl" />
                  </button>
                  <button className="bg-secondary p-3 rounded-full duration-500 transition-all hover:bg-primary">
                    <MdCompare className="text-white rounded-full text-xl" />
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-[0.13rem] px-4">
                <hr />
                <hr />
                <div className="flex flex-col items-center gap-2 mt-3">
                  <p className="capitalize text-lg">{product.name}</p>
                  <p className="flex flex-row gap-3">
                    <span className="capitalize font-semibold">${product.priceAfterDiscount}.00</span>
                    <del className="text-grey">${product.price}.00</del>
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center relative h-12 -mt-1 pt-2">
                <div className="stars absolute">
                  <ReactStars
                    count={5}
                    value={product.rating}
                    size={22}
                    edit={false}
                    activeColor="#ffd700"
                  />
                </div>
                <div className="add-to-cart opacity-0 absolute duration-300 transition-all">
                  <button className="uppercase text-sm text-primary hover:text-secondary border-b border-b-primary hover:border-b-secondary duration-300 transition-all font-semibold" type="button">add to cart</button>
                </div>
              </div>

              <div className="flex flex-row justify-center items-center gap-2 p-3">
                {time.map((timeFrame, index) => (
                  <span key={index} className="flex flex-col justify-center items-center">
                    <p className="border border-dimGrey rounded w-8 flex flex-row justify-center items-center h-8">{timeFrame.timeValue}</p>
                    <p className="text-[0.8rem] text-lightSecondary capitalize">{timeFrame.timePeriod}</p>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="overflow-hidden rounded cursor-pointer max-tablet:hidden">
        <img className="w-full" src={catRightBanner2} alt="right-banner" />
      </div>
    </section>
  )
}
export default RightSidebar