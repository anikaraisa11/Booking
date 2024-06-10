import Search from 'antd/es/input/Search'
import Link from 'next/link'
import './Footer.css'

function Footer() {
  return (
    <div className='bg-[#F2F6F6] py-5'>
      <div className="customContainer">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {/* part 1  */}
          <div className="logo">
            <h3 className='text-2xl  p-4 font-bold text-[#008080]'>Doctors</h3>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
          </div>
          {/* part 2 */}
          <div>
            <h2 className='text-2xl font-bold text-[#008080] py-4'>For Patients</h2>
            <ul>
              <li className='mt-1 footerli'><Link className='footerLink' href=""> Search For Doctor</Link></li>
              <li className='mt-1 footerli'><Link className='footerLink' href=""> Login</Link></li>
              <li className='mt-1 footerli'><Link className='footerLink' href=""> Register</Link></li>
            </ul>
          </div>

          {/* part 3 */}
          <div>
            <h2 className='text-2xl font-bold text-[#008080] py-4'>For Doctors</h2>
            <ul>
              <li className='mt-1 footerli'><Link className='footerLink' href=""> Application</Link></li>
              <li className='mt-1 footerli'><Link className='footerLink' href=""> Chat</Link></li>
              <li className='mt-1 footerli'><Link className='footerLink' href=""> Login</Link></li>
            </ul>
          </div>
          {/* part 4 */}
          <div>
            <h2 className='text-2xl font-bold text-[#008080] py-4'>Contact Us</h2>
            <ul>
              <li className='mt-1 footerli'>
                <Link className='footerLink' href="">
                  <i className="fa-solid fa-location-dot text-gray-500 mx-2"></i>
                  3556 Beech Street, USA
                </Link>
              </li>
              <li className='mt-1 footerli'>
                <Link className='footerLink' href=""><i className="fa-solid fa-mobile-screen-button text-gray-500 mx-2"></i>
                  +1 315 369 5943
                </Link>
              </li>
              <li className='mt-1 footerli'>
                <Link className='footerLink' href="">
                  <i className="fa-regular fa-envelope text-gray-500 mx-2"></i>
                  doccure@example.com
                </Link>
              </li>
            </ul>
          </div>
          {/* part 4 */}
          <div>
            <h2 className='text-2xl font-bold text-[#008080] py-4'>Join Our Newsletter</h2>
            <ul>
              <div className=''>
                <Search placeholder="input search text" enterButton="Submit" className='text-[#008080]' size="large" loading={false} />
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer