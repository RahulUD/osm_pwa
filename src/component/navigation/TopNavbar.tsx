import SearchSortBar from "./SearchSortBar"
import { Link } from "react-router-dom"
import _search from './../../assets/svg/search-solid.svg'
import { useState } from 'react'

const TopNavbar = () => {
    const [showSearch, setshowSearch] = useState(false)
    const handleShowSearch = () => {
        setshowSearch(() => true)
    }
    const handleHideSearch = () => {
        setshowSearch(() => false)
    }
    return (
        <>
            <nav className='flex shadow-sm bg-gray-700 justify-between h-16 items-center md:pl-20 md:pr-5 px-5 w-full'>
                <div className='text-gray-200 hover:text-blue-500 cursor-pointer'>
                    <Link to='/'>
                        <h3>ADS</h3>
                    </Link>
                </div>
                <div className='flex items-center'>
                    <Link className='px-3 border-b-4 mt-5 h-11 text-gray-200 hover:text-blue:500 border-gray-700 hover:border-blue-400' to='/'>One</Link>
                    <Link className='px-3 border-b-4 mt-5 h-11 text-gray-200 hover:text-blue:500 border-gray-700 hover:border-blue-400' to='/'>Two</Link>
                    <Link className='px-3 border-b-4 mt-5 h-11 text-gray-200 hover:text-blue:500 border-gray-700 hover:border-blue-400' to='/'>Three</Link>
                    <Link className='px-3 border-b-4 mt-5 h-11 text-gray-200 hover:text-blue:500 border-gray-700 hover:border-blue-400' to='/'>Four</Link>
                    {showSearch || <div className='px-3 h-11 hover:bg-white'  onClick={handleShowSearch}><img src={_search} alt='search' className='w-4 h-full' style={{ filter: 'invert(.75)' }} /></div>}
                    <Link className='px-3 border-b-4 mt-5 h-11 text-gray-200 hover:text-blue:500 border-gray-700 hover:border-blue-400' to='/'>Login</Link>
                </div>
            </nav>
            <div className='w-full sticky top-0 z-50'>
                {showSearch && <SearchSortBar handleHideSearch={handleHideSearch} />}
            </div>
        </>
    )
}
export default TopNavbar