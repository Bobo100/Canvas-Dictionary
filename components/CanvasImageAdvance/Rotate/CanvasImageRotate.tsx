// 圖片旋轉?
import { useEffect, useRef, useState } from "react";
import { Decimal } from "decimal.js"
import { CommonPrism } from "../../Common";

export default function CanvasImageRotate({ src }: { src: string }) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const canvasRef2 = useRef<HTMLCanvasElement | null>(null);

    const [image, setImage] = useState<HTMLImageElement | null>(null);
    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        const img = new Image();
        // 當圖片載入完成後，才把圖片設定到state
        img.onload = () => {
            setImage(img);
        }
        img.src = src;
    }, [src]);

    useEffect(() => {
        if (!image) return;
        if (canvasRef.current && canvasRef2.current) {
            const context = canvasRef.current.getContext('2d');
            const context2 = canvasRef2.current.getContext('2d');
            if (context && context2) {
                context.clearRect(0, 0, 300, 300); // 清除畫布
                // save() 與 restore() 用來儲存與還原畫布的狀態
                context.font = '20px sans-serif';
                context.fillStyle = 'white';
                context.fillText('使用 save() 與 restore()', 10, 20);
                context.save();
                context.translate(150, 150);
                context.rotate(rotate * Math.PI / 180); // 弧度 = 角度 x Math.PI / 180
                context.drawImage(image, -100, -100, 200, 200);
                context.restore();

                // 沒有使用 save() 與 restore() 導致畫布狀態被改變 會出現錯誤
                context2.clearRect(0, 0, 300, 300); // 清除畫布
                context2.font = '20px sans-serif';
                context2.fillStyle = 'white';
                context2.fillText('沒有使用 save() 與 restore()', 10, 20);
                context2.translate(150, 150);
                context2.rotate(rotate * Math.PI / 180); // 弧度 = 角度 x Math.PI / 180
                context2.drawImage(image, -100, -100, 200, 200);
            }
        }
    }, [image, rotate]);

    function rotateImage() {
        let newRotate = rotate;
        if (rotate < 360) {
            newRotate = new Decimal(rotate).plus(10).toNumber();
        } else {
            newRotate = 0;
        }
        setRotate(newRotate);
    }

    return (
        <div>
            <canvas ref={canvasRef} width={300} height={300} />
            <canvas ref={canvasRef2} width={300} height={300} />
            <button onClick={rotateImage}>旋轉</button>
            <CommonPrism>
                {`// 正確寫法！！
const canvasRef = useRef<HTMLCanvasElement | null>(null);
const [image, setImage] = useState<HTMLImageElement | null>(null);
const [rotate, setRotate] = useState(0);

useEffect(() => {
    const img = new Image();
    // 當圖片載入完成後，才把圖片設定到state
    img.onload = () => {
        setImage(img);
    }
    img.src = src;
}, [src]);

useEffect(() => {
    if (!image) return;
    if (canvasRef.current) {
        const context = canvasRef.current.getContext('2d');
        if (context) {
            context.clearRect(0, 0, 300, 300); // 清除畫布                
            // save() 與 restore() 用來儲存與還原畫布的狀態
            context.save();
            context.translate(150, 150);                
            context.rotate(rotate * Math.PI / 180); // 弧度 = 角度 x Math.PI / 180
            context.drawImage(image, -100, -100, 200, 200);
            context.restore();
        }
    }
}, [image, rotate]);

function rotateImage() {
    let newRotate = rotate;
    if (rotate < 360) {
        newRotate = new Decimal(rotate).plus(10).toNumber();
    } else {
        newRotate = 0;
    }
    setRotate(newRotate);
}`}
            </CommonPrism>
        </div>
    )
}
