import React, { useRef, useEffect, useState } from 'react';
import { CommonPrism } from '../Common';
import Decimal from 'decimal.js';
const CanvasAnimationFrame = () => {
    const divRef = useRef<HTMLDivElement>(null);
    const requestRef = useRef<number>(0);
    const [position, setPosition] = useState<number>(0);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);

    const animate = () => {
        // 當達到100px時，就回到0px
        // setPosition((prevPosition) => (prevPosition + 0.1) % 100);
        setPosition((prevPosition) => new Decimal(prevPosition).plus(0.1).mod(100).toNumber());
        requestRef.current = requestAnimationFrame(animate);
    };

    const startAnimation = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            requestRef.current = requestAnimationFrame(animate);
        }
    };

    const stopAnimation = () => {
        cancelAnimationFrame(requestRef.current);
        setIsAnimating(false);
    };

    useEffect(() => {
        if (divRef.current) {
            divRef.current.style.transform = `translateX(${position}px)`;
        }
    }, [position]);

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, []);

    return (
        <>
            <div ref={divRef}>Hello World</div>
            <div>
                <button onClick={startAnimation}>Start Animation</button>
                <button onClick={stopAnimation}>Stop Animation</button>
            </div>
            <CommonPrism>
                {`const CanvasAnimationFrame = () => {
    const divRef = useRef<HTMLDivElement>(null);
    const requestRef = useRef<number>(0);
    const [position, setPosition] = useState<number>(0);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);

    const animate = () => {
        // 當達到100px時，就回到0px
        setPosition((prevPosition) => (prevPosition + 0.1) % 100);
        requestRef.current = requestAnimationFrame(animate);
    };

    const startAnimation = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            requestRef.current = requestAnimationFrame(animate);
        }
    };

    const stopAnimation = () => {
        cancelAnimationFrame(requestRef.current);
        setIsAnimating(false);
    };

    useEffect(() => {
        if (divRef.current) {
            divRef.current.style.transform = \`translateX(\${position}px)\`;
        }
    }, [position]);

    useEffect(() => {      
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, []);

    return (
        <>
            <div ref={divRef}>Hello World</div>
            <div>
                <button onClick={startAnimation}>Start Animation</button>
                <button onClick={stopAnimation}>Stop Animation</button>
            </div>
        </>
    )
};`}
            </CommonPrism>

        </>

    )
};

export default CanvasAnimationFrame;
