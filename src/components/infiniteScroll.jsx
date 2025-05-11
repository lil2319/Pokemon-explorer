import { useEffect, useRef } from 'react';

export default function InfiniteScrollTrigger({ onLoadMore, hasMore }) {
    const loaderRef = useRef(null);

    useEffect(() => {
        if (!hasMore) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    onLoadMore();
                }
            },
            { threshold: 1 }
        );

        const current = loaderRef.current;
        if (current) observer.observe(current);

        return () => {
            if (current) observer.unobserve(current);
        };
    }, [onLoadMore, hasMore]);

    return <div ref={loaderRef} className="loader">Loading more...</div>;
}
