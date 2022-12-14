export default function getConfigs() {
  return {
    loginUrl: process.env.NEXT_PUBLIC_LOGIN_URL || "/auth/login",
    baseUrl:
      process.env.NEXT_PUBLIC_BASE_URL ||
      "https://unlimitednow.live" ||
      "https://unlimitpotential.com",
  };
}
