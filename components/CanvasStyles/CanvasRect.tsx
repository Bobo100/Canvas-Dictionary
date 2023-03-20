import { useEffect, useRef } from "react";
import { CommonPrism } from "../Common";
export function CanvasRect() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    useEffect(() => {
        if (canvasRef.current) {
            const context = canvasRef.current.getContext('2d');
            if (context) {
                // 畫線前先清除畫布
                context.clearRect(0, 0, 200, 200);
                context.strokeStyle = 'red';
                // 畫方形的邊框
                context.rect(5, 5, 100, 100); // 從(5,5)畫一個寬100高100的方形
                context.stroke(); // 繪製線條

                // 如果要填滿方形，也可以在這邊加上fill()
                // context.fill();
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
                // 畫線前先清除畫布
                context.clearRect(0, 0, 200, 200);
                context.strokeStyle = 'red';
                // 畫方形的邊框
                context.rect(5, 5, 100, 100); // 從(5,5)畫一個寬100高100的方形
                context.stroke(); // 繪製線條
                
                // 如果要填滿方形，也可以在這邊加上fill()
                // context.fill();
        }
    }
}, []);
`}
            </CommonPrism>

        </div>
    )
}