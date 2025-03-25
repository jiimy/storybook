import React, { useEffect, useRef, useState } from 'react';
import s from './infinityscroll.module.scss';

type InfinityScrollType = {
    setIndex: (index: any) => void;
    data: any;
    viewCount?: number;
    type?: 'observer' | 'query'; // observer, 
}

const InfinityScroll = ({ setIndex, data, viewCount, type = 'observer' }: InfinityScrollType) => {
    console.log('받은 데이터', data);
    const loaderRef = useRef<HTMLDivElement>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [canLoad, setCanLoad] = useState(true);
    const [items, setItems] = useState<any[]>([]);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 1.0,
        };

        const observer = new IntersectionObserver((entries) => {
            const target = entries[0];
            if (target.isIntersecting && canLoad && !isLoading) {
                setIsLoading(true);
                setCanLoad(false);
                setIndex((prevIndex: number) => prevIndex + 1);

                setTimeout(() => {
                    setCanLoad(true);
                }, 2000);
            }
        }, options);

        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }

        return () => {
            if (loaderRef.current) {
                observer.unobserve(loaderRef.current);
            }
        };
    }, [isLoading, setIndex, canLoad]);

    useEffect(() => {
        if (data && data.length > 0) {
            setIsLoading(false);
            setItems((prevItems) => [...prevItems, ...data]);
        }
    }, [data]);

    return (
        <div className={s.scroll_wrap}>
            {items.map((item: any, index: number) => (
                <div key={index} style={{ padding: '20px', border: '1px solid #ddd', margin: '10px 0' }}>
                    {index}번 {item.title}
                </div>
            ))}
            <div ref={loaderRef}>
                {isLoading && <div>Loading...</div>}
            </div>
        </div>
    );
};

export default InfinityScroll;