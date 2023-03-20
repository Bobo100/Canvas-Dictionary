// 畫線 兩條線不同顏色
import { useEffect, useRef } from "react";
import { CommonPrism } from "../Common";
export function CanvasLine3() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    useEffect(() => {
        if (canvasRef.current) {
            const context = canvasRef.current.getContext('2d');
            if (context) {
                // 畫線前先清除畫布
                context.clearRect(0, 0, 200, 200);
                // 準備畫線
                // 先設定線條顏色
                context.strokeStyle = 'red';
                // 開始畫線
                context.beginPath();
                context.moveTo(0, 0);
                context.lineTo(100, 100);
                context.stroke();

                // 準備畫第二條線
                // 先設定線條顏色
                context.strokeStyle = 'yellow';
                // 開始畫線
                context.beginPath();
                context.moveTo(100, 100);
                context.lineTo(200, 50)
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
            // 畫線前先清除畫布
            context.clearRect(0, 0, 200, 200);
            // 準備畫線
            // 先設定線條顏色
            context.strokeStyle = 'red';
            // 開始畫線
            context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(100, 100);
            context.stroke();

            // 準備畫第二條線
            // 先設定線條顏色
            context.strokeStyle = 'yellow';
            // 開始畫線
            context.beginPath();
            context.moveTo(100, 100);
            context.lineTo(200, 50)
            context.stroke();
    }
}, []);
`}
            </CommonPrism>

        </div>
    )
}