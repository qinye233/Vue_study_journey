import {ref, watch} from 'vue'
export default function useTitle (value) {
    // document.title = value

    // 定义ref的引入数据
    const title = ref(value)

    // 侦听title是否发生变化
    watch(title, (newValue) => {
        document.title = newValue
    }, {immediate: true})

    // 返回ref
    return title
}