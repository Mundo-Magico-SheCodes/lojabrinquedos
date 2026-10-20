
import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";

import "./Contato.css";

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
      cor: "rosa",
    },
    {
      titulo: "Telefone",
      descricao: "(11) 99999-9999",
      detalhe: "Estamos prontos para ajudar você.",
      Icone: FaPhone,
      cor: "roxo",
    },
    {
      titulo: "Endereço",
      descricao: "Rua dos Brinquedos, 123",
      detalhe: "São Paulo - SP",
      Icone: FaMapMarkerAlt,
      cor: "amarelo",
    },
    {
      titulo: "Horário de atendimento",
      descricao: "Segunda a sexta, das 9h às 18h",
      detalhe: "Sábado, das 9h às 13h",
      Icone: FaClock,
      cor: "rosa",
    },
  ];

  return (
    <main className="contato-pagina">
      <section className="contato-banner">
        <span className="contato-etiqueta">
          💛 Estamos aqui para ajudar!
        </span>

        <h1>Entre em contato</h1>

        <p>
          Tem dúvidas sobre nossos brinquedos, pedidos ou entregas?
          Nossa equipe está pronta para ajudar você!
        </p>
      </section>

      <section className="contato-conteudo">
        <div className="contato-informacoes">
          <h2>Vamos conversar? 🧸</h2>

          <div className="contato-linha-colorida"></div>

          <p className="contato-descricao">
            Queremos tornar sua experiência ainda mais especial.
            Escolha um dos nossos canais ou envie uma mensagem pelo
            formulário.
          </p>

          <div className="contato-lista">
            {contatos.map(
              ({ titulo, descricao, detalhe, Icone, cor }) => (
                <div className="contato-card" key={titulo}>
                  <div className={`contato-icone ${cor}`}>
                    <Icone />
                  </div>

                  <div className="contato-card-texto">
                    <h3>{titulo}</h3>
                    <p>{descricao}</p>
                    <span>{detalhe}</span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        <div className="contato-formulario-card">
          <div className="contato-formulario-titulo">
            <div className="contato-icone rosa">
              <FaPaperPlane />
            </div>

            <div>
              <h2>Envie sua mensagem</h2>
              <p>Estamos esperando por você! 💌</p>
            </div>
          </div>

          {enviado && (
            <div className="contato-sucesso" role="status">
              Formulário validado! Esta é uma demonstração:
              sua mensagem ainda não foi enviada à loja.
            </div>
          )}

          <form onSubmit={handleSubmit} className="contato-form">
            <div className="contato-campo">
              <label htmlFor="nome">Nome completo</label>

              <input
                id="nome"
                name="nome"
                type="text"
                value={formulario.nome}
                onChange={handleChange}
                placeholder="Digite seu nome"
                autoComplete="name"
                required
              />
            </div>

            <div className="contato-campo">
              <label htmlFor="email">E-mail</label>

              <input
                id="email"
                name="email"
                type="email"
                value={formulario.email}
                onChange={handleChange}
                placeholder="seuemail@exemplo.com"
                autoComplete="email"
                required
              />
            </div>

            <div className="contato-campo">
              <label htmlFor="assunto">Assunto</label>

              <select
                id="assunto"
                name="assunto"
                value={formulario.assunto}
                onChange={handleChange}
                required
              >
                <option value="">Selecione um assunto</option>
                <option value="produtos">Dúvidas sobre produtos</option>
                <option value="pedido">Acompanhar pedido</option>
                <option value="entrega">Entrega e frete</option>
                <option value="troca">Trocas e devoluções</option>
                <option value="sugestao">Sugestões e elogios</option>
                <option value="outro">Outro assunto</option>
              </select>
            </div>

            <div className="contato-campo">
              <label htmlFor="mensagem">Sua mensagem</label>

              <textarea
                id="mensagem"
                name="mensagem"
                value={formulario.mensagem}
                onChange={handleChange}
                placeholder="Escreva sua mensagem aqui..."
                rows={5}
                required
              />
            </div>

            <button type="submit" className="contato-botao">
              <FaPaperPlane />
              Enviar mensagem
            </button>
          </form>
        </div>
      </section>

      <section className="contato-mensagem-final">
        <h2>Brincar faz o mundo mais feliz! 🎈</h2>

        <p>
          Obrigado por escolher nossa loja para fazer parte de
          momentos especiais.
        </p>

        <div className="contato-linha-colorida"></div>
      </section>
    </main>
  );
}
