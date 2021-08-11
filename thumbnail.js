const imageThumbnail = require('image-thumbnail');

imageThumbnail('./cat.jpg')
    .then(thumbnail => { console.log(thumbnail) })
    .catch(err => console.error(err));

