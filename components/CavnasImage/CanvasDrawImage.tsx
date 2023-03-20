import { useEffect, useRef } from "react";
import { CommonPrism } from "../components/Common";
export function CanvasDrawImage() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    useEffect(() => {
        if (canvasRef.current) {
            const context = canvasRef.current.getContext('2d');
            if (context) {
                context.clearRect(0, 0, 300, 300); // 清除畫布                
                const image = new Image(); // 建立一個Image物件
                image.src = 'https://picsum.photos/200/200'; // 設定圖片來源
                image.onload = () => { // 當圖片載入完成後
                    context.drawImage(image, 0, 0, 200, 200); // 在(0,0)的位置繪製圖片 並且設定圖片的寬高為200px
                    context.drawImage(image, 250, 250, 50, 50); // 在(250,250)的位置繪製圖片 並且設定圖片的寬高為50px                
                }
            }
        }
    }, []);

    return (
        <div>
            <canvas ref={canvasRef} width={300} height={300} />
            <CommonPrism>
                {`const canvasRef = useRef<HTMLCanvasElement | null>(null);
useEffect(() => {
    if (canvasRef.current) {
        const context = canvasRef.current.getContext('2d');
        if (context) {
            context.clearRect(0, 0, 300, 300); // 清除畫布                
            const image = new Image(); // 建立一個Image物件            
            image.onload = () => { // 當圖片載入完成後
                context.drawImage(image, 0, 0, 200, 200); // 在(0,0)的位置繪製圖片 並且設定圖片的寬高為200px
                context.drawImage(image, 250, 250, 50, 50); // 在(250,250)的位置繪製圖片 並且設定圖片的寬高為50px
            }
            image.src = 'https://picsum.photos/200/200'; // 設定圖片來源
        }
    }
}, []);`}
            </CommonPrism>
        </div>
    )
}