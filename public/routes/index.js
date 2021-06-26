const express = require('express');
const router = express.Router();

router.get( '/', ( req, res ) => {
    res.render( 'index', { title : 'Andoni WebSite' } );
});

router.get( '/contact', ( req, res ) => {
    res.render( 'contact', { title : 'Andoni Contact' } );
});

module.exports = router;
