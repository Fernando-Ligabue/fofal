import InputForm from "@/components/InputForm";
import { useState } from "react";
import { Helmet } from "react-helmet";

function Contacts() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contact: "",
        theme: "",
        message: "",
        privacyPolicy: false,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Fórmulário enviado com sucesso!`);
    }


    return (
        <>
            <Helmet>
                <title>FOFAL | Contactos</title>
                <meta name="description" content="Fofal | Alcatifas para eventos, Tapetes de entrada, Tapetes de escritório" />
            </Helmet>

            <section className="w-full flex-center my-10 sm:my-10">
                <div className="w-full bg-banner min-h-[50vh] sm:min-h-[60vh] mt-40 md:mt-20 flex-center flex-col"
                >
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5235.697369159052!2d-9.166069219879786!3d38.71403709113484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd193366b8177cf1%3A0x61b04991f15119ea!2sCasa%20dos%20Tapetes%20Fofal!5e0!3m2!1spt-PT!2spt!4v1739205965510!5m2!1spt-PT!2spt" style={{ border: 0, width: "100%", height: "50vh" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>

            {/* Text Section */}
            <section className="lg:py-10 w-full" data-aos="fade-up" data-aos-delay="300">
                <div className='w-full max-w-screen-xl mx-auto  grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-4 items-start'>
                    <div className="w-full text-fofalText text-2xl font-brandon-300 leading-relaxed p-4">
                        <p>Contactos<br />
                            Pergunte-nos, nós<br />
                            respondemos!</p>
                    </div>
                    <div className="right w-full text-lg leading-relaxed  p-4">
                        <h2 className='text-4xl text-fofalText font-brandon-800'>
                            Preencha o Formulário <br />
                            Em que podemos ajudar?
                        </h2>
                    </div>
                </div>
            </section>

            <section className="w-full h-0.5 bg-zinc-300"></section>

            {/* form Section */}
            <section className="py-12 pb-20 w-full" data-aos="fade-up" data-aos-delay="300">
                <div className='w-full max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-start gap-16 p-4'>
                    <div className="right w-full text-lg leading-relaxed">
                        <form onSubmit={handleSubmit}>
                            <input
                                id="name"
                                type="text"
                                placeholder="Nome"
                                className="w-full p-2.5 mb-4 rounded-[8px] border border-zinc-700 font-brnadon-400 placeholder:font-brandon-400"
                                value={formData.name}
                                onChange={() => setFormData({ ...formData, name: "" })}
                            />
                            <input
                                id="email"
                                type="email"
                                placeholder="Email"
                                className="w-full p-2.5 mb-4 rounded-[8px] border border-zinc-700 font-brnadon-400 placeholder:font-brandon-400"
                                value={formData.email}
                                onChange={() => setFormData({ ...formData, email: "" })}
                            />
                            <input
                                id="contact"
                                type="text"
                                placeholder="Contacto"
                                className="w-full p-2.5 mb-4 rounded-[8px] border border-zinc-700 font-brnadon-400 placeholder:font-brandon-400"
                                value={formData.contact}
                                onChange={() => setFormData({ ...formData, contact: "" })}
                            />
                            <input
                                id="theme"
                                type="text"
                                placeholder="Temas"
                                className="w-full p-2.5 mb-4 rounded-[8px] border border-zinc-700 font-brnadon-400 placeholder:font-brandon-400"
                                value={formData.theme}
                                onChange={() => setFormData({ ...formData, theme: "" })}
                            />
                            <textarea
                                id="message"
                                placeholder="Mensagem"
                                className="w-full p-2.5 mb-4 rounded-[8px] border border-zinc-700 font-brnadon-400 placeholder:font-brandon-400 resize-none"
                                value={formData.message}
                                onChange={() => setFormData({ ...formData, message: "" })}
                            />

                            <div className="flex justify-start items-center gap-2">
                                <InputForm
                                    id="privacyPolicy"
                                    type="checkbox"
                                    checked={formData.privacyPolicy}
                                    onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            privacyPolicy: e.target.checked,
                                        });
                                    }}
                                />
                                <span className="block text-sm font-brandon-500 text-zinc-400">
                                    Li e compreendi a Política de Privacidade e Cookies
                                </span>
                            </div>

                            <button
                                type="submit"
                                className="font-brandon-500 text-white bg-gradient-auto p-2 border border-zinc-400 rounded-full w-full max-w-96 mt-6"
                            >
                                Enviar Mensagem
                            </button>
                        </form>
                    </div>
                    <div className="w-full max-w-96 text-fofalText text-3xl font-brandon-800 leading-relaxed space-y-6">
                        <div className="flex flex-col">
                            <h4 className="font-brandon-800 text-xl">MORADA</h4>
                            <p className="font-brandon-400 text-lg">Rua Almeida e Sousa n.° 13 - B,</p>
                            <div>
                                <p className="font-brandon-400 text-lg">1250-064 Lisboa, Portugal</p>
                            </div>
                            <div className="mb-2">
                                <p className="font-brandon-400 text-lg"><a href="tel:+351213951313" target="_blank">+351 21 395 13 13</a></p>
                                <p className="font-brandon-400 text-xs">Chamada para a Rede Fixa Nacional</p>
                            </div>
                            <p className="font-brandon-400 text-lg"><a href="mailto:comercial@fofal.pt" target="_blank">comercial@fofal.pt</a></p>
                        </div>
                        <div>
                            <h4 className="font-brandon-800 text-xl">Loja Física:</h4>
                            <p className="font-brandon-400 text-lg">Seg a Sex das 09:00- 13:00/15:00- 19:00</p>
                            <p className="font-brandon-400 text-lg">Sab das 09:00- 13:00</p>
                            <p className="font-brandon-400 text-lg">Durante o mês de Agosto encontramo-nos</p>
                            <p className="font-brandon-400 text-lg">encerrados ao sábado</p>
                        </div>
                    </div>
                </div >
            </section >
        </>
    );

}

export default Contacts;