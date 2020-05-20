pannellum.viewer('panorama', {
    "default": {
        "firstScene": "circle",
        "sceneFadeDuration": 1000
    },

    "scenes": {
        "circle": {
            "title": "Mason Circle",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "images/98331060_240224720755374_3763016814498414592_n.jpg",
            "autoLoad": true,
            "autoRotate": -2,
            "compass": true,
            "northOffset": 247.5,
            /*
             * Uncomment the next line to print the coordinates of mouse clicks
             * to the browser's developer console, which makes it much easier
             * to figure out where to place hot spots. Always remove it when
             * finished, though.
             */
            //"hotSpotDebug": true,
            "hotSpots": [
                {
                    "pitch": 14.1,
                    "yaw": 1.5,
                    "type": "info",
                    "text": "Baltimore Museum of Art",
        //            "URL": "https://artbma.org/"
                },
                {
                    "pitch": -9.4,
                    "yaw": 222.6,
                    "type": "info",
                    "text": "Art Museum Drive"
                },
                {
                    "pitch": -0.9,
                    "yaw": 144.4,
                    "type": "info",
                    "text": "North Charles Street"
                },
                {
                    "pitch": -2.1,
                    "yaw": 87,
                    "type": "scene",
                    "text": "Spring House or Dairy",
                    "sceneId": "house"
                }
            ]
        },

        "house": {
            "title": "Spring House or Dairy",
            "hfov": 110,
            "yaw": 5,
            "type": "equirectangular",
            "panorama": "/images/bma-1.jpg",
            "hotSpots": [
                {
                    "pitch": -0.6,
                    "yaw": 37.1,
                    "type": "scene",
                    "text": "Mason Circle",
                    "sceneId": "circle",
                    "targetYaw": -23,
                    "targetPitch": 2
                }
            ]
        }
    }
    
});