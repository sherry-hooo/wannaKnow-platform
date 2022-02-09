import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCalendarAlt,
  faListAlt,
  faFileAlt,
<<<<<<< HEAD
  faChevronLeft,
  faChevronRight,
  faBars,
  faSearch,
=======
  fas,
>>>>>>> sideBar
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
<<<<<<< HEAD
library.add(faChevronLeft);
library.add(faChevronRight);
library.add(farFaCalendarAlt);
library.add(farFaListAlt);
library.add(farFileAlt);
library.add(faBars);
library.add(faSearch);

=======
library.add(fas);

library.add(farFaCalendarAlt);
library.add(farFaListAlt);
library.add(farFileAlt);
library.add(far);
>>>>>>> sideBar
export default FontAwesomeIcon;
