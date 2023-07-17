import { MdAdd, MdChevronRight, MdCompare } from "react-icons/md"
import { Alexa, Eleanor, Luiz, bandSaw, blockHeadHammer, blueDrill, breakerMachine, drillingMachine, heatGun1, heatGun2, image1, image10, image11, image2, image3, image4, image5, image6, image9, leftBanner, machineDriver, measuringTape, powerHandSaw, screwDriver, clawHammer, yellowHandDrill } from "../assets"
import { AiFillCaretLeft, AiFillCaretRight, AiFillEye, AiFillHeart } from 'react-icons/ai';
import { BiPaperPlane } from 'react-icons/bi';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { MouseEventHandler, useState } from "react";
import ReactStars from 'react-rating-stars-component';

const sideNavItems = [
  {
    label: "Power Tools",
    image: image3,
    toolsCategory: [
      {
        title: "air compressor",
        tools: ["snips", "hex keys", "instant pot"]
      },
      {
        title: "circular saw",
        tools: ["carving kit", "hypoid saw", "jig saws"],
      },
      {
        title: "wood working",
        tools: ["Floating", "jigsaw", "Screw gun"],
      },
      {
        title: "hand saws",
        tools: ["hammers", "joint pliers", "jig saws", "Screwdrivers"],
      },
      {
        title: "home & appliances",
        tools: ["coffee grinder", "coffee maker", "refrigerator"],
      },
    ]
  },
  {
    label: "Reciprocating Saw",
    image: image5,
  },
  {
    label: "Grinders",
    image: image4,
  },
  {
    label: "Wrenches",
    image: image6,
  },
  {
    label: "Reciprocating Saw",
    image: image11,
  },
  {
    label: "Cutting Pliers",
    image: image10,
  },
  {
    label: "Rotary Tools",
    image: image9,
  },
  {
    label: "Reciprocating Saw",
    image: image11,
  },
  {
    label: "Lawn Mowers",
    image: image1,
  },
  {
    label: "Socket & Wrench",
    image: image2,
  },
]
const testimonialcards = [
  {
    image: Eleanor,
    comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commod ...",
    name: "Eleanor Jack",
  },
  {
    image: Luiz,
    comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commod ...",
    name: "Luiz Charles",
  },
  {
    image: Alexa,
    comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commod ...",
    name: "Alexa Gomez",
  },
]
const specialProduct = [
  {
    name: "abrasive saw",
    price: "122",
    priceAfterDiscount: "166",
    rating: "3",
    mainImage: breakerMachine,
    hoverImage: drillingMachine,

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
    price: "98",
    priceAfterDiscount: "86",
    rating: "4",
    mainImage: screwDriver,
    hoverImage: yellowHandDrill,
  },
  {
    name: "heat guns",
    price: "122",
    priceAfterDiscount: "110",
    rating: "5",
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
interface LeftSidebarProps {
  toggleCategory: boolean;
}
function LeftSidebar({ toggleCategory }: LeftSidebarProps) {
  const [sliderRef, setSliderRef] = useState<{ slickPrev: MouseEventHandler<HTMLButtonElement>; slickNext: MouseEventHandler<HTMLButtonElement>; } | null>(null);
  const sliderSettings = {
    // infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
  }
  return (
    <section className="py-5 pl-12 max-tablet:pl-16 max-mobile:pl-4 max-desktop:pl-4 flex flex-col w-64">
      <nav className="border-2 border-primary rounded px-4 py-2 h-[27rem] w-full">
        <ul>
          {sideNavItems.map((item, index) => (
            <li key={index} className="flex flex-row items-center justify-between border-b border-b-dimGrey hover:text-primary cursor-pointer">
              <div className="flex flex-row items-center justify-between gap-3 py-2">
                <img src={item.image} alt={item.label} />
                <p className="text-sm">{item.label}</p>
              </div>
              {(index === 0 || index === 6 || index === 9) && (
                <MdChevronRight className="text-inherit text-xl" />
              )}
            </li>
          ))}
        </ul>
        <button className="flex flex-row justify-between items-center gap-4 pt-2 hover:text-primary" type="button">
          <span className="border border-secondary text-secondary rounded p-1">
            <MdAdd />
          </span>
          <p>More Categories</p>
        </button>
      </nav>

      <div className={`duration-500 ${toggleCategory ? "-translate-y-0 mt-8" : "-translate-y-[27rem] mt-0"} transition-all flex flex-col gap-8`}>
        <div className={`border border-t-dimGrey bg-white rounded p-1 h-[27rem] w-full z-20 hover:
       flex flex-col gap-6`}>
          <div className="flex flex-row items-center justify-between bg-primary p-2 rounded">
            <p className="capitalize text-white font-semibold">our testimonial</p>
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
            {testimonialcards.map((testimonial, index) => (
              <div key={index}>
                <div className="flex flex-row items-center justify-center mb-4">
                  <img className="rounded-full" src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="text-center flex flex-col gap-2">
                  <p className="text-veryDimGrey">{testimonial.comment}</p>
                  <p className="text-secondary font-semibold">{testimonial.name}</p>
                  <p className="text-veryDimGrey capitalize">customer</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="overflow-hidden rounded cursor-pointer">
          <img className="w-full" src={leftBanner} alt="left-banner" />
        </div>

        <div className={`border border-t-dimGrey bg-white rounded p-1 w-full duration-500 transition-all z-20 hover:
       flex flex-col gap-6`}>
          <div className="flex flex-row items-center justify-between bg-primary p-2 rounded">
            <p className="capitalize text-white font-semibold">Special products</p>
            <div className="flex flex-row items-center justify-between gap-2">
              <button type="button" onClick={specialProductSliderRef?.slickPrev}>
                <AiFillCaretLeft className="text-white hover:text-veryDimGrey" />
              </button>
              <button type="button" onClick={specialProductSliderRef?.slickNext}>
                <AiFillCaretRight className="text-white hover:text-veryDimGrey" />
              </button>
            </div>
          </div>
          <Slider ref={setSpecialProductSliderRef} {...specialProductSliderSettings} className="max-tablet:h-[25rem]">
            {specialProduct.map((product, index) => (
              <div key={index} className="special-product-img-container">
                <div className="flex flex-row items-center justify-center mb-4 relative">
                  <span className="capitalize absolute -top-1 text-secondary text-sm font-semibold right-2 z-20">on sale!</span>
                  <img className="cursor-pointer first-image absolute z-0 duration-300 transition-all h-full" src={product.mainImage} alt={product.name} />
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
              </div>
            ))}
          </Slider>
        </div>

        <div className={`border border-t-dimGrey bg-white rounded p-1 h-[26rem] w-full duration-500 transition-all z-20 hover:
       flex flex-col gap-6`}>
          <div className="flex flex-row items-center justify-between bg-primary p-2 rounded">
            <p className="capitalize text-white font-semibold">newsletter</p>
          </div>
          <div className="flex flex-col items-center px-2">
            <div className="flex flex-col items-center gap-3">
              <BiPaperPlane className="text-secondary text-5xl" />
              <p className="capitalize text-xl text-primary">sign up & get news</p>
              <hr className="bg-dimGrey w-20 h-[0.1rem]" />
              <p className="text-center text-veryDimGrey mt-2">Subscribe to our newsletters now and stay up to date with new collections and exclusive offers.</p>
              <input className="border-b border-b-dimGrey placeholder:text-center py-2 focus:outline-none text-center" type="email" name="email" id="email" placeholder="Enter e-mail here..." />
              <button className="text-white bg-primary hover:bg-secondary px-8 py-3 mt-1 rounded uppercase font-semibold text-sm" type="button">subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default LeftSidebar