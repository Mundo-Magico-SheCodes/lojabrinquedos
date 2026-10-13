import { useState } from "react";

export default function Header() {

  const [menuAberto, setMenuAberto] = useState(false);

  const links = [

    { nome: "Home", caminho: "/" },

    { nome: "Sobre", caminho: "/sobre" },

    { nome: "Contato", caminho: "/contato" },

  ];

  return (
    <header className="w-full bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo da loja */}
        <a href="/" className="flex items-center gap-3">
          <img

            src="/images/logo.png"

            alt="Logo Mundo Mágico"

            className="h-14 w-14 rounded-full object-contain"

          />
          <span className="text-2xl font-bold text-purple-700">

            Mundo <span className="text-pink-500">Mágico</span>
          </span>
        </a>

        {/* Menu para computadores */}
        <nav className="hidden items-center gap-8 md:flex">

          {links.map((link) => (
            <a

              key={link.nome}

              href={link.caminho}

              className="font-medium text-gray-700 transition hover:text-purple-600"
            >

              {link.nome}
            </a>

          ))}
        </nav>

        {/* Botão para celulares */}
        <button

          onClick={() => setMenuAberto(!menuAberto)}

          className="text-3xl text-purple-700 md:hidden"

          aria-label="Abrir ou fechar menu"

          aria-expanded={menuAberto}
        >

          {menuAberto ? "✕" : "☰"}
        </button>
      </div>

      {/* Menu para celulares */}

      {menuAberto && (
        <nav className="flex flex-col gap-4 bg-purple-50 px-6 py-5 md:hidden">

          {links.map((link) => (
            <a

              key={link.nome}

              href={link.caminho}

              onClick={() => setMenuAberto(false)}

              className="font-medium text-gray-700 transition hover:text-purple-600"
            >

              {link.nome}
            </a>

          ))}
        </nav>

      )}
    </header>

  );

}
