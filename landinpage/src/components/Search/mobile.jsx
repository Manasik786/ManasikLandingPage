import React from 'react'
import './search.css';

const mobile = () => {
  return (
    <div className='search'>
        <div className='innersearch'>
            <h2>Search Box</h2>
            <div>
                <div className='textbox'>
                    <div><input type="text" /></div>
                    <div><input type="text" /></div>
                    <div><input type="text" /></div>
                    <div><input type="text" /></div>
                </div>
                <div>
                    <div></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default mobile