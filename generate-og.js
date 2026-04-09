const { createCanvas } = require('canvas');
const fs = require('fs');

const width = 1200;
const height = 630;
const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

// Fundo escuro gradiente
ctx.fillStyle = '#0a0a0a';
ctx.fillRect(0, 0, width, height);

// Linha de destaque lateral esquerda
ctx.fillStyle = '#3B82F6';
ctx.fillRect(80, 120, 6, 280);

// Nome
ctx.fillStyle = '#FFFFFF';
ctx.font = 'bold 72px sans-serif';
ctx.fillText('Alan Sepe', 110, 230);

// Cargo linha 1
ctx.fillStyle = '#94A3B8';
ctx.font = '36px sans-serif';
ctx.fillText('Executivo de Operações Industriais', 110, 295);

// Cargo linha 2
ctx.fillText('& Engenharia', 110, 345);

// Linha divisória
ctx.fillStyle = '#1E293B';
ctx.fillRect(110, 390, 700, 2);

// Detalhes
ctx.fillStyle = '#64748B';
ctx.font = '28px sans-serif';
ctx.fillText('19+ anos de experiência  •  Curitiba, Brasil', 110, 440);

// Site
ctx.fillStyle = '#3B82F6';
ctx.font = '26px sans-serif';
ctx.fillText('portfolio-alan-sepe.vercel.app', 110, 500);

// Salva
const buffer = canvas.toBuffer('image/jpeg', { quality: 0.95 });
fs.writeFileSync('./public/images/og/home.jpg', buffer);
console.log('Imagem OG gerada com sucesso!');