import Head from "next/head";
import Calc from './component/CalcBox/Calc'

export default function Home() {
  return (
    <div>
      <Head>
        <title>React Calculator</title>
      </Head>

      <main>
        <div className="bg-[#FBFACD]">
          <div className="container mx-auto py-52">
            <h2 className="text-6xl font-medium text-[#404258] text-center">
              Cool Calculator
            </h2>
            <Calc/>
          </div>
        </div>
      </main>
    </div>
  );
}
