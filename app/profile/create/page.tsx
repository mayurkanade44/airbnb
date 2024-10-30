import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import SubmitButton from "@/components/form/SubmitButton";

function CreateProfilePage() {
  
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">new user</h1>
      <div className="border p-8 rounded-md">
        <FormContainer action={createProfileAction}>
          <div className="flex justify-center items-center">
            <div className="grid gap-4 mt-4 w-60">
              <FormInput type="text" name="firstName" label="First Name" />
              <FormInput type="text" name="lastName" label="Last Name" />
              <FormInput type="text" name="username" label="Username" />
              <FormInput type="date" name="dob" label="Date Of Birth" />
              <SubmitButton text="Create Profile" className="mt-4" />
            </div>
          </div>
        </FormContainer>
      </div>
    </section>
  );
}
export default CreateProfilePage;
