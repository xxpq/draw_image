var os = require('os');
var image = require('image');

`use data.js`

function main() {
    console.warn("tips:", ':: test script!')

    // 创建一个新的图像
    // var bg = image.new(400, 200);

    // 或加载一个图像做背景
    let bgImg = image.load('./img/bg.jpg')
    let bg = image.parse(bgImg)

    
    // 设置画笔颜色
    bg.setHexColor("##000");
    
    // bg.drawImage(b1Img, 1300, 1300)

    // 设置字体
    bg.loadFontFace('./Lato-Bold.ttf', 150)

    // 枚举letoList里面的每个数据
    for (let i = 0; i < letoList.length; i++) {
        let leto = letoList[i]
        
        // 输出要写出的数据
        console.info(leto.drawNbr)

        // 写字到指定坐标
        bg.drawString(leto.drawNbr, 460, 850 + i * 200);

        // 继续取数据
        let letoResult = leto.drawNbrs

        let diceA = parseInt(letoResult[1]) + parseInt(letoResult[4]) + parseInt(letoResult[7]) + parseInt(letoResult[10]) + parseInt(letoResult[13]) + parseInt(letoResult[16])
        // 取最后一位
        diceA = diceA % 10
        let diceB = parseInt(letoResult[2]) + parseInt(letoResult[5]) + parseInt(letoResult[8]) + parseInt(letoResult[11]) + parseInt(letoResult[14]) + parseInt(letoResult[17])
        // 取最后一位
        diceB = diceB % 10
        let diceC = parseInt(letoResult[3]) + parseInt(letoResult[6]) + parseInt(letoResult[9]) + parseInt(letoResult[12]) + parseInt(letoResult[15]) + parseInt(letoResult[18])
        // 取最后一位
        diceC = diceC % 10

        // 加载要覆盖在背景图之上的图像（贴图）
        let numberImg = image.load(`./img/r${diceA}.png`)
        // 贴图到指定坐标
        bg.drawImage(numberImg, 1300, 700 + i * 200)

        numberImg = image.load(`./img/r${diceB}.png`)
        bg.drawImage(numberImg, 1645, 700 + i * 200)

        numberImg = image.load(`./img/r${diceB}.png`)
        bg.drawImage(numberImg, 2000, 700 + i * 200)

        // totalPoint 游戏点数
        let totalPoint = diceA + diceB + diceC

        numberImg = image.load(`./img/b${totalPoint}.png`)
        bg.drawImage(numberImg, 2560, 700 + i * 200)

        // 单双
        numberImg = image.load(`./img/bs.png`)
        bg.drawImage(numberImg, 3100, 700 + i * 200)

        numberImg = image.load(`./img/rd.png`)
        bg.drawImage(numberImg, 3300, 700 + i * 200)

        // 极大小
        numberImg = image.load(`./img/rjd.png`)
        bg.drawImage(numberImg, 3850, 700 + i * 200)

        // 豹顺
        numberImg = image.load(`./img/rb.png`)
        bg.drawImage(numberImg, 4520, 700 + i * 200)

    }

    // 输出最终图像文件
    bg.savePNG("output.png");
    // let result = os.exec('rm', '-rf','output.png')
    // console.log(result)
    os.exit(0)

}
