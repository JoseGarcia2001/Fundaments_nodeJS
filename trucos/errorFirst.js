const asincrona = (cb) => {
  setTimeout(() => {
   try {
      let i = z + 3
      cb(null, i)
   } catch (error) {
      cb(error, null)
    }
  }, 1000)
};

asincrona((error, data) => {
  if(error) {
    console.error('Tenemos un error');
    console.error(error.message);
    return
  }

  console.log(data);
});

const sincrona = (cb) => {
  try {
    let message = 'listo el llopo' + i ;
    cb(null, message)
  } catch (error) {
    console.log('ups');
    cb(error, null)
  }
};

try {
  sincrona((err, data) => {
    if (err) {
      throw err;
    }
    console.log(data);
  });
} catch (error) {
  console.log(error.message);
}
