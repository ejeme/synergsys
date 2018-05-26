var Product = require('../models/product')

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping');
mongoose.connect(process.env.MONGODB_URI)

var products = [
new Product({
    imagePath:'../public/images/dahua/DH-IPC-HDBW1420EP.jpg',
    title: 'Dahua DH-IPC-HDBW1420E 4MP Network Mini IR Dome Camera',
    description:'1/2.9" 4MP CMOS,ICR, H.264/MJPEG,1080P(1~30fps), 3.6mm, IR 30m,IP67 DC12V/PoE',
    price:12
}),

new Product({
    imagePath:'../public/images/dahua/dh-ipc-hfw1420sp.jpg',
    title: 'DH-IPC-HFW1420S 4MP Network Mini IR Bullet Camera',
    description:'1/2.9" 4MP CMOS,ICR, H.264/MJPEG,1080P(1~30fps), 3.6mm, IR 30m,IP67 DC12V/PoE',
    price:12
}),
new Product({
    imagePath:'../public/images/dahua/DH-IPC-HFW1220SP.png',
    title: 'DH-IPC-HFW1220S 2MP Full HD Network Mini IR Bullet Camera',
    description:'1/2.9" 2MP CMOS,ICR, H.264/MJPEG,1080P(1~30fps), 3.6mm, IR 30m,IP67 DC12V/PoE',
    price:12
}),
new Product({
    imagePath:'../public/images/dahua/DH-IPC-HFW1220SP.png',
    title: 'DH-IPC-HDBW1220E  2MP IR Mini-Dome Network Camera',
    description:'1/2.9" 2MP CMOS,ICR, H.264/MJPEG,1080P(1~30fps), 2.8mm lens, IR 30m, 3Axis, IP67,IK10, DC12V/PoE',
    price:12
}),
new Product({
    imagePath:'../public/images/dahua/dh-ipc-hfw4431dp.png',
    title: 'DH-IPC-HFW4431D-AS 4MP WDR LXIR Bullet Network  Camera',
    description:'1/3" 4M CMOS,ICR,WDR (120dB) H.265+/H.265/H.264+/H.264,4MP(1~30fps) 3.6mm 6mm Fixed lens, IR 80m, Alarm1/1, Audio1/1 ,Micro SD,IP67, DC12V,PoE',
    price:12
}),
new Product({
    imagePath:'../public/images/dahua/DH-IPC-HFW4431B-AS.png',
    title: 'DH-IPC-HFW4431B-AS 4MP HD WDR Network LXIR Bullet Camera',
    description:'1/3"4M  CMOS,ICR,WDR (120dB) H.265+/H.265/H.264+/H.264,4MP(1~30fps) 3.6mm 6mm Fixed lens, IR 50m, Alarm1/1, Audio1/1, Micro SD, IP67, DC12V,PoE',
    price:12
}),
new Product({
    imagePath:'../public/images/dahua/dh-ipc-hfw4231dp.png',
    title: 'DH-IPC-HFW4231D-AS 2MP WDR LXIR Bullet Network Camera',
    description:'1/2.8" 2M SONY CMOS,ICR,WDR (120dB) H.265+/H.265/H.264+/H.264,1080P(1~60fps) 3.6mm 6mm Fixed lens, IR 80m, Alarm1/1, Audio1/1, Micro SD,IP67 DC12V,PoE',
    price:12
}),
new Product({
    imagePath:'../public/images/dahua/dh-ipc-hfw4231dp.png',
    title: 'DH-IPC-HFW4231D-AS 2MP WDR LXIR Bullet Network Camera',
    description:'1/2.8" 2M SONY CMOS,ICR,WDR (120dB) H.265+/H.265/H.264+/H.264,1080P(1~60fps) 3.6mm 6mm Fixed lens, IR 80m, Alarm1/1, Audio1/1, Micro SD,IP67 DC12V,PoE',
    price:12
}),

];

var done=0;

for (var i = 0; i < products.length; i++){
    products[i].save(function(err, result){
    done++;
    if (done === products.length) {
        exit();
    }   
    });
}

function exit(){
mongoose.disconnect();
}