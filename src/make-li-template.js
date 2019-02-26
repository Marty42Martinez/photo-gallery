function makeLiTemplate(imgObject) {
  const template = document.createElement('template');
  const html = /*html*/`<li><h2>${imgObject.title}</h2><img src="${imgObject.url}"></li>`;
  template.innerHTML = html;
  const dom = template.content;
  return dom;
}
export default makeLiTemplate;