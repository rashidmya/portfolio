import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, fas } from "@fortawesome/free-solid-svg-icons";
import { faGithub,faLinkedin,faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import FontAwesomeIcon from "@/lib/FontAwesomeIcon.vue";

library.add(fas, faLinkedin, faGithub, faEnvelope, faWhatsapp);

export { FontAwesomeIcon };