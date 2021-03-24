use optimus;

select * from tb_produto;
select * from tb_imagem;

insert into tb_produto values
(default, 'Rick Riordan', 'The Lightning Thief é um livro juvenil de fantasia e aventura baseado na mitologia grega, escrito por Rick Riordan. É o primeiro livro da série norte-americana Percy Jackson & the Olympians, que narra a vida do adolescente Percy Jackson que descobre ser um semideus, filho de Poseidon com uma humana.', 'Miramax Books', 70, 5, 'https://i.imgur.com/SrGSBQf.jpg', 'O Ladrão de Raios Série Percy Jackson e os Olimpianos', 1, 49.90),
(default, 'J. K. Rowling', 'Após as sofríveis férias na casa dos tios, Harry Potter se prepara para voltar a Hogwarts e começar seu segundo ano na escola de bruxos. Na véspera do início das aulas, a estranha criatura Dobby aparece em seu quarto e o avisa de que voltar é um erro e que algo muito ruim pode acontecer se Harry insistir em continuar os estudos de bruxaria. ', 'Rocco', 50, 5, 'https://i.imgur.com/zzgNG3P.jpg', 'Harry Potter e a câmara secreta', 1, 39.90),
(default, 'Paulo Vieira', 'Acorde para os objetivos que quer conquistar. Já aconteceu a você de se olhar no espelho e não gostar daqueles quilos a mais? De observar seu momento profissional somente com frustração? De se sentir desconectado dos seus familiares, dos seus amigos?', 'Gente', 60, 5, 'https://i.imgur.com/Og79ZUY.jpg', 'O Poder da Ação', 1, 44.90),
(default, 'Charles Duhigg', 'O Poder do Hábito: por que fazemos o que fazemos na vida e nos negócios é um livro de Charles Duhigg, ex-repórter do New York Times, publicado em Fevereiro de 2012 pela Random House. Explora a ciência por trás da criação e reforma de hábitos.', 'Objetiva', 30, 4, 'https://i.imgur.com/p4KovUG.jpg', 'O Poder do Hábito', 1, 64.90),
(default, 'Mark Manson', 'Chega de tentar buscar um sucesso que só existe na sua cabeça. Chega de se torturar para pensar positivo enquanto sua vida vai ladeira abaixo.', 'HarperOne', 10, 4, 'https://i.imgur.com/czmU6fa.jpg', 'A sutil arte de ligar o f*da-se', 1, 39.90),
(default, 'Andrzej Sapkowski', 'Geralt de Rívia é um bruxo sagaz e habilidoso. Um assassino impiedoso e de sangue-frio treinado, desde a infância, para caçar e eliminar monstros. Seu único objetivo: destruir as criaturas do mal que assolam o mundo. Um mundo fantástico criado por Sapkowski com claras influências da mitologia eslava. Um mundo em que nem todos os que parecem monstros são maus nem todos os que parecem anjos são bons...', '	WMF Martins Fontes', 20, 4, 'https://i.imgur.com/jYsoweh.jpg', 'O último desejo - The Witcher', 1, 49.90),
(default, 'Dale Carnegie', 'Como fazer amigos e influenciar pessoas é um livro da autoria do estadunidense Dale Carnegie, destinado a desenvolver estratégias comunicativas e de ajuda entre pessoas.', 'Simon & Schuster', 40, 4, 'https://i.imgur.com/hFibjgX.jpg', 'Como Fazer Amigos e Influenciar Pessoas', 1, 36.90),
(default, 'Mário Sergio Cortella', 'Por que Fazemos o que Fazemos? - Aflições vitais sobre trabalho, carreira e realização é um livro escrito pelo filósofo e professor Mario Sergio Cortella lançado em julho de 2016', 'Planeta', 60, 4, 'https://i.imgur.com/hz3nu5b.jpg', 'Por que Fazemos o que Fazemos?', 1, 21.81),
(default, 'Nathalia Arcuri', 'Como economizar no dia a dia? Como poupar mesmo ganhando pouco? Quais são os melhores (e os piores) investimentos? Como poupar para o futuro sem abrir mão dos desejos e necessidades do presente?', 'Editora Sextante', 90, 5, 'https://i.imgur.com/HlJd517.jpg', 'Me Poupe!', 1, 36.90),
(default, 'Robert Kiyosaki', 'Pai Rico, Pai Pobre é o primeiro best-seller de Robert Kiyosaki e Sharon Lechter. Ele advoga a busca pela independência financeira através de investimento, imóveis, ter seu próprio negócio e o uso de táticas financeiras de proteção do patrimônio.', 'Alta Books', 50, 3, 'https://i.imgur.com/5kykbug.jpg', 'Pai Rico, Pai Pobre', 1, 79.90);

insert into tb_imagem (id_projeto, link1, link2, link3, link4) values 
(1, 'https://i.imgur.com/fOuvKJ7.jpg', 'https://i.imgur.com/E5T132v.jpg', 'https://i.imgur.com/fOuvKJ7.jpg', 'https://i.imgur.com/E5T132v.jpg'),
(2, 'https://i.imgur.com/nTqdPPm.jpg', 'https://i.imgur.com/z4j3vOY.jpg', 'https://i.imgur.com/nTqdPPm.jpg', 'https://i.imgur.com/z4j3vOY.jpg'),
(3, 'https://i.imgur.com/JxUOmYe.jpg', 'https://i.imgur.com/iW3CUWB.jpg', 'https://i.imgur.com/JxUOmYe.jpg', 'https://i.imgur.com/iW3CUWB.jpg'),
(4, 'https://i.imgur.com/lHTbWXH.jpg', 'https://i.imgur.com/mvhQdBD.jpg', 'https://i.imgur.com/lHTbWXH.jpg', 'https://i.imgur.com/mvhQdBD.jpg'),
(5, 'https://i.imgur.com/AEtu5bt.jpg', 'https://i.imgur.com/PmftBTb.jpg', 'https://i.imgur.com/AEtu5bt.jpg', 'https://i.imgur.com/PmftBTb.jpg'),
(6, 'https://i.imgur.com/i4tcvY0.jpg', 'https://i.imgur.com/BYwUH8Z.jpg', 'https://i.imgur.com/i4tcvY0.jpg', 'https://i.imgur.com/BYwUH8Z.jpg'),
(7, 'https://i.imgur.com/twyr8HT.jpg', 'https://i.imgur.com/xNHtpW3.png', 'https://i.imgur.com/twyr8HT.jpg', 'https://i.imgur.com/xNHtpW3.png'),
(8, 'https://i.imgur.com/wrxjkbw.jpg', 'https://i.imgur.com/0o3jJky.png', 'https://i.imgur.com/wrxjkbw.jpg', 'https://i.imgur.com/0o3jJky.png'),
(9, 'https://i.imgur.com/0xhcgWY.jpg', 'https://i.imgur.com/bXdU2ZJ.jpg', 'https://i.imgur.com/0xhcgWY.jpg', 'https://i.imgur.com/bXdU2ZJ.jpg'),
(10, 'https://i.imgur.com/yYfWu03.jpg', 'https://i.imgur.com/4TEGvAU.jpg', 'https://i.imgur.com/yYfWu03.jpg', 'https://i.imgur.com/4TEGvAU.jpg');