import Head from "next/head";
import { SignIn, SignInButton, SignOutButton, SignUp, useUser } from "@clerk/nextjs";

import { api } from "~/utils/api";

export default function Home() {
  const user = useUser()
  const {data} = api.conversations.getAll.useQuery()
  console.log(data)

  

  if (!user) return null


  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        {!user.isLoaded && <SignInButton/>}
        {!!user.isLoaded && <div className="flex flex-col gap-24"><h1>Data</h1>{data?.map((conversation) => (<div key={conversation.id}>{conversation.text}</div>))}
        <div>
          
          </div><SignOutButton/></div>}
      </main>
    </>
  );
}
