// server.js

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

const mobileProducts = [
  {
    id: 1,
    name: "Redmi Note 10",
    price: "12000",
    type: "Smartphone",
    processor: "Snapdragon 678",
    memory: "8GB",
    os: "Android",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8BSey2GldaXp3_AdhuWU9tS0Elkd_AD3m1A&usqp=CAU",
  },

  {
    id: 2,
    name: "Vivo t1",
    price: "15000",
    type: "Smartphone",
    processor: "Xos",
    memory: "6GB",
    os: "Android",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzSnsONlupJcpv1L_yGawH65LchPrZU1AOmg&usqp=CAU",
  },

  {
    id: 3,
    name: "Infinix Zero 5g",
    price: "15500",
    type: "Smartphone",
    processor: "Mediatek",
    memory: "4GB",
    os: "Android",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7431Ik3fNL2ploDj36YhgCcmLS01eHqV5n90kF9UDjuKfIQ8yfkuBMaMeUGuVA4kteak&usqp=CAU",
  },

  {
    id: 4,
    name: "Realme Narzo 30",
    price: "10000",
    type: "Smartphone",
    processor: "Helio X10",
    memory: "5GB",
    os: "Android",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4raLLdCTG0KZJE1Kf-6o6WpR_Zoz2iQfTrrylpHoxX4xnKOFZnQulYy-tIhiCkeyTTVw&usqp=CAU",
  },

  {
    id: 5,
    name: "Vivo v21",
    price: "21000",
    type: "Smartphone",
    processor: "	Dimensity 9200",
    memory: "3GB",
    os: "Android",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ImcEjOJrBiGP-LeWnF8zBhWrF1oFB2SZqA&usqp=CAU",
  },

  {
    id: 6,
    name: "Iphone x",
    price: "50000",
    type: "Smartphone",
    processor: "Apple A7",
    memory: "8GB",
    os: "Iphone",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu1fRevaQbVfXS3punDlP0nD_q9LisHctXlg&usqp=CAU",
  },

  {
    id: 7,
    name: "Nokia n3",
    price: "7000",
    type: "Smartphone",
    processor: "Kirin 620",
    memory: "12GB",
    os: "Android",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZbWRz3AX1ibZ2VWdCUDwq0e52r_D1ZtY-zQ&usqp=CAU",
  },

  {
    id: 8,
    name: "Itel z30",
    price: "8000",
    type: "Smartphone",
    processor: "Exynos 7570",
    memory: "4GB",
    os: "Android",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNQRpkABf4ThcSbmENeX9rpPsxfUWxl8XkyA&usqp=CAU",
  },

  {
    id: 9,
    name: "Oppo a3",
    price: "6500",
    type: "Smartphone",
    processor: "MT6750",
    memory: "5GB",
    os: "Android",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7fAJxjAHcwVGtowprwOZ20_me7iwcsjJYLA&usqp=CAU",
  },

  {
    id: 10,
    name: "Tecno t4",
    price: "14000",
    type: "Smartphone",
    processor: "Exynos 7870",
    memory: "8GB",
    os: "Android",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQot769EqYbsUiF8sn10-pkQdQ8bK_ntl2iHQ&usqp=CAU",
  },
  // Add more mobile products as needed
];

// RESTful API Endpoints
app.get("/api/mobiles", (req, res) => {
  res.json(mobileProducts);
});

app.get('/api/mobiles/search', (req, res) => {
  const { name, price, type, processor, memory, os } = req.query;

  const numericPrice = parseFloat(price) || Infinity;
  const numericMemory = parseFloat(memory) || Infinity;

  const filteredMobiles = mobileProducts.filter(product =>
    (name ? product.name.toLowerCase().includes(name.toLowerCase()) : true) &&
    (price ? parseFloat(product.price) <= numericPrice : true) &&
    (type ? product.type.toLowerCase().includes(type.toLowerCase()) : true) &&
    (processor ? product.processor.toLowerCase().includes(processor.toLowerCase()) : true) &&
    (memory ? parseFloat(product.memory) <= numericMemory : true) &&
    (os ? product.os.toLowerCase().includes(os.toLowerCase()) : true)
  );

  res.json(filteredMobiles);
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


