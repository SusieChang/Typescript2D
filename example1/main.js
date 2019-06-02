var Canvas2DUtil = /** @class */ (function () {
    // 构造函数
    function Canvas2DUtil(canvas) {
        this.context = canvas.getContext('2d');
    }
    Canvas2DUtil.prototype.drawText = function (text) {
        // save / restore 来记录与恢复修改前的状态
        this.context.save();
        this.context.textBaseline = 'middle';
        this.context.textAlign = 'center';
        // 计算中心坐标
        var centerX = this.context.canvas.width * 0.5;
        var centerY = this.context.canvas.height * 0.5;
        // 红色
        this.context.fillStyle = 'red';
        this.context.fillText(text, centerX, centerY);
        this.context.strokeStyle = 'green';
        this.context.strokeText(text, centerX, centerY);
        //恢复初始状态
        this.context.restore();
    };
    return Canvas2DUtil;
}());
var canvas = document.querySelector('#canvas');
if (canvas === null) {
    console.error('无法获取HTMLCanvasElement!');
    throw new Error('无法获取HTMLCanvasElement!');
}
var canvas2d = new Canvas2DUtil(canvas);
canvas2d.drawText('Hello World');
