
var category_template,animals_template,animal_template;

var current_category = animals_data.category[0];
var current_animal = current_category.animals[0];


function showTemplate(template, data){
	var html    = template(data);
	$('#content').html(html);
}


$(document).ready(function(){

	var source   = $("#category-template").html();
	category_template = Handlebars.compile(source);
	
	source   = $("#animals-template").html();
	animals_template = Handlebars.compile(source);
	
	
	source   = $("#animal-template").html();
	animal_template = Handlebars.compile(source);
	$("#category-tab").click(function () {
		showTemplate(category_template, animals_data);
		$(".nav-tabs .active").removeClass("active");

		$("#category-tab").addClass("active");
		
		
				$(".category-thumbnail").click(function (){

			var index = $(this).data("id");
			current_category = animals_data.category[index];
			showTemplate(animals_template, current_category);
			$(".animal-thumbnail").click(function (){
				var index = $(this).data("id");
				current_animal = current_category.animals[index];
				
				showTemplate(animal_template, current_animal);
			});
		});
		
		
	});


		$("#animal-tab").click(function () {
		
		// displays the animals template
		showTemplate(animals_template, current_category);

		$(".nav-tabs .active").removeClass("active");
		$("#animal-tab").addClass("active");
		$(".animal-thumbnail").click(function (){

			var index = $(this).data("id");

			// set the current animal to this animal
			current_animal = current_category.animals[index];
			
			// displays the single animal template
			showTemplate(animal_template, current_animal);
		});
	});

	
	
	$("#category-tab").click();
	
	
	
});