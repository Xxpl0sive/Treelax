// Check if the `window.isBanter` flag is set to true, indicating that the Banter environment is active
if (window.isBanter) {

  // Define an asynchronous function to handle initial setup
  async function somerandomStartCrap() {
    // Define a helper function to wait for Unity to fully load
    const waitingForUnity = async () => {
      // Loop until Unity is fully loaded
      while (!BS.BanterScene.GetInstance().unityLoaded) {
        // Wait for 500 milliseconds before checking again
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    };
    // Wait for the Unity loading process to complete
    await waitingForUnity();
    console.log("SCRIPT: Unity-Loaded");

    // Once Unity is loaded, initialize the drawing tools after a delay of 1 second
    setTimeout(() => { drawingTools(); }, 1000);
  };

  // Define an asynchronous function to set up and initialize drawing tools
  async function drawingTools() {
    // Define URLs for the drawing tool bundle for Windows and Android platforms
    const kitDrawWindows = "https://chat-space.firer.at/DrawTools/kitbundle_standalonewindows.banter";
    const kitDrawAndroid = "https://chat-space.firer.at/DrawTools/kitbundle_android.banter";

    // Create a new GameObject to hold the drawing tools
    const drawToolsObject = await new BS.GameObject("MyDrawTools");

    // Add an asset bundle component to the GameObject, using platform-specific URLs
    const kitDrawBundle = await drawToolsObject.AddComponent(
      new BS.BanterAssetBundle(kitDrawWindows, null, null, kitDrawAndroid, null, null, false)
    );

    // After 1 second, proceed to load and configure the drawing tool item
    setTimeout(async () => {
      // Define the path to the prefab file for the drawing tool
      const drawToolItemPath = "assets/_prefabs/drawgadget/drawtool.prefab";

      // Create a new GameObject for the drawing tool item
      const drawToolGameObject = await new BS.GameObject("MyKitItem");

      // Add the prefab component to the drawing tool GameObject
      const drawToolItem = await drawToolGameObject.AddComponent(
        new BS.BanterKitItem(drawToolItemPath)
      );

      // Add a Transform component to manipulate the position and rotation of the GameObject
      const drawToolGameObjectTransform = await drawToolGameObject.AddComponent(new BS.Transform());

      // After a delay, configure the position and rotation of the drawing tool
      setTimeout(async () => {
        // Set the position of the drawing tool in 3D space
        drawToolGameObjectTransform.position = new BS.Vector3(-1, 1, -2);

        // Set the rotation of the drawing tool (Euler angles)
        drawToolGameObjectTransform.eulerAngles = new BS.Vector3(0, 0, 0);
      }, 500);
    }, 2000);
  };

  // Call the `somerandomStartCrap` function to begin the initialization process
  somerandomStartCrap();
};
