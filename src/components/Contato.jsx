
import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contato() {
  const [formulario, setFormulario] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });

  const [enviado, setEnviado] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormulario((anterior) => ({
      ...anterior,
      [name]: value,
    }));

    setEnviado(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log("Dados do formulário:", formulario);

    setEnviado(true);

    setFormulario({
      nome: "",
      email: "",
      assunto: "",
      mensagem: "",
    });
  }

  const contatos = [
    {
      titulo: "E-mail",
      descricao: "contato@lojadebrinquedos.com.br",
      detalhe: "Envie suas dúvidas para nossa equipe.",
      Icone: FaEnvelope,
      cor: "bg-pink-100 text-pink-600",
    },
    {
      titulo: "Telefone",
      descricao: "(11) 99999-9999",
      detalhe: "Estamos prontos para ajudar você.",
      Icone: FaPhone,
      cor: "bg-purple-100 text-purple-700",
    },
    {
      titulo: "Endereço",
      descricao: "Rua dos Brinquedos, 123",
      detalhe: "São Paulo - SP",
      Icone: FaMapMarkerAlt,
      cor: "bg-yellow-100 text-yellow-700",
    },
    {
      titulo: "Horário de atendimento",
      descricao: "Segunda a sexta, das 9h às 18h",
      detalhe: "Sábado, das 9h às 13h",
      Icone: FaClock,
      cor: "bg-pink-100 text-pink-600",
    },
  ];

  return (
    <main className="min-h-screen bg-purple-50/60 text-gray-800">
      {/* Banner principal */}
      <section className="bg-gradient-to-r from-purple-700 via-pink-500 to-yellow-400 px-6 py-16 text-center text-white">
        <span className="mb-4 inline-block rounded-full bg-white/25 px-5 py-2 text-sm font-bold">
          💛 Estamos aqui para ajudar!
        </span>

        <h1 className="mb-4 text-4xl font-extrabold md:text-5xl">
          Entre em contato
        </h1>

        <p className="mx-auto max-w-2xl leading-relaxed md:text-lg">
          Tem dúvidas sobre nossos brinquedos, pedidos ou entregas?
          Nossa equipe está pronta para ajudar você!
        </p>
      </section>

      {/* Conteúdo principal */}
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-2">
        {/* Informações de contato */}
        <div>
          <h2 className="mb-3 text-3xl font-extrabold text-purple-700">
            Vamos conversar? 🧸
          </h2>

          <div className="mb-5 h-1.5 w-24 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400" />

          <p className="mb-8 leading-relaxed text-gray-600">
            Queremos tornar sua experiência ainda mais especial.
            Escolha um dos nossos canais ou envie uma mensagem pelo
            formulário.
          </p>

          <div className="space-y-4">
            {contatos.map(
              ({ titulo, descricao, detalhe, Icone, cor }) => (
                <div
                  key={titulo}
                  className="flex items-start gap-4 rounded-2xl border border-purple-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-pink-200 hover:shadow-md"
                >
                  <div className={`rounded-xl p-3 ${cor}`}>
                    <Icone size={22} />
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-bold text-purple-800">
                      {titulo}
                    </h3>

                    <p className="break-words text-gray-600">
                      {descricao}
                    </p>

                    <p className="mt-1 text-sm text-gray-400">
                      {detalhe}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* Formulário */}
        <div className="rounded-3xl border border-purple-100 bg-white p-6 shadow-lg md:p-8">
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-xl bg-pink-100 p-3 text-pink-600">
              <FaPaperPlane size={22} />
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-purple-800">
                Envie sua mensagem
              </h2>

              <p className="text-sm text-gray-500">
                Estamos esperando por você! 💌
              </p>
            </div>
          </div>

          {enviado && (
            <div
              role="status"
              className="mb-5 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-800"
            >
              Formulário validado! Esta é uma demonstração:
              sua mensagem ainda não foi enviada à loja.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Nome */}
            <div>
              <label
                htmlFor="nome"
                className="mb-2 block text-sm font-semibold text-purple-900"
              >
                Nome completo
              </label>

              <input
                id="nome"
                name="nome"
                type="text"
                value={formulario.nome}
                onChange={handleChange}
                placeholder="Digite seu nome"
                autoComplete="name"
                required
                className="w-full rounded-xl border border-purple-100 px-4 py-3 outline-none transition placeholder:text-gray-400 focus:border-pink-400 focus:ring-2 focus:ring-pink-100"
              />
            </div>

            {/* E-mail */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-purple-900"
              >
                E-mail
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={formulario.email}
                onChange={handleChange}
                placeholder="seuemail@exemplo.com"
                autoComplete="email"
                required
                className="w-full rounded-xl border border-purple-100 px-4 py-3 outline-none transition placeholder:text-gray-400 focus:border-pink-400 focus:ring-2 focus:ring-pink-100"
              />
            </div>

            {/* Assunto */}
            <div>
              <label
                htmlFor="assunto"
                className="mb-2 block text-sm font-semibold text-purple-900"
              >
                Assunto
              </label>

              <select
                id="assunto"
                name="assunto"
                value={formulario.assunto}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-purple-100 bg-white px-4 py-3 outline-none transition focus:border-pink-400 focus:ring-2 focus:ring-pink-100"
              >
                <option value="">Selecione um assunto</option>
                <option value="produtos">
                  Dúvidas sobre produtos
                </option>
                <option value="pedido">Acompanhar pedido</option>
                <option value="entrega">Entrega e frete</option>
                <option value="troca">Trocas e devoluções</option>
                <option value="sugestao">
                  Sugestões e elogios
                </option>
                <option value="outro">Outro assunto</option>
              </select>
            </div>

            {/* Mensagem */}
            <div>
              <label
                htmlFor="mensagem"
                className="mb-2 block text-sm font-semibold text-purple-900"
              >
                Sua mensagem
              </label>

              <textarea
                id="mensagem"
                name="mensagem"
                value={formulario.mensagem}
                onChange={handleChange}
                placeholder="Escreva sua mensagem aqui..."
                rows={5}
                required
                className="w-full resize-y rounded-xl border border-purple-100 px-4 py-3 outline-none transition placeholder:text-gray-400 focus:border-pink-400 focus:ring-2 focus:ring-pink-100"
              />
            </div>

            {/* Botão de envio */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-purple-700 via-pink-500 to-pink-500 px-6 py-4 font-bold text-white shadow-md transition hover:from-purple-800 hover:via-pink-600 hover:to-pink-600 active:scale-[0.98]"
            >
              <FaPaperPlane />
              Enviar mensagem
            </button>
          </form>
        </div>
      </section>

      {/* Mensagem final */}
      <section className="px-6 pb-12">
        <div className="mx-auto max-w-4xl rounded-3xl border border-yellow-200 bg-gradient-to-r from-purple-100 via-pink-100 to-yellow-100 px-6 py-8 text-center">
          <h2 className="mb-2 text-2xl font-extrabold text-purple-800">
            Brincar faz o mundo mais feliz! 🎈
          </h2>

          <p className="text-gray-600">
            Obrigado por escolher nossa loja para fazer parte de
            momentos especiais.
          </p>

          <div className="mx-auto mt-5 h-1.5 w-28 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400" />
        </div>
      </section>
    </main>
  );
}
