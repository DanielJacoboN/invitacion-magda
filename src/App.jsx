import React from "react";

export default function InvitacionMagda() {
  const fechaEvento = new Date('2026-08-01T15:00:00');

  const calcularTiempo = () => {
    const ahora = new Date();
    const diferencia = fechaEvento - ahora;

    if (diferencia <= 0) {
      return {
        dias: 0,
        horas: 0,
        minutos: 0,
        segundos: 0,
      };
    }

    return {
      dias: Math.floor(diferencia / (1000 * 60 * 60 * 24)),
      horas: Math.floor((diferencia / (1000 * 60 * 60)) % 24),
      minutos: Math.floor((diferencia / 1000 / 60) % 60),
      segundos: Math.floor((diferencia / 1000) % 60),
    };
  };

  const [tiempo, setTiempo] = React.useState(calcularTiempo());

  React.useEffect(() => {
    const intervalo = setInterval(() => {
      setTiempo(calcularTiempo());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  const confirmarWhatsApp = () => {
    const mensaje = encodeURIComponent(
      'Hola, confirmo mi asistencia al cumpleaños de Magda ✨'
    );

    window.open(`https://wa.me/525511223344?text=${mensaje}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative font-serif">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1974&auto=format&fit=crop')",
        }}
      />

      <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-16 text-center">
        <div className="max-w-3xl w-full backdrop-blur-md bg-white/10 border border-white/20 rounded-[2rem] p-8 md:p-14 shadow-2xl">
          <p className="uppercase tracking-[0.4em] text-sm text-amber-100 mb-4">
            Estás invitado a celebrar
          </p>

          <h1 className="text-6xl md:text-8xl text-amber-50 mb-6 drop-shadow-lg">
            Magda
          </h1>

          <div className="w-24 h-[1px] bg-amber-200 mx-auto mb-8" />

	<p className="text-lg md:text-xl text-amber-50 leading-relaxed mb-8">
	  Te invito a celebrar con mucho gusto mi cumpleaños este próximo
	  <span className="font-semibold"> 1 de Agosto</span>.
	  <br />
	  Tu presencia hará de este día algo especial ✨
	</p>

	<div className="bg-white/10 border border-white/20 rounded-3xl p-6 mb-10 backdrop-blur-sm">
	  <p className="uppercase tracking-[0.3em] text-sm text-amber-100 mb-3">
	    Misa de Acción de Gracias
	  </p>

	  <p className="text-xl text-amber-50 mb-2">
	    Parroquia María Auxiliadora Ramos Millán
	  </p>

	  <p className="text-amber-100 mb-5">
	    1:00 PM
	  </p>

	  <a
	    href="https://maps.app.goo.gl/BBi4fdsTaJgJHZar7"
	    target="_blank"
	    className="inline-block px-6 py-3 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 border border-white/30"
	  >
	    Ver ubicación de la misa
	  </a>
	</div>

          <p className="text-xl md:text-2xl text-amber-50 leading-relaxed mb-3">
            1 de Agosto · 3:00 PM
          </p>

          <p className="text-base md:text-lg text-amber-100 mb-10 italic">
            Recepción desde las 2:45 PM
          </p>

          <a
            href="https://maps.app.goo.gl/4oRWDBeDrHE9jJL86"
            target="_blank"
            className="inline-block mb-12 px-8 py-4 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 border border-white/30 text-lg"
          >
            Ver ubicación
          </a>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { label: 'Días', value: tiempo.dias },
              { label: 'Horas', value: tiempo.horas },
              { label: 'Min', value: tiempo.minutos },
              { label: 'Seg', value: tiempo.segundos },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white/10 border border-white/20 rounded-3xl p-5 backdrop-blur-sm"
              >
                <div className="text-3xl md:text-4xl text-amber-50 font-bold mb-1">
                  {item.value}
                </div>
                <div className="text-sm uppercase tracking-widest text-amber-100">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={confirmarWhatsApp}
            className="px-10 py-4 rounded-full bg-amber-100 text-black text-lg hover:scale-105 transition-transform duration-300 shadow-xl"
          >
            Confirmar asistencia
          </button>

          <p className="mt-10 text-sm text-amber-100/80 italic">
            Será una tarde mágica llena de luces, música y momentos especiales ✨
          </p>
        </div>
      </div>
    </div>
  );
}
