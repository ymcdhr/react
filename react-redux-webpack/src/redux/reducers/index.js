/**
 * reducers的作用
 * 1、定义初始数据
 * 2、定义执行动作，返回新的数据
 */


import { combineReducers } from 'redux'
import addedList from './addShoppingCart'
import productList from './filterProducts'

const reducers = combineReducers({
    addedList,
    productList
});

export default reducers;