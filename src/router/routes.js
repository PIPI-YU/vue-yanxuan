// 路由可以用路由懒加载，性能高

import Home from "../pages/Home/Home.vue"
import Sort from "../pages/Sort/Sort.vue"
import Worth from "../pages/Worth/Worth.vue"
import Cart from "../pages/Cart/Cart.vue"
import Personal from "../pages/Personal/Personal.vue"
import Search from "../pages/Search/Search.vue"

import List from "../pages/Sort/List/List.vue"

export default [
    {
        path:"/home",
        component:Home
    },
    {
        path:"/sort",
        component:Sort,
        children:[
            {
                path:"/sort/list/:id",
                component:List
            }
        ]
    },
    {
        path:"/worth",
        component:Worth
    },
    {
        path:"/cart",
        component:Cart
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
        path:"/",
        redirect:"/sort"
    }
]