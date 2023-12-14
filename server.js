const express = require('express'); 
const app = express(); 
const port = 5000; 

app.listen(port, () => console.log(`Listening on port ${port}`));

// Создание GET маршрута
app.get('/set', (req, res) => { 
    res.send({
        sizes: ['Стандартный', 'Увеличенный'],
        drinkCounts: [6, 8, 12]
      });
}); 