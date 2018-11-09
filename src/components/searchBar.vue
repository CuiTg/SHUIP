<template>
 <div id='searchBar'>
    <h3 id='searchMenu'>筛选菜单</h3>
   <form class="form-horizontal">
        <div class="form-group">
            <label for="college" class="col-sm-3 control-label text-left">学&nbsp;&nbsp;&nbsp;&nbsp;院</label>
            <div class="col-sm-9">
            <input type="text" class="form-control" id="college" placeholder="college">
            </div>
        </div>
        <div class="form-group">
            <label for="grade" class="col-sm-3 control-label">年&nbsp;&nbsp;&nbsp;&nbsp;级</label>
            <div class="col-sm-9">
            <input type="text" class="form-control" id="grade" placeholder="grade">
            </div>
        </div>
         <div class="form-group">
            <label for="discipline" class="col-sm-3 control-label">专&nbsp;&nbsp;&nbsp;&nbsp;业</label>
            <div class="col-sm-9">
            <input type="text" class="form-control" id="discipline" placeholder="discipline">
            </div>
        </div>
        <div class="form-group">
            <div class='col-sm-4'>
                <input type="checkbox" name='year' value='1'>&nbsp;&nbsp;年度一
            </div>
            <div class='col-sm-4'>
                <input type="checkbox" name='year' value='2'>&nbsp;&nbsp;年度二
            </div>
            <div class='col-sm-4'>
                <input type="checkbox" name='year' value='3'>&nbsp;&nbsp;年度三
            </div>   
        </div>
        <div class="form-group">
            <label for="start" class="col-sm-3 control-label">起始时间</label>
            <div class="col-sm-9">
            <input type="date" class="form-control" id="start" >
            </div>
        </div>
        <div class="form-group">
            <label for="end" class="col-sm-3 control-label">结束时间</label>
            <div class="col-sm-9">
            <input type="date" class="form-control" id="end" placeholder="结束时间">
            </div>
        </div>
  </form>
   <button class='btn btn-info' @click='search' >筛&nbsp;&nbsp;&nbsp;选</button>
 </div>
</template>

<script>
 export default {
   data () {
     return {
         formData:'searchBar data'
     }
   },
   methods:{
     search(){
       this.$emit('search',this.formData);
     }
   }
 }
</script>

<style lang='less' scoped>
  #searchBar{
    height: 100vh;
    background-color: #fff;
    width: 500px;
    position: fixed;
    right: 0;
    top: 0;
    bottom:0;
    padding: 0 30px;
    z-index: 9999999;
    #searchMenu{
        height: 50px;
        line-height: 50px;
        text-align: center;
        margin-top: 20px;
        color:#00B1DD;
    }
    form{
      padding: 50px 30px;
      .form-group{
          margin-bottom: 35px;
          font-weight: bold;
          font-size: 15px;
      }
    }
    button{
      display: block;
      width: 65%;
      margin: 0 auto;
    }
  }
 
</style>