const express = require('express');
const router = express.Router();
const cors = require('cors');
const { twitterdown } = require('nayan-media-downloader');
const bodyParser = require('body-parser');

router.use(cors());
router.use(bodyParser.json());

router.post('/getXVideoUrls', async (req, res) => {
    const url = req.body.urls[0];
    try {
        const videoUrls = await twitterdown(url);
        res.json({ success: true, videoUrls: videoUrls });

        // console.log(videoUrls);
    } catch (error) {
        res.json({ success: false, message: 'Error retrieving video URLs.' });
    }
});

module.exports = router;
