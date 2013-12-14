describe("Form cloner", function() {
  it("click add_clone should clone from to_clone and add to clone-append-section", function(){
    loadFixtures("sample_form.html");
    FormCloner.init();
    $('#add_details').click();
    $('#add_details').click();
    $('#add_address').click();

    expect($('[data-clone-append-section="add_details"]')).toHaveHtml('<label>Detail</label><input type="text"/><label>Detail</label><input type="text"/>');
    expect($('[data-clone-append-section="add_address"]')).toHaveHtml('<input type="text"><input type="text"><input type="text"><input type="text">');
  });

  it("click add_clone should trigger cloneComplete on appender", function(){
    loadFixtures("sample_form.html");
    FormCloner.init();
    $('[data-clone-append-section="add_details"]').on('cloneComplete', function(evt, clonedContent){
      clonedContent.append('<span>Done</span>');
    });
    $('#add_details').click();
    expect($('[data-clone-append-section="add_details"]')).toContainHtml('<span>Done</span>');
  });
})
