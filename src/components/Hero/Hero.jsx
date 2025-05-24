import React, { useState } from 'react'
import DropDown from '../DropDown/DropDown';

export default function Hero() {
    const [isOpen, setIsOpen] = useState(false);
    const [showSubtitle, setShowSubtitle] = useState(false);
    const [showScrollDown, setShowScrollDown] = useState(false);

    const toggle = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <main>
            <DropDown isOpen={isOpen} toggle={toggle} />
        </main>
    )
}
