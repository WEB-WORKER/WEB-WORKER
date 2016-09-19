$(document).ready(function(){
    createMap();
}); // -> ready_end;

function createMap() {
    ymaps.ready(init);
    var myMap;

    function init(){     
        myMap = new ymaps.Map("map", {
            center: [59.92, 30.31],
            zoom: 16,
            controls : []
        });

         myPlacemark = new ymaps.Placemark([59.92143925796709, 30.308313499999908],
          { hintContent: 'Питер!', 
          balloonContent: 'Вторая Столица России!' },
          {
            iconLayout: 'default#image',
            iconImageHref: 'img/elements/marker.png',
            iconImageSize: [42, 59],
            iconImageOffset: [-15, -110]
        });

         myMap.geoObjects.add(myPlacemark);


         myMap.behaviors.disable('scrollZoom');

         // коллекции
        // var myCollection = new ymaps.GeoObjectCollection({}, {
        //     iconLayout: 'default#image',
        //     iconImageHref: '/img/elements/marker.png',
        //     iconImageSize: [42, 59],
        //     iconImageOffset: [-5, -10]
        // });
        
        // for (var i = 0; i < coords.length; i++) {
        //     myCollection.add(new ymaps.Placemark(coords[i]));
        // }
        // var myPlacemark = new ymaps.Placemark(
        //     [59.92143925796709,30.308313499999908]],
        //     {
        //         hintContent: 'Питер!',
        //         balloonContent: 'Вторая столица!'
        //     },{
        //         iconLayout: 'default#image',
        //         iconImageHref: '/img/marker.png',
        //         iconImageSize: [42, 59],
        //         iconImageOffset: [-5, -10]
        //     });
    }
}

