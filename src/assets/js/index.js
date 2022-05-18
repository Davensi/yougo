function setHtmlFontSize() {
    // 获取到设备可视宽度大小
    var visualWidth = document.documentElement.clientWidth;
    // 若大于设计稿的750宽度，则以750为准。
    visualWidth = visualWidth > 750 ? 750 : visualWidth;
    document.documentElement.style.fontSize = (visualWidth / 15) + 'px';
}

window.onload = function () {
    setHtmlFontSize();
}

// 页面尺寸改变时，重新设置根元素html字体大小
window.onresize = function () {
    setHtmlFontSize();
}

export default setHtmlFontSize;