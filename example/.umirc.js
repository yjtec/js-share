export default {
  plugins:[
    ['umi-plugin-wx',{
      debug:true,
      action:'/api/cmm/share',
      jsApiList:['updateAppMessageShareData','updateTimelineShareData','getLocation']
    }]
  ],
  routes:[{
    path:'/',
    routes:[{
      path:'/',redirect:'/home/index'
    },{
      path:'/home/index',
      component:'./index'
    },{
      path:'/test',
      component:'./test'
    }]
  }],
  proxy: {
    '/api':{
      target: 'http://dev.gateway.360vrsh.com/api/',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      },
    }
  }
}