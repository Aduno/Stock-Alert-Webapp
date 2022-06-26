import React from 'react';
import { AiOutlineStock, AiOutlineFileSearch } from "react-icons/ai";
import { MdAddAlert } from 'react-icons/md';
import { FaRegNewspaper } from 'react-icons/fa'
export const SidebarData = [
    {
        title: 'Stock',
        path: '#search-bar-container',
        icon: <AiOutlineStock/>,
        cName: 'nav-text'
    },
    {
        title: 'Create alert',
        path: '#alert',
        icon: <MdAddAlert/>,
        cName: 'nav-text'
    },
    {
        title: 'Discover Stocks',
        path: '#discover',
        icon: <AiOutlineFileSearch/>,
        cName: 'nav-text'
    },
    {
        title: 'Top stories',
        path: '#stories',
        icon: <FaRegNewspaper/>,
        cName: 'nav-text'
    },
]