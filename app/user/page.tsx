import React from "react";
import Container from "@/components/Container";
import InputComp from "@/components/Input";
import Button from "@/components/Button";
import { fetchUsers } from "@/components/fetch/fetch";
import { pb } from "@/lib/pb";
async function User() {
  const userData = await fetchUsers();
  const sendData = await pb
    .collection("Users")
    .requestVerification("byrardn@gmail.com");
  console.log(sendData);
  return (
    <div className=" bg-bgColor text-white py-[16.45vh]">
      <Container>
        <div className="flex flex-col xl:flex-row justify-between gap-y-24">
          <div className="flex flex-col gap-5">
            <h2 className="text-4xl">Register a new account</h2>
            <InputComp
              type="email"
              label="E-mail address"
              subtitle="We'll never share your email with anyone else.
 "
            />
            <InputComp type="password" label="Password" subtitle="" />
            <div className="flex flex-row items-start justify-start gap-4">
              <InputComp type="checkbox" label="" subtitle="" />
              <p className="xl:max-w-[30vw] text-xs">
                If you really don´t want any newsletter check this box. Then you
                just agree to receive our marketing mails and product stuff. If
                you check this box we will not send out our newsletter to you at
                all...on mondays.
              </p>
            </div>
            <div className="relative">
              <Button>Submit</Button>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-4xl">Log In</h2>
            <InputComp
              type="email"
              label="E-mail address"
              subtitle="We'll never share your email with anyone else.
 "
            />
            <InputComp type="password" label="Password" subtitle="" />
            <div className="flex flex-row items-start justify-start gap-4">
              <InputComp type="checkbox" label="" subtitle="" />
              <p className="xl:max-w-[30vw] text-xs">
                If you really don´t want any newsletter check this box. Then you
                just agree to receive our marketing mails and product stuff. If
                you check this box we will not send out our newsletter to you at
                all...on mondays.
              </p>
            </div>
            <div className="relative">
              <Button>Log In</Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default User;
