import { useEffect, useRef } from "react";
import { Prism } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export function CanvasTriangle() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    useEffect(() => {
        if (canvasRef.current) {
            const context = canvasRef.current.getContext('2d');
            if (context) {
                context.clearRect(0, 0, 200, 200); // 清除畫布
                context.strokeStyle = 'red'; // 設定線條顏色 線條預設顏色為黑色
                context.beginPath(); // 開始繪製
                context.moveTo(100, 0); // 設定起始點
                context.lineTo(0, 190);
                context.lineTo(200, 190);
                context.lineTo(100, 0); // 也可以用 context.closePath(); 來封閉路徑
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
            context.clearRect(0, 0, 200, 200); // 清除畫布
            context.strokeStyle = 'red'; // 設定線條顏色 線條預設顏色為黑色
            context.beginPath(); // 開始繪製
            context.moveTo(100, 0); // 設定起始點
            context.lineTo(0, 190);
            context.lineTo(200, 190);
            context.lineTo(100, 0); // 也可以用 context.closePath(); 來封閉路徑
            context.stroke();
        }
    }
}, []);`}
            </Prism>
        </div>
    )
}