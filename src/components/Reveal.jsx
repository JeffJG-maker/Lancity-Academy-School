import { useEffect, useRef, useState } from "react";

function Reveal({ children, delay = 0, className = "" }) {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;

        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(element);
                }
            },
            {
                threshold: 0.15,
            }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={elementRef}
            style={{
                transitionDelay: `${delay}ms`,
            }}
            className={`transition-all duration-700 ease-out ${isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                } ${className}`}
        >
            {children}
        </div>
    );
}

export default Reveal; 