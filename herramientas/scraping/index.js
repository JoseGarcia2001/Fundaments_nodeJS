const puppeteer = require('puppeteer');

(async () => {
  try {
    console.log("Iniciamos el browser");

    const browser = await puppeteer.launch({
      executablePath: "/usr/bin/chromium-browser",
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();
    await page.goto('https://es.wikipedia.org/wiki/Node.js')

    var titulo = await page.evaluate(() => {
      const h1 = document.querySelector(h1);
      console.log(h1.innerHTML);
    })
    console.log(titulo);
    browser.close();
    console.log("browser Cerrado");
  } catch (error) {
    console.log(error);
  }
})();