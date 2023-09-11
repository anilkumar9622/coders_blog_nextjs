import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import { ICategory } from '../types';

interface IPropType {
    categories: ICategory[];
}

const Tabs = ({ categories }: IPropType) => {

    const router = useRouter();

    const isActiveLink = (category: ICategory) =>{
        return category.attributes.Slug === router.query.category;
    }
    
    const handleOnSearch = (query: string) =>{
        console.log("handling searching")
    }
    return (
        <div className='my-8 flex items-center justify-between ' style={{borderBottom: "4px solid rgb(243 244 246)"}}>
            <ul className="flex items-center list-none no-underline pl-0 mb-0">
                <li className={"list-none mr-6 pb-6 rounded-sm text-gray-400"
                //  + `${
                //     router.pathname === '/'
                //     ? 'border-primary text-primary' 
                //     : 'border-white text-gray-400'
                // }` 
                } style={ router.pathname === '/' ? {borderBottom: "4px solid #53B095"} : {borderBottom: "4px solid #fff"}}>
                    <Link href="/" className="no-underline list-none" style={ router.pathname === '/' ? {color: '#53B095', fontWeight: 600} : {}}>Recent</Link>
                </li>
                {categories.map((category) => {
                    console.log({category});
                    
                    return (
                        <li
                        key = {category.id}
                         className="mr-6 pb-6 border-b-4 rounded-sm"
                        //  style={{borderBottomWidth: '4px', borderBottom: "4px solid #ddd"}}
                         style={ isActiveLink(category) ? {borderBottom: "4px solid #53B095", color: '#53B095', fontWeight: 600} : {borderBottom: "4px solid #fff"}} >
                            <Link  href={`/category/${category.attributes.Slug}`}  className="no-underline " style={ isActiveLink(category) ? { color: '#53B095', fontWeight: 600} : {borderBottom: "4px solid #fff"}}>{category.attributes.Title}</Link>
                        </li>
                    );
                })}
            </ul>
            <div className="flex items-center">
                <svg
                    className="h-4 fill-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
                </svg>
                <input
                    onChange={(e) => handleOnSearch(e.target.value)}
                    type="text"
                    placeholder="Search"
                    className="outline-none px-2 py-1 ml-1"
                    style={{border:0, outline: 0}}
                />
            </div>
        </div>
    )
}

export default Tabs;