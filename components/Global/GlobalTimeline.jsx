import { Timeline } from 'antd';
import React from 'react';

function GlobalTimeline({ items, headline }) {
    console.log(items)
    return (
        <>
            <h3 className='font-bold py-5 text-[#008080]'>{headline}</h3>
            <Timeline>
                {items?.map((item, index) => (
                    <Timeline.Item key={index}>
                        {Object.keys(item).map((key) => (
                            <p key={key} className='text-gray-500'>
                                <strong>{key}: </strong> <span >{item[key]}</span>
                            </p>
                        ))}
                    </Timeline.Item>
                ))}
            </Timeline>

        </>
    );
}

export default GlobalTimeline;
