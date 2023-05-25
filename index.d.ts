declare module '*.wasm' {
    const content: ArrayBuffer;
    export default content;
  }
  
  declare namespace Module {
    function onRuntimeInitialized(): void;
    const cv: any;
  }
  
  export default Module.cv;
  