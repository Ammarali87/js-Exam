$('.bar').click(() => {
    $(".bar").addClass("d-none");
    $(".xx").removeClass("d-none");
});

$('.xx').click(() => {
    $(".xx").addClass("d-none");
    $(".bar").removeClass("d-none");
});


// Make a request to the API
// Make a request to the API
fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
  .then(response => response.json())
  .then(data => {
    // Extract the meals from the response
    const meals = data.meals;

    // Loop through each meal and display its image and name
    meals.forEach(meal => {
      const mealContainer = document.createElement('div');
      const mealImage = document.createElement('img');
      mealImage.src = meal.strMealThumb;
      const mealName = document.createElement('p');
      mealName.textContent = meal.strMeal;

      mealContainer.appendChild(mealImage);
      mealContainer.appendChild(mealName);

      // Use jQuery to select the #meals element and append mealContainer to it
      $("#meals").append(mealContainer);
    });
  })
  .catch(error => console.error('Error fetching data:', error));




$(".1").click((e) => {
    e.preventDefault();
    $(".meals").empty();
    $(".container1").addClass("d-block").removeClass("d-none ");
    $(".container2").addClass("d-none").removeClass("d-block ");
    $(".container3").addClass("d-none").removeClass("d-block ");
    $(".container4").addClass("d-none").removeClass("d-block ");
    $(".container5").addClass("d-none").removeClass("d-block ");
});

$(".2").click((e) => {
    e.preventDefault();
    
    $(".meals").empty();
    $(".container1").addClass("d-none").removeClass("d-block ");
    $(".container2").addClass("d-block").removeClass("d-none ");
    $(".container3").addClass("d-none").removeClass("d-block ");
    $(".container4").addClass("d-none").removeClass("d-block ");
    $(".container5").addClass("d-none").removeClass("d-block ");
         
	fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef')
	.then(response => response.json())
	.then(data => {
	  // Extract the meals from the response
	  const meals = data.meals;
  
	  // Loop through each meal and display its image and name
	  meals.forEach(meal => {
		const mealContainer = document.createElement('div');
		const mealImage = document.createElement('img');
		mealImage.src = meal.strMealThumb;
		const mealName = document.createElement('p');
		mealName.textContent = meal.strMeal;
  
		mealContainer.appendChild(mealImage);
		mealContainer.appendChild(mealName);
  
		// Use jQuery to select the #meals element and append mealContainer to it
		$(".container2").append(mealContainer);
	  });
	})
	.catch(error => console.error('Error fetching data:', error));
  
  });

function fetchData2() {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef`)
        .then(res => res.json())
        .then(data => displaymeals2(data))
        .catch(error => console.error('Error fetching data:', error));
}

$(".3").click((e) => {
    e.preventDefault();
        $(".meals").empty();
    $(".container1").addClass("d-none").removeClass("d-block ");
    $(".container2").addClass("d-none").removeClass("d-block ");
    $(".container3").addClass("d-block").removeClass("d-none ");
    $(".container4").addClass("d-none").removeClass("d-block ");
    $(".container5").addClass("d-none").removeClass("d-block ");
    $(".container3").html(`
        <div  class="meals mt-5 mx-auto text-center ">
            <div class="container text-center">
                <div  id="meals2" class="row g-5 row-cols-md- row-cols-xl-4   row-sm-cols-1">
                    <div class="col text-light">  
                        <h2> American</h2>    
                        <i class="fa fa-home fa-5x " aria-hidden="true"></i>
                    </div>
                    <div class="col text-light">  
                        <h2> Canada</h2>  
                        <i class="fa fa-home fa-5x" aria-hidden="true"></i>
                    </div>
                    <div class="col text-light">  
                        <h2> China</h2>   
                        <i class="fa fa-home fa-5x" aria-hidden="true"></i>
                    </div>
                    <div class="col text-light">  
                        <h2> Italy</h2>   
                        <i class="fa fa-home fa-5x" aria-hidden="true"></i>
                    </div>
                    <div class="col text-light">  
                        <h2> Africa</h2>   
                        <i class="fa fa-home fa-5x" aria-hidden="true"></i>
                    </div>
                    <div class="col text-light">  
                        <h2> British</h2>  
                        <i class="fa fa-home fa-5x" aria-hidden="true"></i>
                    </div>
                    <div class="col text-light">  
                        <h2> France</h2>   
                        <i class="fa fa-home fa-5x" aria-hidden="true"></i>
                    </div>
                    <div class="col text-light">  
                        <h2> Brazil</h2>   
                        <i class="fa fa-home fa-5x" aria-hidden="true"></i>
                    </div>
                    <div class="col text-light">  
                        <h2> Colombia</h2> 
                        <i class="fa fa-home fa-5x" aria-hidden="true"></i>
                    </div>
                    <div class="col text-light">  
                        <h2> Mali</h2>  
                        <i class="fa fa-home fa-5x" aria-hidden="true"></i>
                    </div>
                    <div class="col text-light">  
                        <h2> American</h2>    
                        <i class="fa fa-home fa-5x" aria-hidden="true"></i>
                    </div>
                    <div class="col text-light">  
                        <h2> Arabic</h2>  
                        <i class="fa fa-home fa-5x" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </div>
    `);
});

$(".4").click((e) => {
    e.preventDefault();
    $(".meals").empty();
    
    $(".container1").addClass("d-none").removeClass("d-block ");
    $(".container2").addClass("d-none").removeClass("d-block ");
    $(".container3").addClass("d-none").removeClass("d-block ");
    $(".container4").addClass("d-block").removeClass("d-none ");
    $(".container5").addClass("d-none").removeClass("d-block ");
    $(".container4").html(`
        <div  class="meals mt-5 mx-auto text-center ">
            <div class="container text-center">
                <div  id="meals2" class="row g-5 row-cols-md- row-cols-xl-4   row-sm-cols-1">
                    <div class="col text-light">  
                        <h2> beef</h2>    
                        <i class="fa-solid fa-drumstick-bite fa-4x " aria-hidden="true"></i>
                        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    </div>
                    <div class="col text-light">  
                        <h2> Fech</h2>   
                        <i class="fa-solid fa-drumstick-bite fa-4x" aria-hidden="true"></i>
                        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>                    
                    </div>
                    <div class="col text-light">  
                        <h2> chicken</h2>   
                        <i class="fa-solid fa-drumstick-bite fa-4x" aria-hidden="true"></i>
                        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>                   
                    </div>
                    <div class="col text-light">  
                        <h2> salmon</h2>   
                        <i class="fa-solid fa-drumstick-bite fa-4x" aria-hidden="true"></i>
                        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>                   
                    </div>
                    <div class="col text-light">  
                        <h2> pork</h2>    
                        <i class="fa-solid fa-drumstick-bite fa-4x" aria-hidden="true"></i>
                        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>                   
                    </div>
                    <div class="col text-light">  
                        <h2> meat</h2>    
                        <i class="fa-solid fa-drumstick-bite fa-4x" aria-hidden="true"></i>
                        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>                   
                    </div>
                    <div class="col text-light">  
                        <h2> France</h2>   
                        <i class="fa-solid fa-drumstick-bite fa-4x" aria-hidden="true"></i>
                        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>                   
                    </div>
                    <div class="col text-light">  
                        <h2> Seafood</h2>  
                        <i class="fa-solid fa-drumstick-bite fa-4x" aria-hidden="true"></i>
                        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>                   
                    </div>
                    <div class="col text-light">  
                        <h2> fresh</h2>    
                        <i class="fa-solid fa-drumstick-bite fa-4x" aria-hidden="true"></i>
                        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>                   
                    </div>
                    <div class="col text-light">  
                        <h2> beef</h2>    
                        <i class="fa-solid fa-drumstick-bite fa-4x" aria-hidden="true"></i>
                        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>                   
                    </div>
                    <div class="col text-light">  
                        <h2> pork</h2>    
                        <i class="fa-solid fa-drumstick-bite fa-4x" aria-hidden="true"></i>
                        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>                   
                    </div>
                    <div class="col text-light">  
                        <h2> Meat</h2>    
                        <i class="fa-solid fa-drumstick-bite fa-4x" aria-hidden="true"></i>
                        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>                   
                    </div>
                </div>
            </div>
        </div>
    `);
});

$(".5").click((e) => {
    e.preventDefault();
    $("#meals").empty(); // Clear previous content
    $(".container1").addClass("d-none").removeClass("d-block ");
    $(".container2").addClass("d-none").removeClass("d-block ");
    $(".container3").addClass("d-none").removeClass("d-block ");
    $(".container4").addClass("d-none").removeClass("d-block ");
    $(".container5").addClass("d-block").removeClass("d-none ");
});

function search() {
    $("#food-items").empty();
    let searchInput2 = document.getElementById("search1").value;

    fetch(`www.themealdb.com/api/json/v1/1/search.php?s=${searchInput2}  `)
        .then(res => res.json())
        .then(data => displayFoods(data));

    const displayFoods = foods => {
        const foodItemsDiv = document.getElementById('food-items');

        foods.meals.forEach(meal => {
            const foodDiv = document.createElement('div');

            foodDiv.className = 'meal';
            const foodInfo = `
                <h3>${meal.strMeal}</h3>
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            `;
            foodDiv.innerHTML = foodInfo;
            foodItemsDiv.appendChild(foodDiv);
        });
    }
}

function search2() {
    $("#food-items").empty();
    let searchInput = document.getElementById("search2").value;

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchInput}`)
        .then(res => res.json())
        .then(data => displayFoods(data));

    const displayFoods = foods => {
        const foodItemsDiv = document.getElementById('food-items');

        foods.meals.forEach(meal => {
            const foodDiv = document.createElement('div');
            foodDiv.className = 'meal';
            const foodInfo = `
                <h3>${meal.strMeal}</h3>
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            `;
            foodDiv.innerHTML = foodInfo;
            foodItemsDiv.appendChild(foodDiv);
        });
    }
}

let regName = /^[A-Z].+$/;
let regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let regNum = /^(01)[0-9]{9}$/;
let regAge = /^(0?[1-9]|[1-9][0-9]|[1][0-2][0-9]|75)$/; // Allows ages from 1 to 75
let regPassword = /^[0-9][a-z]+.{5,}$/;

let regPassword1 = $("#password").val() === $("#password1").val();

function isValidElement(reg, element) {
    let value = element.value;
    let errorElement = $(element).next('.alert');

    if (reg.test(value)) {
        $(element).removeClass('is-invalid').addClass('is-valid');
        errorElement.addClass('d-none');
        return true;
    } else {
        $(element).removeClass('is-valid').addClass('is-invalid');
        errorElement.removeClass('d-none');
        return false;
    }
}

async function fetchData() {
    try {
        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`);
        let data = await res.json();
        displaymeals(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();


$(".bar").click(() => {
    let sideWidth = $('.side-icon').innerWidth();
    let leftWidth = $('.side-icon').css("left");
    $(".sidebar").animate({ left: -sideWidth }, 1000);
});

$(".xx").click(() => {
    var screenWidth = $(window).width();
    $(".sidebar").animate({ left: .02 * screenWidth }, 1000);
});

$(window).ready(() => {
    $(".loader").fadeOut(2000);
    $("body").css("overflow", "visible");
});
