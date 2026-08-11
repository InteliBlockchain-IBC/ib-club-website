const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'client/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/dist/index.html'));
});

// PORT vem do ambiente porque é assim que Vercel, Fly e qualquer PaaS
// entregam a porta ao processo. 3000 é só o padrão de desenvolvimento.
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening at localhost: ${PORT}`));