import { useEffect, useRef } from "react";
import { CommonPrism } from "../Common";
export function CanvasCurveArcTo() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    useEffect(() => {
        if (canvasRef.current) {
            const context = canvasRef.current.getContext('2d');
            if (context) {
                context.clearRect(0, 0, 200, 200); // 清除畫布
                context.beginPath(); // 開始繪製
                context.strokeStyle = 'red'; // 設定線條顏色 線條預設顏色為黑色

                // context.moveTo(20, 20);           // 設定起始點
                // context.lineTo(100, 20);          // 畫一條直線到(100,20)
                // context.arcTo(150, 20, 150, 70, 50); // 從(150,20)畫一個半徑為50的圓弧到(150,70)
                // context.lineTo(150, 120);         // 畫一條直線從(150,70)到(150,120)

                context.moveTo(0, 0);           // 設定起始點
                context.arcTo(50, 0, 50, 50, 50); // 從(0,0)畫一個半徑為50的圓弧到(100,100

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
            context.clearRect(0, 0, 200, 200); // 清除畫布
            context.beginPath(); // 開始繪製
            context.strokeStyle = 'red'; // 設定線條顏色 線條預設顏色為黑色

            // context.moveTo(20, 20);           // 設定起始點
            // context.lineTo(100, 20);          // 畫一條直線到(100,20)
            // context.arcTo(150, 20, 150, 70, 50); // 從(150,20)畫一個半徑為50的圓弧到(150,70)
            // context.lineTo(150, 120);         // 畫一條直線從(150,70)到(150,120)

            context.moveTo(0, 0);           // 設定起始點
            context.arcTo(50, 0, 50, 50, 50); // 從(0,0)畫一個半徑為50的圓弧到(100,100

            context.stroke();
        }
    }
}, []);`}
            </CommonPrism>
        </div>
    )
}