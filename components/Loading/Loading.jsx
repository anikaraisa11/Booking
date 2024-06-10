import { Bars } from 'react-loader-spinner'

function Loading() {
    return (
        <div className='flex justify-center items-center h-[80vh]'>
            <Bars
                height="50"
                width="50"
                color="#008080"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperclassName=""
                visible={true}
            />
        </div>
    )
}

export default Loading