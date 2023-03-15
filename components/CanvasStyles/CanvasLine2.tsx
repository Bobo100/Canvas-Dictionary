import { useEffect, useRef } from "react";
import { Prism } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
export function CanvasLine2() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    useEffect(() => {
        if (canvasRef.current) {
            const context = canvasRef.current.getContext('2d');
            if (context) {
                // 畫線前先清除畫布
                context.clearRect(0, 0, 200, 200);
                // 畫線
                context.beginPath();
                context.strokeStyle = 'red';
                context.moveTo(0, 0);
                context.lineTo(100, 100);
                context.lineTo(200, 50)
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
            // 畫線
            context.beginPath(); // 開始繪製
            context.strokeStyle = 'red'; // 設定線條顏色 線條預設顏色為黑色
            context.moveTo(0, 0); // 設定起始點
            context.lineTo(100, 100); // 設定結束點(注意是線條的結束點) 所以這裡是畫一條從(0,0)到(100,100)的線
            context.lineTo(200, 50); //從上一個點畫到(200,50)  
            context.stroke(); // 繪製線條 如果沒有這行，線條不會顯示
            context.closePath(); // 結束繪製
        }
    }
}, []);
`}
            </Prism>

        </div>
    )
}