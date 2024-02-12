import React from 'react'
import s from './main.module.css'
function Main() {
    const cart = [
        {
            img: 'img',
            price: 123,
            title: 'Lorem price'
        },
        {
            img: 'img',
            price: 256,
            title: 'Lorem price'
        },
        {
            img: 'img',
            price: 985,
            title: 'Lorem price'
        }, {
            img: 'img',
            price: 123,
            title: 'Lorem price'
        },
        {
            img: 'img',
            price: 256,
            title: 'Lorem price'
        },
        {
            img: 'img',
            price: 985,
            title: 'Lorem price'
        },]



    return (
        <div className={s.style}>
            {
                cart.map((elem) => {
                    return (
                        <div className={s.cart}>
                            <div>
                                {elem.price}
                                {elem.title}
                            </div>
                        </div>
                    )
                })
            }        </div>
    )
}

export default Main
