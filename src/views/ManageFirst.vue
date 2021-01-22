<template>
  <Layout>
    <div class="quick">管理首页</div>
    <div class="select">查看项目</div>
    <div class="lists">项目列表</div>
  </Layout>
</template>

<script>
export default {
name: "ManageFirst"
}
</script>

<style scoped>
.quick {
  height: 30vh;
  border: 1px solid black;
}
.select{
  height: 30vh;
  border: 1px solid red;
}
.lists {
  height: 30vh;
  border: 1px solid blue;
}

</style>