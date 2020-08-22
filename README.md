# CommentsApp

主要分为Input（输入新的评论）、Fiter（输入筛选条件）、List（展示评论列表）和Detail（评论详情）四大功能块。

APP组件：包含所有的评论数据、路由、和新增修改删除函数
Input组件：用state存储新增的评论数据（含：姓名、内容、性别、爱好），Onclick时通过调用App组件的handleAdd将新的comment数据（此时加上date数值）传递给app。
          提交后跳转Newcomment组件（由Detail组件+标题组成）。
          
List组件：在WillMount时，调用App的filterComments函数，将要渲染数据的用Comment组件一项项展示出来。

Comment组件：Link去往Detail组件，那么与input后去往的detail组件的数据应该要不一致。用App的state存储current数据修改实现。
