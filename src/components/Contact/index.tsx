import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import emailjs from "@emailjs/browser";
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

  function handleSendEmail(data: ContactFormData) {
    let template = {
      about: data.about,
      company: data.company,
      email: data.email,
      cpfOrCnpj: data.cpfOrCnpj,
      content: data.content,
    };

    emailjs.send("", "", template).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );

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
        </ContactForm>
      </Container>
    </ContactContainer>
  );
}
