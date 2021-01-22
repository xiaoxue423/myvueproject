<template>
  <nav>
    <router-link to="/" class="item" active-class="selected">
<!--      <Icon name="money"/>-->
      管理首页
    </router-link>

    <router-link to="/project" class="item" active-class="selected">
<!--      <Icon name="label"/>-->
      项目
    </router-link>

    <router-link to="/machine" class="item" active-class="selected">
<!--      <Icon name="statistics"/>-->
      机种
    </router-link>

    <router-link to="/personal" class="item" active-class="selected">
<!--      <Icon name="statistics"/>-->
      个人中心
    </router-link>
  </nav>
</template>

<script>
  export default {
    name: "Nav"
  }
</script>

<style scoped>
  nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: red;
  }
</style>