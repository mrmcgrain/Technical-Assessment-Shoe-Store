import React, { createContext, useState, useContext } from "react"

import productData from "../assets/product.json"

////IMAGES 
import del from "../assets/icon-delete.svg"
import minus from "../assets/icon-minus.svg"
import plus from "../assets/icon-plus.svg"
import iconCart from "../assets/icon-cart.svg"
import whiteCart from "../assets/cart.svg"
import shoe1 from '../assets/image-product-1.jpg'
import shoe2 from '../assets/image-product-2.jpg'
import shoe3 from '../assets/image-product-3.jpg'
import shoe4 from '../assets/image-product-4.jpg'
import thumb1 from '../assets/image-product-1-thumbnail.jpg'
import thumb2 from '../assets/image-product-2-thumbnail.jpg'
import thumb3 from '../assets/image-product-3-thumbnail.jpg'
import thumb4 from '../assets/image-product-4-thumbnail.jpg'
import iconNext from "../assets/icon-next.svg"
import iconPrev from "../assets/icon-previous.svg"
import iconClose from "../assets/icon-close.svg"
import iconMenu from "../assets/icon-menu.svg"



const MyContext = createContext()

export const useData = () => useContext(MyContext)


export function MyProvider({ children }) {

    const [sideNav, setSideNav] = useState(false)


    //// displays cart
    const [display, setDisplay] = useState(false)

    const [count, setCount] = useState(0)

    const [cart, setCart] = useState(false)

    const [lightBox, setLightBox
    ] = useState(false)

    const [slide, setSlide] = useState(0)
    const [previewSlide, setPreviewSlide] = useState(0)

    const thumbs = [shoe1, shoe2, shoe3, shoe4]

    const handleLight = (e) => {

        lightBox ? setLightBox(false) : setLightBox(true)
        // setLightBox(true)
        console.log("light hit", lightBox)
        setDisplay(false)
    }


    //////SLIDE for light and preview seperate so one doesnt change the othger

const handlePreviewSlideShow = (e) => {
    if (e.target.id === "+" && previewSlide < 4) {
        setPreviewSlide(prev => prev + 1)

        if (previewSlide >= 3) {
            setPreviewSlide(0)
        }


    } else if (e.target.id === "-" && previewSlide >= 0) {
        console.log("-")
        setPreviewSlide(prev => prev - 1)

        if (previewSlide < 1) {
            console.log("- slide 0")
            setPreviewSlide(3)
        }
    } else {
        setPreviewSlide(parseInt(e.target.id))
    }
}


    const handleSlideShow = (e) => {
        console.log("slide", slide)
        if (e.target.id === "+" && slide < 4) {
            setSlide(prev => prev + 1)

            if (slide >= 3) {
                setSlide(0)
            }


        } else if (e.target.id === "-" && slide >= 0) {
            console.log("-")
            setSlide(prev => prev - 1)

            if (slide < 1) {
                console.log("- slide 0")
                setSlide(3)
            }
        } else {
            setSlide(parseInt(e.target.id))
        }

    }
    /////  display cart
    const handleDisplay = (e) => {
        display ? setDisplay(false) : setDisplay(true)
    }


    const handleDelete = (e) => {
        setDisplay(false)
        setCount(0)
        setCart(false)
    }

    const handleAddToCart = (e) => {
        setCart(true)
        console.log("addtocart", cart)

    }

    let price = 0
    let total = 0

    if (productData.product.isOnSale) {
        // console.log("hit")
        price = productData.product.price * (productData.product.saleOff / 100)
        // console.log("price", price)
    }
    total = price * count


    const handleCount = (e) => {
        console.log(e)
        if (e.target.id === "+") {
            setCount(prev => prev + 1)
            setCart(true)
        } else if (e.target.id === "-" && count >= 1) {

            setCount(prev => prev - 1)

            if (count === 1) {
                setCart(false)
            }
        }
    }


    const handleSideNav = (e) => {
        console.log("sidenav")
        !sideNav ? setSideNav(true) : setSideNav(false)
        setDisplay(false)
    }



    return (

        <MyContext.Provider

            value={{
                display,
                productData,
                handleCount,
                count,
                handleDisplay,
                handleAddToCart,
                price,
                total,
                cart,
                del,
                minus,
                plus,
                iconCart,
                whiteCart,
                shoe1,
                shoe2,
                shoe3,
                shoe4,
                thumb1,
                thumb2,
                thumb3,
                thumb4,
                handleDelete,
                lightBox, handleLight,
                iconNext,
                iconPrev,
                handleSlideShow,
                thumbs,
                slide,
                iconClose,
                iconMenu,
                handleSideNav,
                sideNav,
                previewSlide,
                handlePreviewSlideShow


            }}
        >
            {children}


        </MyContext.Provider>


    )




}

