-- data.sql para PRODUCTS

-- Insertar productos de ejemplo
INSERT INTO products (name, description, price) VALUES 
('Televisor Samsung 50"', 'Excelente TV tecnología LCD 4K', 4000.00),
('Laptop HP 15"', 'Portátil con procesador i5, 16GB RAM', 12000.00),
('Teléfono Xiaomi Note 12', 'Android 13, 6GB RAM, 128GB', 8000.00),
('Audífonos Sony WH-1000XM5', 'Inalámbricos con cancelación de ruido', 2500.00),
('Tablet iPad 10"', 'Pantalla Retina, 64GB', 9500.00),
('Monitor LG 27"', '4K UHD, HDR10, 144Hz', 6800.00);

-- Verificar
-- SELECT * FROM products;