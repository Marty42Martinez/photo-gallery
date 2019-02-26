import './html-equal.js';

const test = QUnit.test;
QUnit.module('manipulating html by creating templates');
function makeHTMLtemplate(imgObject) {
  const template = document.createElement('template');
  const html = /*html*/`<li><h2>${imgObject.title}</h2><img src="${imgObject.url}"></li>`;
  template.innerHTML = html;
  const dom = template.content;
  return dom;
}

let imgObject = null;
QUnit.testStart(function() {
  imgObject = {
    title: 'UniWhal',
    url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg'
  };
});

test('test ability to properly create interpretable html', assert => {
  //Arrange (keep this round simple)
  const expected = '<li><h2>UniWhal</h2><img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"></li>';
 
  //Act
  const result = /*html*/`<li><h2>${imgObject.title}</h2><img src="${imgObject.url}"></li>`;

  //Assert
  assert.equal(result, expected);
});

test('testing html template creation function', assert => {
  //Arrange
  const expected = '<li><h2>UniWhal</h2><img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"></li>'; 
  
  //Act
  const result = makeHTMLtemplate(imgObject);
  //Assert
  assert.htmlEqual(result, expected);
});
