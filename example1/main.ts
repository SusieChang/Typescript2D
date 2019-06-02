class Canvas2DUtil {
    // 声明全局变量
    public context: CanvasRenderingContext2D;
    // 构造函数
    public constructor ( canvas: HTMLCanvasElement ) {
        this.context = canvas.getContext('2d');
    }

    public drawText ( text: string ): void {
        // save / restore 来记录与恢复修改前的状态
        this.context.save();
        this.context.textBaseline = 'middle';
        this.context.textAlign = 'center';
        // 计算中心坐标
        let centerX: number = this.context.canvas.width * 0.5;
        let centerY: number = this.context.canvas.height * 0.5;
        // 红色
        this.context.fillStyle = 'red';
        this.context.fillText( text, centerX, centerY );
        this.context.strokeStyle = 'green';
        this.context.strokeText( text, centerX, centerY);
        //恢复初始状态
        this.context.restore();
    }
}

let canvas: HTMLCanvasElement | null = document.querySelector('#canvas') as HTMLCanvasElement;
if (canvas === null) {
    console.error( '无法获取HTMLCanvasElement!' );
    throw new Error( '无法获取HTMLCanvasElement!' );
}
let canvas2d: Canvas2DUtil = new Canvas2DUtil( canvas );
canvas2d.drawText( 'Hello World');