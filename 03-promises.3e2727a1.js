var form=document.querySelector(".form");function createPromise(e,o){return new Promise((function(t,i){var n=Math.random()>.3;setTimeout((function(){n?t({position:e,delay:o}):i({position:e,delay:o})}),o)}))}form.addEventListener("submit",(function(e){e.preventDefault();for(var o=Number(form.delay.value),t=Number(form.step.value),i=Number(form.amount.value),n=1;n<=i;n++){createPromise(n,o+t*(n-1)).then((function(e){var o=e.position,t=e.delay;Notiflix.Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"))})).catch((function(e){var o=e.position,t=e.delay;Notiflix.Notify.failure("❌ Rejected promise ".concat(o," in ").concat(t,"ms"))}))}}));
//# sourceMappingURL=03-promises.3e2727a1.js.map