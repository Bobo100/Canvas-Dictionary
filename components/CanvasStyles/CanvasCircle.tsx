import { useEffect, useRef } from "react";
import { CommonPrism } from "../Common";

export function CanvasCircleArc() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    useEffect(() => {
        if (canvasRef.current) {
            const context = canvasRef.current.getContext('2d');
            if (context) {
                context.clearRect(0, 0, 200, 200); // 清除畫布
                context.strokeStyle = 'red'; // 設定線條顏色 線條預設顏色為黑色
                context.arc(100, 75, 50, 0, 2 * Math.PI); // 從(100,75)畫一個半徑為50的圓弧，從0度到360度 (2PI是360度)，所以也就是畫一個圓
                context.stroke();
            }
        }
    }, []);

    return (
        <div>
            <canvas ref={canvasRef} width={200} height={200} />
            <CommonPrism>
                {`const canvasRef = useRef<HTMLCanvasElement | null>(null);
useEffect(() => {
    if (canvasRef.current) {
        const context = canvasRef.current.getContext('2d');
        if (context) {
            context.clearRect(0, 0, 200, 200); // 清除畫布
            context.strokeStyle = 'red'; // 設定線條顏色 線條預設顏色為黑色
            context.arc(100, 75, 50, 0, 2 * Math.PI); // 從(100,75)畫一個半徑為50的圓弧，從0度到360度 (2PI是360度)，所以也就是畫一個圓
            context.stroke();
        }
    }
}, []);`}
            </CommonPrism>
        </div>
    )
}