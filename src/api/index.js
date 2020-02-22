import ajax from "./ajax"

//网易搜索界面接口
export const getSearchData = ()=>ajax({
    method:"POST",
    url:"/foo/xhr/search/init.json"
})

//值得买nav接口
export const getWorthNavData = ()=>ajax({
    url:"/foo/topic/v1/know/navWap.json"
})

//值得买瀑布流接口
export const getWorthPoolData = ()=>ajax({
    url:"/foo/topic/v1/find/recManual.json"
})

//----------------------------------------

//主页数据接口
export const getIndexData = ()=>ajax({
    url:"/api/getIndexData"
})

//分类界面左侧
export const getSortNavData = ()=>ajax({
    url:"/api/getSortNavData"
})

//分类界面右侧
export const getSortListData = ()=>ajax({
    url:"/api/getSortListData"
})