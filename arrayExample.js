// 篩選不重複陣列內的值

const list = [1, 2, 3, 4, 5, 5, 5]
const listFilter = list.filter((item, index)=> list.indexOf(item) === index);