import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import UserInfor from '../../components/UserInfor'
import Blog from './components/Blog'
import Deals from './components/Deals'
import Dircoration from './components/Dircoration'
import Linkb from './components/Linkb'
import NewProduct from './components/NewProduct'
import SpecialOffer from './components/SpecialOffer'
import Subscribe from './components/Subscribe'
import Wrapper from './components/Wrapper'

export default function Home() {
    return (
        <div>

            <Header />
            <Wrapper />
            <Dircoration />
            <Deals />
            <SpecialOffer />
            <NewProduct />
            <Blog />
            <Linkb />
            <Subscribe />
            <Footer />
            <UserInfor />

        </div>
    )
}
