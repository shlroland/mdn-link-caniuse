function createLink(keyword: string) {
  const img = require('./favicon-128.png')
  const link = document.createElement('a')
  link.classList.add('linkBtn')
  link.innerHTML = `<img src="${img}"> </img>`

  link.href = `https://caniuse.com/?search=${keyword}`
  link.target = '_blank'

  return link
}

export = createLink
