// 路由可以用路由懒加载，性能高

import Home from "../pages/Home/Home.vue"
import Sort from "../pages/Sort/Sort.vue"
import Worth from "../pages/Worth/Worth.vue"
import Cart from "../pages/Cart/Cart.vue"
import Personal from "../pages/Personal/Personal.vue"
import Search from "../pages/Search/Search.vue"
import LoginPhone from "../pages/Login/LoginPhone.vue"
import LoginEmail from "../pages/Login/LoginEmail.vue"

import List from "../pages/Sort/List/List.vue"

export default [
    {
        path:"/home",
        component:Home,
        meta:{
            isShowFoot:true
        }
    },
    {
        path:"/sort",
        component:Sort,
        meta:{
            isShowFoot:true
        },
        children:[
            {
                path:"/sort/list/:id",
                component:List,
                meta:{
                    isShowFoot:true
                }
            }
        ]
    },
    {
        path:"/worth",
        component:Worth,
        meta:{
            isShowFoot:true
        }
    },
    {
        path:"/cart",
        component:Cart,
        meta:{
            isShowFoot:true
        }
    },
    {
        path:"/personal",
        component:Personal
    },
    {
        path:"/search",
        component:Search
    },
    {
        path:"/loginphone",
        component:LoginPhone
    },
    {
        path:"/loginemail",
        component:LoginEmail
    },
    {
        path:"/",
        redirect:"/personal"
    }
]