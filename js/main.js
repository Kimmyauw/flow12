
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('happy birthday, sayang! semoga hari-hari kamu kedepannya selalu dipenuhi kebahagiaan yaa, semoga banyak hal-hal baik yang selalu datang ke kamu tanpa henti. thank u for all ur kindness be, u deserve a life as beautiful as u are 🤍').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};
