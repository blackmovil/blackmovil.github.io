// BLACKMOVIL - Los productos y precios se pueden editar fácilmente en index.html.
// El botón de WhatsApp ya está configurado para BLACKMOVIL.
document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
  link.addEventListener('click', () => {
    console.log('Contacto BLACKMOVIL por WhatsApp');
  });
});
