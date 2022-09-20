import React from 'react'
import filter from '../../../assets/images/Filter (2).png'
import search from '../../../assets/images/Search (2).png'
import close from '../../../assets/images/Close (2).png'
import './Search.css'


const Search = () => {
  return (
    <div className='search-container' >
    <img src={filter} alt='filter icon' className='icon filter-icon'  /> 
    <img src={search} alt='search icon' className='icon search-icon'  /> 
    <input className='search-bar' type='text' placeholder='search products here' defaultValue='Sam' />
    <img src={close} alt='close icon' className='icon close-icon'  />    
    </div>
  )
}

export default Search