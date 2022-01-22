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