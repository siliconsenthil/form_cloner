var FormCloner = {
  init: function(){
    $.each($('.add_clone'), function(index, element){
      new formCloner($(element));
    });
  }
}

function formCloner(addCloneButton){
  var cloneIdentifier = addCloneButton.attr('id'),
      cloneAppendSection = _correspondingElement('data-clone-append-section'),
      cloneTemplate = _correspondingElement('data-clone-template');

  function addClone(){
    var cloneContent = cloneTemplate.find('.to_clone').children().clone(true);
    cloneAppendSection.append(cloneContent);
    cloneAppendSection.trigger('cloneComplete', [cloneContent]);
  }

  // $('[data-clonable-content="button_id"]')
  function _correspondingElement(dataAttr){
    return $('['+ dataAttr + '="'+ cloneIdentifier + '"]');
  }

  addCloneButton.click(addClone);
}
