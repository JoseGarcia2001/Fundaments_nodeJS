console.log("inicia el app");

const seRompe = () => {
  setTimeout(() => {
    try {
        z + 3;
    } catch (error) {
      console.error(error.message);
    }
  }, 1000)
};

seRompe()

console.log("Termina el app");