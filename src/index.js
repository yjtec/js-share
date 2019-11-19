import { join, dirname, basename } from 'path';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import Mustache from 'mustache';
export default function(api,opts={}){
  const { config, paths } = api;
  api.onOptionChange(()=>{
    api.rebuildTmpFiles();
  });
  api.addRuntimePluginKey('wx');
  api.addRendererWrapperWithComponent(()=>{
    const wrapperTpl=readFileSync(
      join(__dirname,'../template/wrapper.jsx.tpl'),
      'utf-8'
    );
    const wrapperContent = Mustache.render(wrapperTpl,{
      ...opts
    });
    const wrapperPath = join(paths.absTmpDirPath,'./WxWrapper.jsx');
    writeFileSync(wrapperPath, wrapperContent, 'utf-8');
    return wrapperPath;
  });  
  api.modifyAFWebpackOpts(memo => {
    return {
      ...memo,
      alias:{
        ...(memo.alias || {}),
        'yjtec-wx':join(__dirname,'./wx.js'),
      }
    }
  })  
}