import { useEffect, useRef } from "react";
import { Prism } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
export function CanvasFillRect() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    useEffect(() => {
        if (canvasRef.current) {
            const context = canvasRef.current.getContext('2d');
            if (context) {
                // 畫線前先清除畫布
                context.clearRect(0, 0, 200, 200);
                // 設定顏色
                context.fillStyle = 'red';
                // 畫方形
                context.fillRect(0, 0, 100, 100); // 從(0,0)畫一個寬100高100的方形
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
            // 設定顏色
            context.fillStyle = 'red';
            // 畫方形
            context.fillRect(0, 0, 100, 100); // 從(0,0)畫一個寬100高100的方形
        }
    }
}, []);
`}
            </Prism>

        </div>
    )
}