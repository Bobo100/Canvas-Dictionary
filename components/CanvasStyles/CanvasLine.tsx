import { useEffect, useRef } from "react";
import { Prism } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
export function CanvasLine() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    useEffect(() => {
        if (canvasRef.current) {
            const context = canvasRef.current.getContext('2d');
            if (context) {
                // 畫線前先清除畫布
                context.clearRect(0, 0, 200, 200);
                /// 準備畫線
                // 先設定線條顏色
                context.strokeStyle = 'red';
                // 開始畫線
                context.beginPath();
                context.moveTo(0, 0); // 起點
                context.lineTo(100, 100); // 終點
                context.stroke(); // 畫線
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
            /// 準備畫線
            // 先設定線條顏色
            context.strokeStyle = 'red';
            // 開始畫線
            context.beginPath();
            context.moveTo(0, 0); // 起點
            context.lineTo(100, 100); // 終點
            context.stroke(); // 畫線
        }
    }
}, []);
`}
            </Prism>

        </div>
    )
}