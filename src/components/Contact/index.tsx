import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { WhatsappLogo } from "phosphor-react";
import { Container } from "../Container";
import { ContactContainer, ContactForm } from "./styles";

const contactFormSchema = zod.object({
  company: zod.string(),
  cpfOrCnpj: zod.string(),
  about: zod.string(),
  content: zod.string(),
  email: zod.string(),
});

type ContactFormData = zod.infer<typeof contactFormSchema>;

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      company: "",
      cpfOrCnpj: "",
      about: "",
      content: "",
    },
  });

  async function handleSendEmail(data: ContactFormData) {
    let template = {
      about: data.about,
      company: data.company,
      email: data.email,
      cpfOrCnpj: data.cpfOrCnpj,
      content: data.content,
    };

    await fetch("https://formsubmit.co/ajax/emcapjr@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        nome: `${template.company} - ${template.cpfOrCnpj}`,
        _subject: `${template.about}`,
        email: `email: ${template.email}`,
        mensagem: `${template.content}`,
      }),
    });

    reset();
  }

  return (
    <ContactContainer id="contact">
      <Container>
        <h2>Entre em contato</h2>
        <ContactForm onSubmit={handleSubmit(handleSendEmail)} action="">
          <div>
            <label htmlFor="company">Nome da empresa</label>
            <input
              id="company"
              type="text"
              required
              placeholder="Empresa"
              {...register("company")}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              required
              placeholder="Email"
              {...register("email")}
            />
          </div>
          <div>
            <label htmlFor="cpfOrCnpj">CNPJ ou CPF</label>
            <input
              id="cpfOrCnpj"
              type="text"
              required
              placeholder="CNPJ ou CPF"
              {...register("cpfOrCnpj")}
            />
          </div>
          <div>
            <label htmlFor="about">Assunto</label>
            <input
              id="about"
              type="text"
              required
              placeholder="Assunto"
              {...register("about")}
            />
          </div>
          <div>
            <label htmlFor="content">Conteúdo</label>
            <textarea
              id="content"
              required
              placeholder="Conte que tipo de serviço deseja contratar com a gente."
              {...register("content")}
            />
          </div>
          <button type="submit">Enviar</button>
          <a
            href="https://api.whatsapp.com/send?phone=5584996036572"
            target="_blank"
          >
            Ou entre em contato pelo Whatsapp{" "}
            <WhatsappLogo size={32} color="#25d366" />{" "}
          </a>
        </ContactForm>
      </Container>
    </ContactContainer>
  );
}
