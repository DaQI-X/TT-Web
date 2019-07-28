<template>
  <div id="app">
    <p>App父组件</p>
    <p>{{this.$store.state.count}}</p>
    <router-view>
      <home></home>
    </router-view>
  </div>
</template>

<style lang="less">

</style>
