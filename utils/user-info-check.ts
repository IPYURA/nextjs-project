export function isValidEmail(email: string) {
  //const emailRegex = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const emailRegex =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
  return emailRegex.test(email);
}

// export function isValidEmailCode(emailCode: string) {
//   const emailCodeRegex = /^[0-9]{6}$/;
//   return emailCodeRegex.test(emailCode);
// }

export function isValidPassword(password: string) {
  const pwRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  return pwRegex.test(password);
}

export function isValidName(name: string) {
  const nameRegex = /^[가-힣|a-z|A-Z]{2,19}$/;
  return nameRegex.test(name);
}

export function isValidSsm7(ssm7: string) {
  const ssm7Regex =
    /^[0-9][0-9](0[1-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])[1-8]$/;
  return ssm7Regex.test(ssm7);
}

export function isValidPhone(phone: string) {
  const phoneRegex = /^01([0|1|6|7|8|9])=?([0-9]{3,4})-?([0-9]{4})$/;
  return phoneRegex.test(phone);
}
