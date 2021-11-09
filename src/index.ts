GM_addStyle(require('./styles/monkey.scss'))
// GM_log(GM_addStyle, require('./styles/style.scss'))

const classNameCompatibilityList = ['browser_compatibility', '浏览器兼容性']

const createLink = require('./button.ts')
;(function () {
  const reg =
    /[\u4e00-\u9fa5\(\)\:\u3002\uff1f\uff01\uff0c\u3001\uff1b\uff1a\u201c\u201d\u2018\u2019\uff08\uff09\u300a\u300b\u3008\u3009\u3010\u3011\u300e\u300f\u300c\u300d\ufe43\ufe44\u3014\u3015\u2026\u2014\uff5e\ufe4f\uffe5]/g

  const title = document.querySelector('.main-page-content')
  const keyword = title.querySelector('h1').innerText.replace(reg, '')

  let compatibilityDom: Element

  for (let i = 0; i < classNameCompatibilityList.length; i++) {
    compatibilityDom = document.querySelector(`h2#${classNameCompatibilityList[i]}`)
    if (compatibilityDom) {
      break
    }
  }

  const link = createLink(keyword)
  if (compatibilityDom) {
    compatibilityDom.append(link)
  } else {
    title.prepend(link)
  }
})()
