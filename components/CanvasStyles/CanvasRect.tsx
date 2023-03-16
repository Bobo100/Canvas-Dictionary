import { useEffect, useRef } from "react";
import { Prism } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
export function CanvasRect() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    useEffect(() => {
        if (canvasRef.current) {
            const context = canvasRef.current.getContext('2d');
            if (context) {
                // 畫線前先清除畫布
                context.clearRect(0, 0, 200, 200);
                // 畫方形的邊框
                context.beginPath();
                context.strokeStyle = 'red';
                context.rect(5, 5, 100, 100); // 從(5,5)畫一個寬100高100的方形
                context.stroke(); // 繪製線條 如果沒有這行，線條不會顯示
                context.closePath();
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
            // 畫方形的邊框
            context.beginPath();
            context.strokeStyle = 'red';
            context.rect(5, 5, 100, 100); // 從(5,5)畫一個寬100高100的方形
            context.stroke(); // 繪製線條 如果沒有這行，線條不會顯示
            context.closePath();
        }
    }
}, []);
`}
            </Prism>

        </div>
    )
}