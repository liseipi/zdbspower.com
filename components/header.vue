<template>
  <div class="header">
    <div class="zdbs_logo"><a href="../"><img src="@/assets/images/logo.png" alt=""></a></div>
    <div class="bstop_nav">
      <ul>
        <li style="background: rgb(235, 235, 235);">
          <NLink to="/" tag="a">首页</NLink>
        </li>
        <li style="background: rgb(235, 235, 235);">
          <NLink to="/about" tag="a">关于我们</NLink>
        </li>
        <li style="background: rgb(235, 235, 235);">
          <NLink to="/news" tag="a">新闻中心</NLink>
          <p style="display: none;">
            <NLink to="/news" tag="a">公司新闻</NLink>
            <NLink to="/news" tag="a">媒体报道</NLink>
          </p>
        </li>
        <li style="background: rgb(235, 235, 235);">
          <NLink to="/products" tag="a">产品目录</NLink>
        <li style="background: rgb(235, 235, 235);">
          <NLink to="/net" tag="a">营销网络</NLink>
        <li>
          <NLink to="/contact" tag="a">联系我们</NLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "header",
  mounted() {
    $(function(){
      $(".bstop_nav ul li").hover(function(){
        $(this).css("background","#d8d8d8");
        $(this).find("p").show();
      },function(){
        $(this).css("background","#ebebeb");
        $(this).find("p").hide();
      });
    })
  }
}
</script>
