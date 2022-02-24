// 篩選不重複陣列內的值

const list = [1, 2, 3, 4, 5, 5, 5]
const listFilter = list.filter((item, index)=> list.indexOf(item) === index);

// 由大至小排序

const list2 = [14, 4, 33, 57, 100];
const list2Filter = list2.sort((firEle, secEle)=>{
    if(secEle > firEle) {
        return 1
    }else if(secEle < firEle){
        return -1
    }else {
        return 0
    }

});

// 由小至大排序
const list3 = [144, 4, 33, 527, 100];
const list3Filter = list3.sort((firEle, secEle)=>{
    if(secEle > firEle) {
        return -1
    }else if(secEle < firEle){
        return 1
    }else {
        return 0
    }

});

// 在陣列的最後一筆新增資料
const list4 = ['今天', '是', '大年'];
list4.push('初二');
console.log(list4);

// 移除陣列最後一筆資料
list4.pop();
console.log(list4);

// 在陣列的第一筆新增資料
list4.unshift('Hi,');
console.log(list4);

// 移除陣列第一筆資料
list4.shift('Hi,');
console.log(list4);

// 回傳指定元素在陣列中的 index
const targetIndex = list4.indexOf('今天');
console.log(targetIndex);

// 判斷指定陣列中是否有指定的元素，回傳值為布林
const isTarget= list4.includes('今天');
console.log(isTarget);

// 刪除陣列中的根據某個條件指定資料
const list5 = [1, 3, 5, 7,8, 9, 10];
const list5Filter = list5.filter((item)=> item%2 !==0);
console.log(list5Filter);