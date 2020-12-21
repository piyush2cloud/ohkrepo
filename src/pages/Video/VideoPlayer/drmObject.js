export function getDRMWidevinePlayreadyObject (options, videojs){
    return {
      src: options.src,
      type: "application/dash+xml",
      keySystemOptions: [
            {
                name: 'com.widevine.alpha',
                options: {
                    serverURL: options.licenseUrl,
                }
            },
            {
                name: 'com.microsoft.playready',
                options: {
                    serverURL: options.licenseUrl,
                }
            }
        ]
  };
}


export function getFairPlayObject (options, videojs) {
    return {
      src: options && options.src,
      type: 'application/x-mpegURL',
      keySystems: {
          'com.apple.fps.1_0': {
              getCertificate: (emeOptions, callback) => {
                  
              },
              getContentId: (emeOptions, initData) => {
                  return options && options.completeskd;
              },
              getLicense: (emeOptions, contentId, keyMessage, callback) => {
                 
              }
          }
      }
  };
}