import {
    getSearchData,
    getIndexData,
    getSortNavData,
    getSortListData,
    getWorthNavData,
    getWorthPoolData
} from "../api"

import {
    SAVE_SEARCHDATA,
    SAVE_INDEXDATA,
    SAVE_SORTNAVDATA,
    SAVE_SORTLISTDATA,
    SAVE_WORTHNAVDATA,
    SAVE_WORTHPOOLDATA
} from "./mutations-typs"

export default{
    async getSearchDataAction ({commit}){
        let result = await getSearchData();
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
        commit(SAVE_SORTNAVDATA,result);
    },

    async getSortListDataAction ({commit}){
        let result = await getSortListData();
        commit(SAVE_SORTLISTDATA,result);
    },

    async getWorthNavDataAction ({commit}){
        let result = await getWorthNavData();
        console.log(result);
        if(result.code === '200'){
            commit(SAVE_WORTHNAVDATA,result.data);
        }
    },

    async getWorthPoolDataAction ({commit}){
        let result = await getWorthPoolData();
        console.log(result);
        if(result.code === '200'){
            commit(SAVE_WORTHPOOLDATA,result.data);
        }
    },
}