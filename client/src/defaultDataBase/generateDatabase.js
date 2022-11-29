import { addresses } from "./contactsData/addresses";
import { firstNames } from "./contactsData/firstNames";
import { images } from "./contactsData/images";
import { lastNames } from "./contactsData/lastNames";
import { nickNames } from "./contactsData/nickNames";
import { phoneNumbers } from "./contactsData/phoneNumbers";

export function getDefaultContacts() {
  // lastNames = lastNames.sort();

  let ret = {};
  for (let i = 0; i < 15; i++) {
    ret[i] = getContact(
      firstNames[i],
      lastNames[i],
      nickNames[i],
      addresses[i],
      [phoneNumbers[i], phoneNumbers[i + 1]],
      images[i]
    );
  }
  return ret;
}

function getContact(
  firstName,
  lastName,
  nickName,
  address,
  phoneNumbers,
  photo
) {
  return {
    firstName: firstName,
    lastName: lastName,
    nickName: nickName,
    address: address,
    phoneNumbers: phoneNumbers,
    photo: photo,
  };
}
