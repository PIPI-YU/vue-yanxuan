import {
    getSearchData,
    getIndexData,
    getSortNavData,
    getSortListData
} from "../api"

import {
    SAVE_SEARCHDATA,
    SAVE_INDEXDATA,
    SAVE_SORTNAVDATA,
    SAVE_SORTLISTDATA
} from "./mutations-typs"

export default{
    async getSearchDataAction ({commit}){
        let result = await getSearchData();
        console.log(result)
        if(result.code === '200'){
            commit(SAVE_SEARCHDATA,result.data)
        }
    },

    async getIndexDataAction ({commit},fn){
        let result = await getIndexData();
        console.log(result);
        commit(SAVE_INDEXDATA,result);
        fn();
    },

    async getSortNavDataAction ({commit}){
        let result = await getSortNavData();
        console.log(result);
        commit(SAVE_SORTNAVDATA,result);
    },

    async getSortListDataAction ({commit}){
        let result = await getSortListData();
        console.log(result);
        commit(SAVE_SORTLISTDATA,result);
    },
}