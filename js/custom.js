var northDir = 247.5;
pannellum.viewer('panorama', {
    "default": {
        "firstScene": "circle",
        "sceneFadeDuration": 1000
    },

    "scenes": {
        "circle": {
            "title": "Innovation Zone",
            "hfov": 110,
            "pitch": -3,
            "yaw": 1,
            "type": "equirectangular",
            "panorama": "images/3.jpg",
            "autoLoad": true,
            "autoRotate": 1.5,
            "compass": true,
            "northOffset": northDir,
            /*
             * Uncomment the next line to print the coordinates of mouse clicks
             * to the browser's developer console, which makes it much easier
             * to figure out where to place hot spots. Always remove it when
             * finished, though.
             */
            //"hotSpotDebug": true,
            "hotSpots": [
                {
                    "pitch": 1.1,
                    "yaw": 35,
                    "type": "info",
                    "text": "Information center",
        //            "URL": "https://artbma.org/"
                },
                {
                    "pitch": -4.4,
                    "yaw": -32,
                    "type": "info",
                    "text": "Agenda"
                },
                {
                    "pitch": -7.9,
                    "yaw": -85,
                    "type": "info",
                    "text": "See More"
                },
                {
                    "pitch": -2.1,
                    "yaw": -62,
                    "type": "scene",
                    "text": "Go Here",
                    "sceneId": "house"
                },
                {
                    "pitch": 2,
                    "yaw": -95,
                    "type": "scene",
                    "text": "Go Here",
                    "sceneId": "house2"
                }
            ]
        },

        "house": {
            "title": "LiDAR & RADAR",
            "hfov": 110,
            "pitch": -3,
            "yaw": 105,
            "type": "equirectangular",
            "panorama": "/images/1.jpg",
            "autoLoad": true,
            "autoRotate": 1.5,
            "compass": true,
            "northOffset": northDir,
            "hotSpots": [
                {
                    "pitch": -0.6,
                    "yaw": 107.1,
                    "type": "scene",
                    "text": "Go Back",
                    "sceneId": "circle",
                    "targetYaw": -23,
                    "targetPitch": 2
                },
                {
                    "pitch": 2,
                    "yaw": -142,
                    "type": "scene",
                    "text": "Go Here",
                    "sceneId": "house2"
                },
                {
                    "pitch": -2.9,
                    "yaw": -15,
                    "type": "info",
                    "text": "See More"
                },
            ]
        },
        "house2": {
            "title": "Power Train",
            "hfov": 110,
            "pitch": -3,
            "yaw": 40,
            "type": "equirectangular",
            "panorama": "/images/2.jpg",
            "autoLoad": true,
            "autoRotate": 1.2,
            "compass": true,
            "northOffset": northDir,
            "hotSpots": [
                {
                    "pitch": -0.6,
                    "yaw": 91.1,
                    "type": "scene",
                    "text": "Go Back",
                    "sceneId": "circle",
                    "targetYaw": -23,
                    "targetPitch": 2
                },
                {
                    "pitch": 2,
                    "yaw": 35,
                    "type": "scene",
                    "text": "Go Here",
                    "sceneId": "house"
                },
                {
                    "pitch": -2.9,
                    "yaw": -1.6,
                    "type": "info",
                    "text": "See More"
                },
                {
                    "pitch": -2.9,
                    "yaw": 65.6,
                    "type": "info",
                    "text": "See More"
                },
                {
                    "pitch": -2.9,
                    "yaw": -75.6,
                    "type": "info",
                    "text": "See More"
                },
            ]
        }
    }
    
});