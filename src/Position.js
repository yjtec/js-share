export async function getPosition(){
  const re = await wxGetPostion();
  return re;
}

function wxGetPostion(){
  return new Promise((resolve,reject) => {
    wx.ready(function(){
      wx.getLocation({
        type: 'wgs84',
        success:function(re){
          resolve({
            lng:re.longitude,
            lat:re.latitude
          });
        }
      })
    })
    
  })
}