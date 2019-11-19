export default {
  plugins:[
    ['umi-plugin-wx',{
      debug:true,
      action:'/api/cmm/share',
      jsApiList:['updateAppMessageShareData','updateTimelineShareData']
    }]
  ],
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