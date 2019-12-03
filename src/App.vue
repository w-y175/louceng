<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
*{
  padding:0;
  margin: 0;
  list-style: none;
  box-sizing: border-box; 
}
#app,html,body{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
html{
  font-size: calc(100vw/750*100);
}
body{
  font-size: .32rem;
}

</style>
