describe("Form cloner", function() {
	it("click should show the content", function(){
    loadFixtures("sample_form.html");
    FormCloner.init();
    $(".to_show").hide();
    $("#add_new").click();
	  expect($(".to_show")).toBeVisible();
	});
})
