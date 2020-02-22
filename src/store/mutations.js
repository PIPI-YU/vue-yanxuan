import {
    SAVE_SEARCHDATA,
    SAVE_INDEXDATA,
    SAVE_SORTNAVDATA,
    SAVE_SORTLISTDATA,
    SAVE_WORTHNAVDATA,
    SAVE_WORTHPOOLDATA
} from "./mutations-typs"

export default{
    [SAVE_SEARCHDATA] (state,searchData){
        state.searchData = searchData
    },

    [SAVE_INDEXDATA] (state,indexData){
        state.indexData = indexData
    },

    [SAVE_SORTNAVDATA] (state,sortNavData){
        state.sortNavData = sortNavData
    },

    [SAVE_SORTLISTDATA] (state,sortListData){
        state.sortListData = sortListData
    },

    [SAVE_WORTHNAVDATA] (state,worthNavData){
        state.worthNavData = worthNavData
    },

    [SAVE_WORTHPOOLDATA] (state,worthPoolData){
        state.worthPoolData = worthPoolData
    }
}