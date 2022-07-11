class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    (this.nombre = nombre),
      (this.apellido = apellido),
      (this.libros = libros),
      (this.mascotas = mascotas);
  }

  getFullName() {
    console.log(`${this.nombre} ${this.apellido}`);
  }

  addMascota(nombreMascota) {
    this.mascotas.push(nombreMascota);
  }

  countMascotas() {
    console.log(this.mascotas.length);
  }

  addBook(nombre, autor) {
    this.libros.push({ nombre, autor });
  }

  getBookNames() {
    let titles = [];
    this.libros.forEach((i) => titles.push(i.nombre));
    console.log(titles);
  }
}

let usuario = new Usuario(
  "Sabrina",
  "Rapa",
  [
    { nombre: "Harry Potter", autor: "J. K. Rowling" },
    { nombre: "EL señor de los anillos", autor: "Tolkien" },
  ],
  ["Galo", "Cronos", "Lorenzo"]
);

console.log(usuario);

usuario.getFullName();
usuario.addMascota("Roco");
usuario.countMascotas();
usuario.addBook("Distancia de rescate", "Samanta Schweblin");
usuario.getBookNames();
