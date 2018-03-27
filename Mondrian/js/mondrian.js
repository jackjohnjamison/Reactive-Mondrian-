////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   //   Scripts for mondrian.html 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////
    //  Border Width Function
///////////////////////////////////////////////////////////

function update_border_width() {
    
    var borderBoxElements = document.getElementsByClassName('border-box');
    
    var arrayLength = borderBoxElements.length;
    
    var widthValue = document.getElementById('border-width-slider').value + "px";
    
    for (var i = 0; i < arrayLength; i++) {
        borderBoxElements[i].style.borderWidth = widthValue;
        }
    
    document.getElementById('border-width-output').innerHTML = widthValue;
}


///////////////////////////////////////////////////////////
    //  Border Radius Functions
///////////////////////////////////////////////////////////

// By Percentage

function update_border_radius_percentage() {
    
    var borderBoxElements = document.getElementsByClassName('border-box');
    
    var arrayLength = borderBoxElements.length;
    
    var radiusValue = document.getElementById('border-radius-slider-percentage').value + "%";
    
    var includeCanvas = document.getElementById('include-canvas').checked;
    
    if (includeCanvas) { document.getElementById('mondrian-canvas').style.borderRadius = radiusValue; };
    
    for (var i = 0; i < arrayLength; i++) {
        borderBoxElements[i].style.borderRadius = radiusValue;
        }
    
    document.getElementById('radius-percentage-output').innerHTML = radiusValue;
    
    document.getElementById('radius-px-output').innerHTML = "by px";
    
    document.getElementById('border-radius-slider-px').value = 0;
}

// By Pixel

function update_border_radius_px() {
    
    var borderBoxElements = document.getElementsByClassName('border-box');
    
    var arrayLength = borderBoxElements.length;
    
    var radiusValue = document.getElementById('border-radius-slider-px').value +"px";
    
    var includeCanvas = document.getElementById('include-canvas').checked;
    
    if (includeCanvas) { document.getElementById('mondrian-canvas').style.borderRadius = radiusValue; };
    
    for (var i = 0; i < arrayLength; i++) {
        borderBoxElements[i].style.borderRadius = radiusValue;
        }
    
    document.getElementById('radius-px-output').innerHTML = radiusValue;
    
    document.getElementById('radius-percentage-output').innerHTML = "by %";
    
    document.getElementById('border-radius-slider-percentage').value = 0;
}