import { useEffect, useRef } from "react";
import { Prism } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export function CanvasFillText() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    useEffect(() => {
        if (canvasRef.current) {
            const context = canvasRef.current.getContext('2d');
            if (context) {
                context.clearRect(0, 0, 200, 200); // 清除畫布                
                context.fillStyle = 'white'; // 設定填滿顏色 填滿預設顏色為黑色
                context.font = '30px Arial'; // 設定字體大小及字型
                context.fillText('Hello World', 0, 30); // 在(0,30)的位置填入文字 30的原因是因為字體大小為30px 這樣才會剛剛好能夠顯示出來
                context.fillText("你好", 0, 60); // 在(0,60)的位置填入文字 60的原因是因為字體大小為30px 這樣才會剛剛好能夠顯示出來
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
                context.fillStyle = 'white'; // 設定填滿顏色 填滿預設顏色為黑色
                context.font = '30px Arial'; // 設定字體大小及字型
                context.fillText('Hello World', 0, 30); // 在(0,30)的位置填入文字 30的原因是因為字體大小為30px 這樣才會剛剛好能夠顯示出來
                context.fillText("你好", 0, 60); // 在(0,60)的位置填入文字 60的原因是因為字體大小為30px 這樣才會剛剛好能夠顯示出來
        }
    }
}, []);`}
            </Prism>
        </div>
    )
}