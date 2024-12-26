import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import BellIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';


const Header = () => {
  return (
    <div>
        <header className="flex items-center justify-between px-6 py-4 bg-white border-b">
          <div className="flex items-center">
            <button type="button" aria-label="Open menu" className="text-gray-500 focus:outline-none lg:hidden">
              <MenuIcon className="w-6 h-6" />
            </button>
            <div className="relative mx-4 lg:mx-0">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <SearchIcon className="h-4 w-4 text-gray-500" />
              </span>
              <input
                className="w-32 pl-10 pr-4 py-2 rounded-lg border focus:border-blue-500"
                placeholder="Search"
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center">
            <BellIcon className="w-6 h-6 text-gray-500" />
            <div className="relative ml-3">
              <Avatar>
                <Avatar alt="User avatar" src="/placeholder.svg?height=32&width=32" />
                
              </Avatar>
            </div>
          </div>
        </header>
    </div>
  )
}

export default Header
