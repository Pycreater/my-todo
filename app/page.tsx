import Header from "@/components/Header";
import Todo from "@/components/Todo";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <div className="flex items-center justify-center mt-4">
        <Header title={"Tournamax Assignment"} />
      </div>
      <div className="flex flex-col items-center justify-center mt-10 gap-4">
        <Todo />
      </div>
    </div>
  );
}
