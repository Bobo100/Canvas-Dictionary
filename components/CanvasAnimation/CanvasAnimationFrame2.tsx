import React, { useRef, useEffect, useState } from 'react';

const CanvasAnimationFrame2 = () => {
    const divRef = useRef<HTMLDivElement>(null);
    const requestRef = useRef<number>(0);
    const previousTimeRef = useRef<number>(0);
    const [position, setPosition] = useState<number>(0);

    const animate = (time: number) => {
        if (previousTimeRef.current != undefined) {
            const deltaTime = time - previousTimeRef.current;
            // Update position with some animation logic.
            // 當達到100px時，就回到0px
            setPosition((prevPosition) => (prevPosition + deltaTime * 0.01) % 100);
        }
        previousTimeRef.current = time;
        requestRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        // 當position改變時，就會重新執行useEffect
        // divRef.current!.style.transform = `translateX(${position}px)`;

        /*
        沒有必要傳遞 time 參數到 animate() 函數中。
        requestAnimationFrame() 函數會自動將目前的時間作為引數傳遞到回調函數中。
        關於錯誤問題，requestAnimationFrame() 內部的實現是透過 JavaScript 異步執行的，它會在每個畫面之後執行，而不是按照一定的時間間隔執行。
        所以如果直接嘗試通過 requestAnimationFrame(animate(time)) 來調用 animate() 函數，這樣做的結果將會與預期不同，可能產生意料之外的行為或錯誤。
        */
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, []);

    return (
        <>
            <div ref={divRef} style={{ transform: `translateX(${position}px)` }}>Hello World</div>
            <div>
                <button onClick={() => requestRef.current = requestAnimationFrame(animate)}>Start Animation</button>
                <button onClick={() => cancelAnimationFrame(requestRef.current)}>Stop Animation</button>
            </div>
        </>

    )
};

export default CanvasAnimationFrame2;
