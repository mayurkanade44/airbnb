'use server'

export const createProfileAction = async (prevState: any, formData: FormData) => {
  "use server";
  const firstName = formData.get("firstName") as string;
  console.log(firstName);
  return { message: "Profile is created" };
};