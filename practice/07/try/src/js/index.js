(() => {
  'use strict';

  const form = document.forms.form;

  form.addEventListener('submit', e => {
    e.preventDefault();

    const validities = [
      !!form.name.value.trim(),
      !!form.mail.value.trim(),
      !!form.gender.value,
      !!form.age.value,
      !!form.term.checked,
    ];

    for (let i = 0; i < validities.length; i++) {
      if (!validities[i]) {
        document.getElementById('error').classList.add('is-active');
        return;
      }
    }

    form.submit();
  });
})();