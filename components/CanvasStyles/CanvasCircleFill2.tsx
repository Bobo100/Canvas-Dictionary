import { useEffect, useRef } from "react";
import { Prism } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export function CanvasCircleFill2() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    useEffect(() => {
        if (canvasRef.current) {
            const context = canvasRef.current.getContext('2d');
            if (context) {
                context.clearRect(0, 0, 200, 200); // 清除畫布
                context.beginPath(); // 開始繪製
                context.strokeStyle = "red" // 設定線條顏色 線條預設顏色為黑色
                context.lineWidth = 5; // 設定線條寬度
                context.fillStyle = 'yellow'; // 設定填滿顏色 填滿預設顏色為黑色
                context.arc(100, 75, 50, 0, 2 * Math.PI); // 從(100,75)畫一個半徑為50的圓弧，從0度到360度 (2PI是360度)，所以也就是畫一個圓
                context.stroke(); // 繪製線條
                context.fill(); // 填滿圖形                
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
            context.strokeStyle = "red" // 設定線條顏色 線條預設顏色為黑色
            context.lineWidth = 5; // 設定線條寬度
            context.fillStyle = 'yellow'; // 設定填滿顏色 填滿預設顏色為黑色
            context.arc(100, 75, 50, 0, 2 * Math.PI); // 從(100,75)畫一個半徑為50的圓弧，從0度到360度 (2PI是360度)，所以也就是畫一個圓
            context.stroke(); // 繪製線條
            context.fill(); // 填滿圖形                
            context.closePath();
        }
    }
}, []);`}
            </Prism>
        </div>
    )
}