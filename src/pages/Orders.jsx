import { OrdersList, Title } from "@/components/elements";

export default function Orders() {

  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-start gap-4 p-5">

      <Title title={`Orders`} classname={` text-3xl`} />

      <OrdersList />

    </div>
  )

}
