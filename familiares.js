const familiares = [
{ 
	id: 1, 
	tags: ["blue"], 
	Nombre: "Domingo Caffarini", 
	País: "Argentina", 
	Localidad: "Hurlingham", 
	img: "./img/Hombre_1.jpg", 
	Profesión: "Peluquero", 
	Biografía: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
},
{ 
	id: 2, 
	pid: 1, 
	tags: ["partner"], 
	Nombre: "Tita", 
	País: "Argentina", 
	Localidad: "Hurlingham", 
	Título: "", 
	img: "./img/Mujer_1.jpg" },
{ 
	id: 3, 
	pid:1, 
	ppid: 2, 
	Nombre: "Héctor Caffarini", 
	País: "Argentina", 
	Localidad: "Mar del Plata", 
	Título: "", 
	img: "./img/Hombre_1.jpg" },
{ 
	id: 4, 
	pid:1, 
	ppid: 2, 
	Nombre: "Nicolita Caffarini", 
	Título: "", 
	img: "./img/Hombre_1.jpg" },
{ 
	id: 5, 
	pid:1, 
	ppid: 2, 
	Nombre: "Clara Caffarini", 
	Título: "", 
	img: "./img/Mujer_1.jpg" },
{ 
	id: 6, 
	pid:3, 
	tags: ["partner"], 
	Nombre: "Carmen Viloni", 
	País: "Argentina", 
	Localidad: "Mar del Plata", 
	Título: "", 
	img: "./img/Mujer_1.jpg" },
{ 
	id: 7, 
	pid:3, 
	ppid: 6, 
	Nombre: "Héctor Domingo Caffarini", 
	País: "Argentina", 
	Localidad: "Mar del Plata", 
	Título: "", 
	img: "./img/Hombre_1.jpg" },
{ 
	id: 8, 
	pid:3, 
	ppid: 6, 
	Nombre: "Beatriz Caffarini", 
	País: "Argentina", 
	Localidad: "Mar del Plata", 
	Título: "", 
	img: "./img/Mujer_1.jpg" },
{ 
	id: 9, 
	pid:7, 
	tags: ["partner"], 
	Nombre: "Lía Rosa Abeijón", 
	País: "Argentina", 
	Localidad: "Ciudad Autónoma de Buenos Aires", 
	Título: "", 
	img: "./img/Mujer_1.jpg" },
{ 
	id: 10,
	pid: 7, 
	ppid: 9, 
	Nombre: "Héctor Nicolás Caffarini", 
	País: "Argentina", 
	Localidad: "Ciudad Autónoma de Buenos Aires", 
	Título: "", 
	img: "./img/Hombre_1.jpg", 
	Contacto: "hncaffarini@gmail.com" },
{ 
	id: 11,
	pid:8, 
	tags: ["partner"], 
	Nombre: "Darío Chierichetti", 
	País: "Argentina",
	Localidad: "Mar del Plata", 
	Título: "", 
	img: "./img/Hombre_1.jpg" },
]