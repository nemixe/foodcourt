const container = document.querySelector("#menu")

const showFoods = async () => {
  const foods =  await fetch('https://my-json-server.typicode.com/nemixe/fakeapi/foods').then(res => res.json());

  let output = foods.reduce((totalFood, { label, image, id }) => {
      return totalFood + `
          <a href="/detail.html?food=${id}"><c-food-card label="${label}" image="${image}"></c-food-card></a>
      `
  }, '')
  container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showFoods)
