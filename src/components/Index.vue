<template>
  <div class="main">
    <div class="content">

    </div>
    <div class="tab_bar">
      <div class="tab_item">
        首页
      </div>
      <div class="tab_item">
        首页
      </div>
      <div class="tab_item">
        首页
      </div>

      <div class="tab_item">
        首页
      </div>

    </div>
  </div>
</template>
<script>
  export default {
    name: 'index',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        message: 'You loaded this page on ' + new Date()
      }
    }
  }
</script>
<style>
  .main {
    width: 100%;
    height: 100%;
  }

  .tab_bar {
    display: -webkit-flex; /* Safari */
    display: flex;
    /*主轴方向*/
    -webkit-flex-direction: row; /* Safari */
    flex-direction: row;
    -webkit-flex-wrap: wrap; /* Safari */
    flex-wrap: wrap;
    width: 100%;
    margin: 0 auto;
  }

  .tab_item {
    flex: 0 0 25%;
  }
</style>
