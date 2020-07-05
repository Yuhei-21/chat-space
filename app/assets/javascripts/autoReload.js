$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="message-list__content" data-message-id=${message.id}>
          <div class="message-list__content__message1">
            <div class="message-list__content__message1__text1">
              ${message.user_name}
            </div>
            <div class="message-list__content__message1__text2">
              ${message.created_at}
            </div>
          </div>
          <div class="message-list__content__message2">
            <p class="Message__content">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
        `<div class="message-list__content" data-message-id=${message.id}>
          <div class="message-list__content__message1">
            <div class="message-list__content__message1__text1">
              ${message.user_name}
            </div>
            <div class="message-list__content__message1__text2">
              ${message.created_at}
            </div>
          </div>
          <div class="message-list__content__message2">
            <p class="Message__content">
              ${message.content}
            </p>
          </div>
        </div>`
      return html;
    };
  }
  let reloadMessages = function() {
    let last_message_id = $('.message-list__content:last').data("message-id");
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      if (messages.length !== 0) {
      let insertHTML = '';
      $.each(messages, function(i, message) {
        insertHTML += buildHTML(message)
      });
      $('.message-list').append(insertHTML);
      $('.message-list').animate({ scrollTop: $('.message-list')[0].scrollHeight});
      }
    })
    .fail(function() {
      alert('error');
    });
  };
  setInterval(reloadMessages, 7000);
});