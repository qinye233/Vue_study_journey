import { defineStore } from "pinia"

const useUser = defineStore("user", {
    state() {
        return {
            name: "quirkybird",
            age: 20,
        }
    }
})

export default useUser