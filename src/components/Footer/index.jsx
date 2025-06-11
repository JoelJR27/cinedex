import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  const emailPopup = async () => {
    const emailPopUpBox = document.getElementById("email-pop-up");
    try {
      await navigator.clipboard.writeText("joelviana250@gmail.com");

      emailPopUpBox.classList.remove("opacity-0", "invisible");
      emailPopUpBox.classList.add("opacity-100", "visible");

      setTimeout(() => {
        emailPopUpBox.classList.add("opacity-0", "invisible");
        emailPopUpBox.classList.remove("opacity-100", "visible");
      }, 3000);
    } catch (err) {
      console.error("Erro ao copiar email:", err);
    }
  };
  return (
    <footer className="border-t border-medium-blue p-8 font-inter mx-5 mt-20 relative">
      <ul className="flex flex-col gap-4 lg:flex-row lg:justify-around">
        <li>
          <a href="https://joeljr27.github.io/portifolio/" target="_blank">
            <h3 className="font-bold text-xl text-black hover:opacity-90 hover:underline decoration-primary-color cursor-pointer">
              JOEL JÚNIOR
            </h3>
          </a>
          <p className="p-1">Desenvolvedor Front End</p>
          <ul className="text-neutral-600 flex gap-4 text-2xl">
            <li>
              <a
                href="https://github.com/JoelJR27/portifolio"
                target="_blank"
                className="hover:text-neutral-800"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/joelviana27/"
                target="_blank"
                className="hover:text-neutral-800"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <button
                onClick={emailPopup}
                className="hover:text-neutral-800 cursor-pointer"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </button>
            </li>
          </ul>
          <p>
            ©2025 - Desenvolvido por
            <strong className="font-bold text-primary-color">
              {" "}
              Joel Junior
            </strong>
            .
          </p>
        </li>
        <li>
          <h3 className="font-bold text-xl text-primary-color">Contatos</h3>
          <p>Gostou do meu trabalho? Entre em contato comigo!</p>

          <a
            href="mailto:joelviana250@gmail.com"
            className="flex items-center gap-2 text-primary-color py-1"
          >
            <FontAwesomeIcon icon={faMessage} /> Enviar mensagem
          </a>
        </li>
      </ul>
      <div
        id="email-pop-up"
        className=" bg-primary-color sticky mt-4 bottom-0 rounded-lg inline-block  transition-all ease-in-out lg:left-1/2 lg:-translate-x-1/2 invisible opacity-0"
      >
        <p className="text-white p-2 text-sm">Email copiado! 😊</p>
      </div>
    </footer>
  );
}

export default Footer;
