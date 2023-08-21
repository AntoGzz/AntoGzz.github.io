(function ($) {
  "use strict";
  var $form = $(".contact-form");

  const $buttonMailto = document.querySelector("#send-mail");
  const $messageBox = document.getElementById("required-msg");

  const $fullName = document.getElementById("full-name");
  const $subject = document.getElementById("subject");
  const $phone = document.getElementById("phone-number");
  const $budget = document.getElementById("budget");
  const $email = document.getElementById("email");
  const $message = document.getElementById("message");

  $form.submit(function (e) {
    e.preventDefault();

    if (
      !$fullName.value ||
      !$email.value ||
      !$subject.value ||
      !$message.value
    ) {
      $messageBox.classList.add("show");
      $fullName.classList.add("invalid");
      console.log("Campos esenciales vacíos por favor verifique");
      return false;
    }
    $messageBox.classList.remove("show");

    const form = new FormData(this);

    $buttonMailto.setAttribute(
      "href",
      `mailto:quirozd70@gmail.com?subject=${$subject.value} - ${$email.value}&body= - Teléfono: ${$phone.value}%0D%0A - Email: ${$email.value}%0D%0A - Presupuesto Estimado: $.${$budget.value}%0D%0A - Descripción: ${$message.value} %0D%0A`
    );

    $buttonMailto.click();
  });
})(jQuery);
