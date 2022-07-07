import React from 'react';
import { AiOutlineStock, AiOutlineFileSearch } from "react-icons/ai";
import { MdAddAlert } from 'react-icons/md';
import { FaRegNewspaper} from 'react-icons/fa'
import { HiOutlineMailOpen } from 'react-icons/hi'
import { BsQuestionLg } from 'react-icons/bs'

export const SidebarData = [
    {
        title: 'Stock',
        path: '/Stock-Alert-Webapp/#search-bar-container',
        icon: <AiOutlineStock/>,
        cName: 'nav-text'
    },
    {
        title: 'Create alert',
        path: '/Stock-Alert-Webapp/#summary',
        icon: <MdAddAlert/>,
        cName: 'nav-text'
    },
    {
        title: 'Discover Stocks',
        path: '/Stock-Alert-Webapp/#discovery',
        icon: <AiOutlineFileSearch/>,
        cName: 'nav-text'
    },
    {
        title: 'Top stories',
        path: '/Stock-Alert-Webapp/#stories',
        icon: <FaRegNewspaper/>,
        cName: 'nav-text'
    },
    {
        title: 'Contact us',
        path: '/contact',
        icon: <HiOutlineMailOpen/>,
        cName: 'nav-text'
    },
    {
        title: 'FAQ',
        path: '/faq',
        icon: <BsQuestionLg/>,
        cName: 'nav-text'
    }
]