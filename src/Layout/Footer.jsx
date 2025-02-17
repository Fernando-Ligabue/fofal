
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { TfiFacebook } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";


import logoSvg from '/logo-svg.svg';
import cards from '/cards.webp'

function Footer() {
  const [email, setEmail] = useState('');
  const year = new Date().getFullYear();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Fórmulário enviado com sucesso! Email: ${email}`);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <footer className="w-full bg-fofalText text-white font-archive pt-20">
      <div className='px-4'>
        <div className="w-full max-w-container mx-auto flex justify-center md:justify-start items-center">
          <NavLink to="/">
            <img src={logoSvg} className='w-full max-w-52 min-w-52' alt="Logo FOFAL" />
          </NavLink>
        </div>

        <div className="w-full max-w-container mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_2fr] place-items-start md-place-items-start gap-2">
          <div className='space-y-6 w-full flex flex-col justify-center items-center md:justify-start md:items-start'>
            <p className='text-white font-brandon-300'>Rua Almeida e Sousa n.° 13 - B <br />
              1250-064 Lisboa</p>
            <p className='text-white font-brandon-300'>+351 21 395 13 13<br />
              comercial@fofal.pt
            </p>
            <p className='text-white font-brandon-300'>NIPC: 500058369</p>
          </div>

          <div className='space-y-6 w-full flex flex-col justify-center items-center md:justify-start md:items-start '>
            <NavLink to="/privacy-policy" className='text-white font-brandon-300 no-underline'>Política de Privacidade</NavLink>
            <NavLink to="/cookie-policy" className='text-white font-brandon-300 no-underline'>Política de Cookies</NavLink>
            <NavLink to="/terms-conditions" className='text-white font-brandon-300 no-underline'>Termos e Condições</NavLink>
            <NavLink to="/ral" className='text-white font-brandon-300 no-underline'>RAL – Resolução de Litígios
            </NavLink>
            <NavLink to="https://www.livroreclamacoes.pt/inicio/" target='_blank' className='text-white font-brandon-300 no-underline'>Livro de Reclamações
            </NavLink>
          </div>


          <div className='space-y-6 w-full flex flex-col justify-center items-center md:justify-start md:items-start '>
            <NavLink to="/support" className='text-white font-brandon-300 no-underline'>Centro de Apoio
            </NavLink>
            <NavLink to="/faqs" className='text-white font-brandon-300 no-underline'>FAQ’s
            </NavLink>
            <NavLink to="/instructions" className='text-white font-brandon-300 no-underline'>Manual de instruções
            </NavLink>
            <NavLink to="/shipping" className='text-white font-brandon-300 no-underline'>Envio
            </NavLink>
            <NavLink to="/refunds" className='text-white font-brandon-300 no-underline'>Devoluções e Reembolsos
            </NavLink>
            <NavLink to="/track-order" className='text-white font-brandon-300 no-underline'>Acompanhe o seu pedido
            </NavLink>
            <NavLink to="/guarantee" className='text-white font-brandon-300 no-underline'>Garantia
            </NavLink>
            <NavLink to="/tips" className='text-white font-brandon-300 no-underline'>Dicas</NavLink>
          </div>

          <div className='w-full space-y-10'>
            <div className='space-y-6 w-full text-center md:text-left'>
              <h3 className='text-white font-brandon-400 no-underline text-3xl font-bold'>Inscreva-se para ofertas<br />
                exclusivas e muito mais.</h3>
              <form onSubmit={handleSubmit} className='flex gap-4 flex-col lg:flex-row'>
                <input
                  type="email"
                  onChange={handleEmailChange}
                  id="emailNewsletter"
                  value={email}
                  placeholder="Digite seu e-mail"
                  className="p-3 rounded-full w-full lg:max-w-80 bg-transparent border border-1 border-zinc-400 text-zinc-400 placeholder:text-zinc-400 placeholder:font-brandon-400"
                />
                <button type="submit" className="ml-auto lg:ml-0 bg-transparent border border-1 border-white text-white p-3 rounded-full font-brandon-400 w-full max-w-36">Subscrever</button>
              </form>
            </div>
            <div>
              <p className='text-white font-brandon-500 text-xl'>Seguir</p>
              <div className='flex justify-start items-center gap-4 mt-8'>
                <a className="no-underline" href="https://www.facebook.com/fofal.casadostapetes" target="_blank"><TfiFacebook size={24} /></a>
                <a className="no-underline" href="https://www.instagram.com/fofal_lda/" target="_blank"><FaInstagram size={24} /></a>
              </div>
            </div>
            <div className='w-full'>
              <img className='w-full max-w-96' src={cards} alt="Logo Fofal" />
            </div>
          </div>

        </div>
      </div>

      <div className='w-full bg-gradient-auto'>
        <div className='w-full flex flex-col sm:flex-row justify-between items-center px-4 py-4 max-w-container mx-auto'>
          <p className='text-white font-brandon-400'>© {year} FOFAL. Todos os direitos reservados.</p>
          <p className='text-white font-brandon-400'>Desenvolvido por <a href="https://creative-minds.pt/" className='no-underline'>Creative Minds.</a></p>
        </div>
      </div>
    </footer>
  );
}


export default Footer;