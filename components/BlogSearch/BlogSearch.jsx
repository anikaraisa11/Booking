import React from 'react'

function BlogSearch({setSearchValue}) {
   

    return (
        <div className='w-[50%] mx-auto mt-10'>
            <input className='border mx-auto' onChange={(e)=>setSearchValue(e.target.value)} placeholder='Search Blogs'></input>
        </div>
    )
}

export default BlogSearch
