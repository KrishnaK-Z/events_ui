/**
 * got the documentation using the following link
 * http://usejsdoc.org/tags-param.html
 */

/**
 * To convert the data from the html to json format
 * get the form refernce by
 * get the input from all the fields using the querry selector
 * https://www.developerdrive.com/2013/04/turning-a-form-element-into-json-and-submiting-it-via-jquery/
 * https://code.lengstorf.com/get-form-values-as-json/
 */

function toJSONString( form ) {
  var obj = {};
  var elements = form.querySelectorAll( "input, select, textarea" );
  for( var i = 0; i < elements.length; ++i ) {
    var element = elements[i];
    var name = element.name;
    var value = element.value;

    if( name ) {
      obj[ name ] = value;
    }
  }

  return JSON.stringify( obj );
}

/**
 * Create an new elements
 * @param {element reference} tag to create
 */
function create(ele)
{
  return document.createElement(ele);
}

/**
 * @param {element / element}
 *parentNode, nodeToAppend
 */
function append(parent, el) {
   return parent.appendChild(el);
 }

/**
 * @params {element / string}
 */
function inner(ele, value){
  ele.innerHTML = value;
}
