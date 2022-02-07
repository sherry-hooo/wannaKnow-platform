import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCalendarAlt,
  faListAlt,
  faFileAlt,
  fas,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCalendarAlt as farFaCalendarAlt,
  faListAlt as farFaListAlt,
  faFileAlt as farFileAlt,
  far,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faCalendarAlt);
library.add(faListAlt);
library.add(faFileAlt);
library.add(fas);

library.add(farFaCalendarAlt);
library.add(farFaListAlt);
library.add(farFileAlt);
library.add(far);
export default FontAwesomeIcon;
