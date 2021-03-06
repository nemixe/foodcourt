const container = document.querySelector("#detail")

const showFoodDetail = async () => {
  const urlParams = new URLSearchParams(window.location.search);

  const food =  await fetch(`https://my-json-server.typicode.com/nemixe/fakeapi/foods/${urlParams.get('food')}`).then(res => res.json());

  const { label, image, description } = food
  let output = `
    <div class="col-span-2">
      <div class="overflow-hidden rounded-lg h-full bg-pink-400 transition ease-in-out hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105">
        <img src="${image}" alt="${label}" class="w-full h-full object-contain" />
      </div>
    </div>
    <div class="col-span-2 flex flex-col justify-between p-4">
      <div>
        <div class="text-2xl font-bold mb-4">
          ${label}
        </div>
        <div class="leading-6">
          ${description}
        </div>
      </div>
      <div class="w-full lg:text-right py-6">
        <a href="/" class="font-bold">
          back
        </a>
      </div>
    </div>
  `
  container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showFoodDetail)
