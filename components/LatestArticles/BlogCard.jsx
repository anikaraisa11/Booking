"use client"
import Image from 'next/image'
import Link from 'next/link'
import { toast } from 'sonner'
import GlobalButton from '../Global/GlobalButton'

function BlogCard({ item }) {
  const handleSave = (e)=>{
    toast.success('save blog successfully')
  }
    return (
        <>
            <div className='grid md:grid-cols-2 grid-cols-1 border p-3 rounded-lg'>
                <Image src={item.img} width={300} height={300} className='rounded-lg text-center mx-auto'alt="image" />
                <div className='p-3'>
                    <div className='flex items-center justify-between gap-2'>
                        <b className='text-gray-400'><i className="fa-solid fa-calendar-days text-[#008080] "></i> {item.date}</b>
                        <i className="fa-solid fa-heart text-red-500" onClick={handleSave} style={{ fontSize: '22px' }}></i>
                    </div> <hr className='mt-2' />
                    <h3 className='text-[22px] text-gray-700 font-bold'>{item.title}</h3>
                    <b className='text-[#008080]'><i className="fa-solid fa-user mx-2 text-[#008080]"></i>{item.name}</b><hr className='mt-2' />
                    <p style={{color:'gray',fontWeight:'500',wordWrap:'break-word'}}>{item.description?.slice(0,70)}</p>
                    <Link href={`/blog/${item.id}`}>
                        <GlobalButton text="View Blog" modifyclassName="mt-5" />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default BlogCard