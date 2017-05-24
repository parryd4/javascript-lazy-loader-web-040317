"use strict";

// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";
var counter = 1

function formatCars(carsJSON) {
  // <div class="row">
  //   <div class="col-md-4 car">
    //   <h2>Chevrolet</h2>
    //   <p><strong>Model:</strong> Tahoe</p>
    //   <p><strong>Year:</strong> 2012</p>
    // </div>
  var carsString = `<div class="row">`
  carsJSON.forEach(function(car){
  //  debugger
    carsString += `<div class="col-md-4 car">
                      <h2>${car.Make}</h2>
                      <p><strong>Model:</strong> ${car.Model}</p>
                      <p><strong>Year:</strong> ${car.Year}</p>
                    </div>`
  })
  carsString += `</div>`

  $('#cars').append(carsString)
  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a
  // div with a class "row"
  //debugger
}

function addCarsToDOM(carsJSON) {
  // this function should pass carsJSON to formatCars() and then
  // add the resulting HTML to the div with an id of "cars"
  const toHtml = formatCars(carsJSON)
  $('#cars').append(toHtml)
}

function fetchJSON() {

  $.ajax({
    url: `${baseUrl}/${counter}/3`,
    dataType: 'jsonp',
    success: addCarsToDOM
  })
  counter++
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()
}
