/**
 * Created by HX-MG01 on 2017/1/6.
 */
import Hello from './components/Hello'
import Index from './components/Index'
// 编写路由集合
const routes = [
  {
    name: 'Hello', // 路由名，这个字段是可选的
    path: '/', // 路由路径，这里是根路径所以是'/'
    component: Hello // 模板
  }, // 这些是常用的
  {
    name: 'Index',
    path: '/index',
    component: Index
  }
]
// 导出路由集合
export default routes
