
function CustomButton({children,text}) {
  return <button type={children} className="text-xl w-full h-10 before:absolute before:block before:inset-0 before:-z-10 before:bg-[#09DCA4] text-white after:block hover:after:w-full after:w-0 after:hover:left-0 after:right-0 after:top-0 after:h-full after:-z-10 after:duration-300 after:bg-[#1E40AF] after:absolute relative inline-block">{text}</button>
}

export default CustomButton