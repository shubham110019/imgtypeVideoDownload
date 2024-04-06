const express = require('express');
const app = express();
const FbInstRoutes = require('./FbInstRoutes');
const XTwitterRoutes = require('./XTwitterRoutes');
const PORT = process.env.PORT || 3000;

app.use(FbInstRoutes);
app.use(XTwitterRoutes);



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
