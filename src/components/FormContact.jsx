import { useState } from 'react'

const FormContact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contact: "",
        theme: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Fórmulário enviado com sucesso!`);
    }


  return (
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
        <button
            type="submit"
            className="font-brandon-500 text-white bg-gradient-comInd p-2 border border-zinc-400 rounded-full w-full max-w-96"
        >
            Enviar
        </button>
    </form>
</div>
  )
}

export default FormContact