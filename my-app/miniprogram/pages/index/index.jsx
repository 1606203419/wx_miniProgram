<view class="container">
  
  <view class="userinfo">
    <button 
      open-type="getUserInfo" 
      bindgetuserinfo="onGetUserInfo"
      class="userinfo-avatar"
      style={`background-image: url(${avatarUrl})`}
    ></button>
    <view>
      <button class="userinfo-nickname" bindtap="onGetOpenid">点击获取 openid</button>
    </view>
  </view>

  <view class="uploader">
    <view class="uploader-text" bindtap="doUpload">
      <text>上传图片</text>
    </view>
    {imgUrl && <view class="uploader-container" >
      <image class="uploader-image" src={imgUrl} mode="aspectFit" bindtap="previewImg"></image>
    </view>}
  </view>

  <view class="uploader">
    <navigator url="../databaseGuide/databaseGuide" open-type="navigate" class="uploader-text">
      <text>前端操作数据库</text>
    </navigator>
  </view>

  <view class="uploader">
    <navigator url="../addFunction/addFunction" open-type="navigate" class="uploader-text">
      <text>快速新建云函数</text>
    </navigator>
  </view>

  <view class="uploader">
    <navigator url="../openapi/openapi" open-type="navigate" class="uploader-text">
      <text>云调用</text>
    </navigator>
  </view>

</view>
