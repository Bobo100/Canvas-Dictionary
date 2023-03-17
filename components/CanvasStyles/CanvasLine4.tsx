// closePath() 關閉路徑，將當前的路徑關閉，並且將當前的路徑設定為新的路徑的起點 (教學範例)
import { useEffect, useRef } from "react";
import { Prism } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
export function CanvasLine4() {
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
                context.lineTo(200, 50);
                context.closePath();
                context.stroke();
            }
        }
    }, []);

    return (
        <div>
            <canvas ref={canvasRef} width={200} height={200} />
            <Prism language="typescript" style={vscDarkPlus}>
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
            context.lineTo(200, 50);
            context.closePath();
            context.stroke();
    }
}, []);
`}
            </Prism>

        </div>
    )
}