import React from 'react'
import { navbarLink } from '../../constants/gobal'
import FormMain from '../FormMain';
import HeaderTop from './components/Header-top'
import HeaderCenter from './components/HeaderCenter'
import Navbar from './components/Navbar/index';

export default function Header() {
    return (
        <div>
            <HeaderTop />
            <HeaderCenter />
            <Navbar />

        </div>
    )
}
