import { defineStore } from "pinia"

import useUser from "./user"
const useCounter = defineStore("counter", {
    state() {
        return {
            counter: 100,
            friends: [
                {id: 101, name: "quirkybird"},
                {id: 102, name: "qinye233"},
                {id: 103, name: "duaiduaix"},
            ]
        }
    },
    getters: {
        // 1.对原数据做一个修改
        squareCounter(state) {
            return state.counter * state.counter
        },
        // 2.使用另外一个getter
        squareCounterAddOne() {
            // this -> useCounter
            return this.squareCounter + 1
        },
        // 3.可以返回一个函数
        findFrirendName(state) {
            return function(id) {
                for(let i = 0; i < state.friends.length; i++) {
                     const friend = state.friends[i]
                     if(friend.id === id) {
                        return friend.name
                     }
                } 
            }
        },
        // getter中用到别的store中的数据（在defineStore外先获取到目标store）
        foo(state) {
            const userStore = useUser()
            return `${state.counter} --- ${userStore.name}`
        }
    },
    actions: {
        increment() {
            this.counter++
        }
    }
})

export default useCounter