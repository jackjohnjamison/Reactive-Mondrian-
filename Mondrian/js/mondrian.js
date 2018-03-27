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
    
    if (includeCanvas) { document.getElementsByClassName('canvas')[0].style.borderRadius = radiusValue; };
    
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
    
    if (includeCanvas) { document.getElementsByClassName('canvas')[0].style.borderRadius = radiusValue; };
    
    for (var i = 0; i < arrayLength; i++) {
        borderBoxElements[i].style.borderRadius = radiusValue;
        }
    
    document.getElementById('radius-px-output').innerHTML = radiusValue;
    
    document.getElementById('radius-percentage-output').innerHTML = "by %";
    
    document.getElementById('border-radius-slider-percentage').value = 0;
}


///////////////////////////////////////////////////////////
    //  Box Shadow Functions
///////////////////////////////////////////////////////////

// Apply Shadow

var boxShadows = {
                
                shadow : function() {
                    var targetClass = document.getElementById('shadowSelect').value;
                    
                    if (targetClass === "") {
                        alert("Select box shadow type");
                        return;
                    };
                    
                    var inset = "";
                    
                    if (targetClass === "border-box") {
                        inset = "inset ";
                    }
                    
                    var xOffset = document.getElementById('offset-x').value + "px ";
                    
                    var yOffset = document.getElementById('offset-y').value + "px ";
                    
                    var blurRadius = document.getElementById('blur-radius').value + "px ";
                    
                    var spreadRadius = document.getElementById('spread-radius').value + "px ";
                    
                    var classArray = document.getElementsByClassName(targetClass);
                    
                    var arrayLength = classArray.length;
                    
                    for (var i = 0; i < arrayLength; i++) {
                        classArray[i].style.boxShadow = inset + xOffset + yOffset + blurRadius + spreadRadius;
                    }
                    
                },
    
                reset : function() {
                    
                    document.getElementById('offset-x').value = 0;
                    
                    document.getElementById('offset-y').value = 0;
                    
                    document.getElementById('blur-radius').value = 0;
                    
                    document.getElementById('spread-radius').value = 0;
                    
                    var targetClass = document.getElementById('shadowSelect').value;
                    
                    var classArray = document.getElementsByClassName(targetClass);
                    
                    var arrayLength = classArray.length;
                    
                    for (var i = 0; i < arrayLength; i++) {
                        classArray[i].style.boxShadow = "";
                    }
            }
            };






