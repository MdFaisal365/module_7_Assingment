const express = require('express');
const router = express.Router();


const blogController = require('../Controllers/blogController');
const commentController = require('../Controllers/commentController');
const messageController = require('../Controllers/messageControllers');
const portfolioController = require('../Controllers/portfolioController');
const productionController = require('../Controllers/productController');


router.get('blogCreate', blogController.create);
router.get('blogRead', blogController.read);
router.get('blogDelete', blogController.delete);
router.get('blogUpdate', blogController.update);


router.get('commentCreate', commentController.create);
router.get('commentRead', commentController.read);
router.get('commentDelete', commentController.delete);
router.get('commentUpdate', commentController.update);


router.get('messageCreate', messageController.create);
router.get('messageRead', messageController.read);
router.get('messageDelete', messageController.delete);
router.get('messageUpdate', messageController.update);


router.get('portfolioCreate', portfolioController.create);
router.get('portfolioRead', portfolioController.read);
router.get('portfolioDelete', portfolioController.delete);
router.get('portfolioUpdate', portfolioController.update);


router.get('productionCreate', productionController.create);
router.get('productionRead', productionController.read);
router.get('productionDelete', productionController.delete);
router.get('productionUpdate', productionController.update);

module.exports = router;