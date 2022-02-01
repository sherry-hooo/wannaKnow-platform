import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCalendarAlt,
  faListAlt,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCalendarAlt as farFaCalendarAlt,
  faListAlt as farFaListAlt,
  faFileAlt as farFileAlt,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faCalendarAlt);
library.add(faListAlt);
library.add(faFileAlt);
library.add(farFaCalendarAlt);
library.add(farFaListAlt);
library.add(farFileAlt);
export default FontAwesomeIcon;
