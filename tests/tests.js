import './html-equal.js';

const test = QUnit.test;
QUnit.module('manipulating html by creating templates');

test('test ability to properly create interpretable html', assert => {
  //Arrange (keep this round simple)
  const expected = '<li><h2>UniWhal</h2><img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"></li>';
  const imgObject = {
    title: 'UniWhal',
    url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg'
  };
  //Act
  const result = `<li><h2>${imgObject.title}</h2><img src="${imgObject.url}"></li>`;

  //Assert
  assert.equal(result, expected);
});
