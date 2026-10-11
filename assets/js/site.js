// MLS TRAVAUX : formulaire de devis.
(function () {
  // Formulaire : type de travaux pré-rempli depuis l'adresse (#climatisation, #peinture...)
  var form = document.getElementById('devis');
  if (!form) return;
  var select = form.querySelector('#f-travaux');
  function prefill() {
    var v = (location.hash || '').replace('#', '');
    if (v === 'pro') { var pro = form.querySelector('#f-pro'); if (pro) pro.checked = true; return; }
    if (v && select.querySelector('option[value="' + v + '"]')) select.value = v;
  }
  prefill();
  window.addEventListener('hashchange', prefill);

  var msg = form.querySelector('.form-msg');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    msg.hidden = true;
    if (!form.checkValidity()) { form.reportValidity(); return; }
    var key = form.getAttribute('data-key');
    var btn = form.querySelector('button[type="submit"]');
    function done(ok, text) {
      msg.className = 'form-msg ' + (ok ? 'ok' : 'err');
      msg.textContent = text;
      msg.hidden = false;
      btn.disabled = false;
      if (ok) form.reset();
      msg.scrollIntoView({ block: 'nearest' });
    }
    if (!key) {
      // Maquette : le formulaire n'est pas encore relié à contact@mlstravaux.fr.
      done(true, 'Merci ! Votre demande a bien été envoyée. Nous vous recontactons très vite. (Aperçu : le formulaire sera relié à contact@mlstravaux.fr à la mise en ligne.)');
      return;
    }
    btn.disabled = true;
    var data = new FormData(form);
    data.append('access_key', key);
    fetch('https://api.web3forms.com/submit', { method: 'POST', body: data, headers: { Accept: 'application/json' } })
      .then(function (r) { return r.json(); })
      .then(function (j) {
        if (j.success) done(true, 'Merci ! Votre demande a bien été envoyée. Nous vous recontactons très vite.');
        else done(false, "L'envoi n'a pas abouti. Réessayez, ou appelez-nous au 06 48 91 72 31.");
      })
      .catch(function () { done(false, "L'envoi n'a pas abouti. Vérifiez votre connexion, ou appelez-nous au 06 48 91 72 31."); });
  });
})();
