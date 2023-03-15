import { useEffect, useRef } from "react";
import { Prism } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export function CanvasCurveArc() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    useEffect(() => {
        if (canvasRef.current) {
            const context = canvasRef.current.getContext('2d');
            if (context) {
                context.clearRect(0, 0, 200, 200); // 清除畫布
                context.beginPath(); // 開始繪製
                context.strokeStyle = 'red'; // 設定線條顏色 線條預設顏色為黑色
                context.arc(100, 75, 50, 0, Math.PI); // 從(100,75)畫一個半徑為50的圓弧，從0度到180度 (PI是180度)
                context.stroke();
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
            context.clearRect(0, 0, 200, 200); // 清除畫布
            context.beginPath(); // 開始繪製
            context.strokeStyle = 'red'; // 設定線條顏色 線條預設顏色為黑色
            context.arc(100, 75, 50, 0, Math.PI); // 從(100,75)畫一個半徑為50的圓弧，從0度到180度 (PI是180度)
            context.stroke();
            context.closePath();
        }
    }
}, []);`}
            </Prism>
        </div>
    )
}