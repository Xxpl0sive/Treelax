if(window.isBanter){

  async function somerandomStartCrap() {
    const waitingForUnity = async () => { while (!chatscene.unityLoaded) { await new Promise(resolve => setTimeout(resolve, 500)); } };
    await waitingForUnity(); console.log("SCRIPT: Unity-Loaded");
    setTimeout(() => { drawingTools(); }, 1000);
  };

  async function drawingTools() {
      const kitDrawWindows = "https://chat-space.firer.at/DrawTools/kitbundle_standalonewindows.banter";
      const kitDrawAndroid = "https://chat-space.firer.at/DrawTools/kitbundle_android.banter";
      const drawToolsObject = await new BS.GameObject("MyDrawTools");
      const kitDrawBundle = await drawToolsObject.AddComponent(new BS.BanterAssetBundle(kitDrawWindows, null, null, kitDrawAndroid));
      setTimeout(async () => {
        const drawToolItemPath = "assets/_prefabs/drawgadget/drawtool.prefab";
        const drawToolGameObject = await new BS.GameObject("MyKitItem");
        const drawToolItem = await drawToolGameObject.AddComponent(new BS.BanterKitItem(drawToolItemPath));
        const drawToolGameObjectTransform = await drawToolGameObject.AddComponent(new BS.Transform());
        setTimeout(async () => {
          drawToolGameObjectTransform.position = new BS.Vector3(-1,1,-2);
          drawToolGameObjectTransform.eulerAngles = new BS.Vector3(0,0,0);
        }, 500);
      }, 1000);
    };
  
  somerandomStartCrap();
  
};
