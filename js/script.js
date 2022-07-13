const $toggleMenuButton = document.querySelector('.toggle-menu--button')


$toggleMenuButton.addEventListener('click', ()=>{

  document.querySelectorAll('.main-menu--icon').forEach((icon) => {
    icon.classList.toggle('active');
  })
  document.querySelector('.sidebar').classList.toggle('active')
  document.querySelector('.toggle-menu--button').classList.toggle('active')
  document.querySelector('.section').classList.toggle('active')

})

function taggedTemplates(strings, ...dynamicValues) {
  let newContent = " "
  strings.forEach((string, index) => {
    const strong = dynamicValues[index] ? `<strong>${dynamicValues[index]}</strong>` : ""
    newContent += `${string} ${strong}`
  });
  return `<p>${newContent}</p>`
}

const message = taggedTemplates`El ${"trabajo duro"} supera al ${"talento natural"}`
document.querySelector('.section').innerHTML = message